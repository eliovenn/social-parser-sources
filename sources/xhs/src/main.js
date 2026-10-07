import { http, html, assigned, object, array, host, clean, fail, source, videoItem, result, mediaUrl, mobileUA } from "../../common/api.js";
const ua = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/144.0.0.0 Safari/537.36";
const baseHeaders = { "User-Agent": ua, Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8", "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8", Referer: "https://www.xiaohongshu.com/" };
function noteId(u) {
  const path = new URL(u).pathname;
  return path.match(/^\/(?:explore|discovery\/item|search_result)\/([^/]+)/)?.[1] ?? path.match(/^\/user\/profile\/[^/]+\/([^/]+)/)?.[1];
}
function normalize(u) {
  const x = new URL(u);
  if (!["xiaohongshu.com", "xhslink.com", "xhslink.cn"].some((d) => host(u, d))) fail("External redirect", "unsupportedContent");
  x.protocol = "https:";
  x.hash = "";
  if (x.hostname === "xiaohongshu.com") x.hostname = "www.xiaohongshu.com";
  if (/^\/login(?:\/|$)/.test(x.pathname)) fail("Login required", "authenticationRequired");
  if (/^\/404(?:\/|$)/.test(x.pathname)) fail("Not found", "notFound");
  return x.href;
}
async function fetchPage(url, { authenticated = false, mobile = false, resolveOnly = false } = {}) {
  let current = normalize(url);
  const task = parserContext;
  for (let i = 0; i < 9; i++) {
    const trusted = host(current, "xiaohongshu.com");
    if (resolveOnly && trusted && noteId(current)) return { url: current };
    const headers = { ...baseHeaders, ...mobile ? { "User-Agent": mobileUA } : {} };
    if (trusted) for (const [key, value] of Object.entries(task.headers)) {
      if (!authenticated && ["cookie", "authorization"].includes(key.toLowerCase())) continue;
      const normalized = Object.keys(headers).find((k) => k.toLowerCase() === key.toLowerCase()) ?? key;
      headers[normalized] = value;
    }
    const r = await http.get(current, { headers, credentials: trusted && authenticated, followRedirects: false });
    normalize(r.url);
    if (r.status >= 300 && r.status < 400) {
      const location = Object.entries(r.headers).find(([k]) => k.toLowerCase() === "location")?.[1]?.[0];
      if (!location) fail("Missing redirect", "network");
      current = normalize(new URL(location, current).href);
      continue;
    }
    return r;
  }
  fail("Too many redirects", "network");
}
export async function resolve(input) {
  const r = await fetchPage(input.url, { resolveOnly: true });
  if (!noteId(r.url)) fail("Invalid note link", "unsupportedContent");
  return { url: r.url, canonicalUrl: clean(r.url) };
}
function extract(scripts, id) {
  for (const script of scripts) {
    const state = assigned(script.text, "window.__INITIAL_STATE__"), map = object(state.note?.noteDetailMap), exact = map[id]?.note;
    const matches = (n) => n && Object.keys(n).length && (n.noteId == null || String(n.noteId) === id) && (n.id == null || String(n.id) === id);
    if (matches(exact)) return exact;
    for (const e of Object.values(map)) {
      const n = e.note;
      if ((String(n?.noteId) === id || String(n?.id) === id) && matches(n)) return n;
    }
    const server = assigned(script.text, "window.__SETUP_SERVER_STATE__");
    for (const n of [state.noteData?.data?.noteData, server.LAUNCHER_SSR_STORE_PAGE_DATA?.noteData]) if ((String(n?.noteId) === id || String(n?.id) === id) && matches(n)) return n;
  }
  fail("Note data missing");
}
const mediaHeaders = { "User-Agent": ua, Referer: "https://www.xiaohongshu.com/" };
function streams(data) {
  return Object.entries(object(data)).flatMap(([codec, items]) => array(items).flatMap((s) => mediaUrl(s.masterUrl) ? [source(mediaUrl(s.masterUrl), { headers: mediaHeaders, data: s, extension: "mp4", videoCodec: codec, bitrate: s.videoBitrate ?? null })] : []));
}
function imageUrl(v) {
  const u = mediaUrl(v);
  return u && host(u, "xhscdn.com") ? u.replace(/^http:/, "https:") : u;
}
function image(i, preview = false) {
  const scenes = array(i.infoList);
  return imageUrl(i[preview ? "urlPre" : "urlDefault"]) ?? (!preview ? imageUrl(i.url) : null) ?? scenes.filter((s) => (preview ? ["H5_PRV", "WB_PRV"] : ["H5_DTL", "WB_DFT"]).includes(s.imageScene)).map((s) => imageUrl(s.url)).find(Boolean) ?? (preview ? image(i) : null) ?? scenes.map((s) => imageUrl(s.url)).find(Boolean);
}
function mapNote(note, url) {
  const images = array(note.imageList), video = object(note.video), media = [];
  if (note.type === "video" && !Object.keys(video).length) fail("Missing video");
  if (Object.keys(video).length) {
    const data = video.media?.stream, sources = streams(data);
    if (!sources.length) fail("No video sources");
    media.push(videoItem(sources, { thumbnailUrl: images.length ? image(images[0]) : null, width: sources[0].width, height: sources[0].height, durationMs: Object.values(object(data)).flat()[0]?.duration ?? null }));
  } else for (const i of images) {
    const address = image(i);
    if (!address) continue;
    const live = i.livePhoto === true ? streams(i.stream) : [];
    media.push({ type: live.length ? "livePhoto" : "image", sources: [source(address, { track: "image", headers: mediaHeaders }), ...live], thumbnailUrl: image(i, true) ?? address, width: i.width ?? null, height: i.height ?? null });
  }
  if (!media.length && !["normal", "video"].includes(note.type)) fail("Unsupported note", "unsupportedContent");
  return result(clean(url), { title: (note.title ?? "").trim(), content: (note.desc ?? "").replaceAll("[\u8BDD\u9898]#", "").trim(), media });
}
export async function parse(input) {
  const { url } = await resolve(input), task = parserContext;
  const hasCookie = Object.keys(task.cookies).length || Object.entries(task.headers).some(([k, v]) => k.toLowerCase() === "cookie" && v);
  let first;
  for (const mobile of [false, true]) for (const authenticated of hasCookie ? [true, false] : [false]) {
    try {
      const r = await fetchPage(url, { mobile, authenticated });
      return mapNote(extract(await html.select(r.body, "script"), noteId(url)), url);
    } catch (e) {
      if (["timeout", "unsupportedContent", "permissionDenied"].includes(e.code)) throw e;
      first ??= e;
    }
  }
  throw first;
}
