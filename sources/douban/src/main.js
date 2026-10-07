import { resolveDefault, getJson, endpoint, match, array, mediaUrl, urls, imageItem, source, videoItem, content, result, fail } from "../../common/api.js";
export const resolve = (i) => resolveDefault(i, { redirect: new URL(i.url).hostname === "douc.cc" || new URL(i.url).pathname.includes("/dispatch") });
export async function parse(input) {
  const { url, canonicalUrl } = await resolve(input);
  const id = match(/\/topic\/(\d+)/, new URL(url).pathname);
  const d = await getJson(`https://m.douban.com/rexxar/api/v2/group/topic/${id}`, { headers: { Referer: "https://m.douban.com/", "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 Version/17.0 Mobile/15E148 Safari/604.1" } });
  if (d.title == null && d.content == null) fail();
  const headers = { Referer: "https://www.douban.com/" }, media = [];
  for (const p of array(d.photos)) {
    const im = p.image ?? {}, large = im.large ?? im.normal ?? {}, anim = urls(im.video?.url)[0];
    if (im.is_animated === true && anim) media.push({ type: "animation", sources: [source(anim, { headers })], thumbnailUrl: mediaUrl(large.url) });
    else {
      const i = imageItem(large.url ?? p.url, { headers, data: large });
      if (i) media.push(i);
    }
  }
  const v = d.video_info ?? {};
  if (mediaUrl(v.video_url)) {
    const duration = String(v.duration ?? "").split(":").reduce((a, b) => a * 60 + (Number(b) || 0), 0);
    media.push(videoItem([source(mediaUrl(v.video_url), { headers })], { thumbnailUrl: mediaUrl(v.cover_url), width: v.video_width ?? null, height: v.video_height ?? null, durationMs: duration * 1e3 }));
  }
  const c = await content(d.content ?? "", headers);
  return result(canonicalUrl, { title: d.title ?? "", content: c.text, markdown: c.markdown, media: media.length ? media : c.media });
}
