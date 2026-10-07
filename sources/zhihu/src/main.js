import { resolveDefault, getJson, endpoint, match, array, html, content, mediaUrl, imageItem, source, videoItem, result, fail } from "../../common/api.js";
import { sign } from "./signing.js";
export const resolve = (i) => resolveDefault(i, { redirect: new URL(i.url).hostname === "zhihu.link" || new URL(i.url).pathname.startsWith("/t/") });
export async function parse(input) {
  const { url } = await resolve(input);
  return parseUrl(url, 0);
}
async function parseUrl(url, depth) {
  if (depth > 3) fail();
  const task = parserContext, u = new URL(url);
  async function api(host, path, query = {}) {
    const queryText = Object.entries(query).map(([k, v]) => `${k}=${v}`).join("&"), signed = path + (queryText ? "?" + queryText : "");
    return getJson(endpoint("https://" + host, path, query), { headers: { Referer: "https://www.zhihu.com/", "x-zse-93": "101_3_3.0", "x-zse-96": await sign(signed, task.cookies.d_c0 ?? "") } });
  }
  let d;
  if (u.hostname === "daily.zhihu.com" || u.pathname.includes("/story/")) {
    d = await getJson("https://daily.zhihu.com/api/7/story/" + match(/\/story\/(\d+)/, u.pathname));
    const links = await html.select(d.body ?? "", "a"), origin = mediaUrl(links.find((e) => e.text.includes("\u67E5\u770B\u77E5\u4E4E\u539F\u6587"))?.attributes.href);
    if (origin && (new URL(origin).hostname === "zhihu.com" || new URL(origin).hostname.endsWith(".zhihu.com"))) return parseUrl(origin, depth + 1);
    return map(d, d.body ?? "", url);
  }
  if (u.hostname === "zhuanlan.zhihu.com") d = await api("zhuanlan.zhihu.com", "/api/articles/" + match(/\/p\/(\d+)/, u.pathname));
  else if (u.pathname.includes("/pin/")) d = await api("www.zhihu.com", "/api/v4/pins/" + match(/\/pin\/(\d+)/, u.pathname));
  else {
    const qid = match(/\/question\/(\d+)/, u.pathname);
    let aid = u.pathname.match(/\/answer\/(\d+)/)?.[1];
    if (!aid) {
      const answers = await api("www.zhihu.com", `/api/v4/questions/${qid}/answers`, { offset: "", limit: "1", sort_by: "default", include: "data[*].content" });
      aid = answers.data?.[0]?.id;
    }
    d = aid == null ? await api("www.zhihu.com", "/api/v4/questions/" + qid) : await api("www.zhihu.com", "/api/v4/answers/" + aid, { include: "data[*].content" });
  }
  if (d.error || !Object.keys(d).length) fail("Cookie required", "authenticationRequired");
  return map(d, typeof d.content === "string" ? d.content : d.detail ?? "", url);
}
async function map(d, body, url) {
  const headers = { Referer: "https://www.zhihu.com/" };
  let title = d.title ?? d.question?.title ?? "", media = [];
  if (Array.isArray(d.content)) {
    body = "";
    for (const i of d.content) {
      if (i.type === "text") {
        body += (i.content ?? "") + "\n";
        title ||= i.title ?? "";
      }
      if (i.type === "image") {
        const p = imageItem(i.original_url ?? i.url, { headers, data: i });
        if (p) media.push(p);
      }
      if (i.type === "video") {
        const v = i.video_info ?? {}, sources = Object.values(v.playlist ?? {}).filter((x) => mediaUrl(x.url)).map((x) => source(mediaUrl(x.url), { headers, data: x }));
        if (sources.length) media.push(videoItem(sources, { thumbnailUrl: mediaUrl(v.thumbnail), durationMs: v.duration == null ? null : v.duration * 1e3 }));
      }
    }
  }
  const c = await content(body, headers);
  media.push(...c.media.filter((m) => !new URL(m.sources[0].url).pathname.includes("/equation")));
  if (!title && !body && !media.length) fail();
  return result(url, { title, content: c.text, markdown: c.markdown, media });
}
