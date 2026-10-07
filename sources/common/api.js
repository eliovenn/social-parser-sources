import {createHash, randomBytes} from "crypto";
import {http} from "./http.js";
import {html,xml} from "./html.js";
export { http, html, xml };
export * from "./data.js";
import { json } from "./data.js";
export const desktopUA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36";
export const mobileUA = "Mozilla/5.0 (Linux; Android 13) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Mobile Safari/537.36";
export function fail(message = "Source could not find the requested content", code = "parseFailed") {
  throw Object.assign(new Error(message), { code });
}
export const array = (v) => Array.isArray(v) ? v : [];
export const object = (v) => v && typeof v === "object" && !Array.isArray(v) ? v : {};
export const string = (v) => typeof v === "string" ? v : "";
export const match = (re, value) => {
  const m = re.exec(value);
  if (!m) fail("Unsupported link", "unsupportedContent");
  return m[1];
};
export const host = (u, d) => new URL(u).hostname === d || new URL(u).hostname.endsWith("." + d);
export const clean = (u, keys = []) => {
  const url = new URL(u);
  for (const k of url.search.slice(1).split("&").filter(Boolean).map((p) => decodeURIComponent(p.split("=")[0].replace(/\+/g, " ")))) if (!keys.includes(k)) url.searchParams.delete(k);
  url.hash = "";
  return url.href;
};
export const endpoint = (base, path, params = {}) => {
  const u = new URL(path, base);
  for (const [k, v] of Object.entries(params)) u.searchParams.set(k, String(v));
  return u.href;
};
export const form = (o) => Object.entries(o).map(([k, v]) => encodeURIComponent(k).replace(/%20/g, "+") + "=" + encodeURIComponent(v).replace(/%20/g, "+")).join("&");
export async function get(url, options = {}) {
  return http.get(url, { ...options, headers: { "User-Agent": desktopUA, ...options.headers } });
}
export async function getJson(url, options = {}) {
  return json((await get(url, options)).body);
}
export async function postJson(url, body, options = {}) {
  return json((await http.post(url, body, { ...options, headers: { "User-Agent": desktopUA, "Content-Type": "application/json", ...options.headers } })).body);
}
export async function postForm(url, fields, options = {}) {
  return json((await http.post(url, form(fields), { ...options, headers: { "User-Agent": desktopUA, "Content-Type": "application/x-www-form-urlencoded", ...options.headers } })).body);
}
export async function resolveDefault(input, { redirect = false, keep = [], parseOnly = [] } = {}) {
  const address = redirect ? (await get(input.url)).url : input.url;
  return { url: clean(address, [...keep, ...parseOnly]), canonicalUrl: clean(address, keep) };
}
export function mediaUrl(v) {
  if (typeof v !== "string" || !v) return null;
  try {
    const u = new URL(v.startsWith("//") ? "https:" + v : v);
    return ["http:", "https:"].includes(u.protocol) && u.hostname ? u.href : null;
  } catch {
    return null;
  }
}
export function urls(v) {
  if (typeof v === "string") return mediaUrl(v) ? [mediaUrl(v)] : [];
  if (Array.isArray(v)) return v.flatMap(urls);
  for (const k of ["url_list", "urlList", "UrlList", "url", "src"]) if (v?.[k] != null) return urls(v[k]);
  return [];
}
export function source(url, { track = "audioVideo", headers = {}, data = {}, ...extra } = {}) {
  const u = new URL(url);
  return { url, kind: u.pathname.includes(".m3u8") ? "hls" : u.pathname.includes(".mpd") ? "dash" : "direct", track, headers, width: Number(data.width ?? data.Width) || null, height: Number(data.height ?? data.Height) || null, bitrate: Number(data.bitrate) || null, extension: u.pathname.match(/\.(mp4|webm|m3u8|mpd|jpg|jpeg|png|webp|gif|avif)$/i)?.[1] ?? null, ...extra };
}
export function imageItem(value, { headers = {}, data = {}, liveVideo } = {}) {
  const images = [...new Set(urls(value))], videos = [...new Set(urls(liveVideo))];
  if (!images.length) return null;
  return { type: videos.length ? "livePhoto" : new URL(images[0]).pathname.toLowerCase().endsWith(".gif") ? "animation" : "image", sources: [...images.map((u) => source(u, { track: "image", headers, data })), ...videos.map((u) => source(u, { headers }))], thumbnailUrl: images[0], width: Number(data.width) || null, height: Number(data.height) || null };
}
export function videoItem(sources, extra = {}) {
  return { type: "video", sources, ...extra };
}
export function result(url, data = {}) {
  return { canonicalUrl: url, title: "", content: "", media: [], ...data };
}
export async function content(body, headers = {}) {
  const c = await html.content(body);
  return { ...c, media: [...new Set(c.images)].map((u) => imageItem(u, { headers })).filter(Boolean) };
}
export const digest = (algorithm, text) => createHash(algorithm).update(text).digest("hex");
export const random = length => Array.from(randomBytes(length));
export async function metaCookies(domain) {
  const c = parserContext;
  if (c.cookies.csrftoken) return {};
  const r = await get("https://" + domain + "/");
  for (const [k, values] of Object.entries(r.headers)) {
    if (k.toLowerCase() !== "set-cookie") continue;
    for (const v of values) {
      const m = /(?:^|,\s*)csrftoken=([^; ,]+)/.exec(v);
      if (m) return { csrftoken: m[1] };
    }
  }
  return {};
}
export function metaMedia(data, headers) {
  if (data.media_type === 8) return array(data.carousel_media).flatMap((e) => metaMedia(e, headers));
  if (data.media_type === 19) return metaMedia(data.text_post_app_info?.linked_inline_media ?? {}, headers);
  const images = array(data.image_versions2?.candidates), videos = array(data.video_versions);
  const values = videos.length ? videos : images;
  const sources = values.flatMap((v) => mediaUrl(v.url) ? [source(mediaUrl(v.url), { headers, data: v, track: videos.length ? "audioVideo" : "image" })] : []);
  return sources.length ? [{ type: videos.length ? "video" : "image", sources, thumbnailUrl: mediaUrl(images[0]?.url), width: data.original_width ?? null, height: data.original_height ?? null, durationMs: videos.length && data.video_duration != null ? Math.round(data.video_duration * 1e3) : null }] : [];
}
