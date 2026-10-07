import { array, object, assigned, objects, get, postJson, resolveDefault, source, imageItem, videoItem, result, mediaUrl, urls, fail, desktopUA } from "../../common/api.js";
const keys = ["photoId", "vid", "id", "modal_id", "v", "s", "pid"], headers = { Referer: "https://www.kuaishou.com/", "User-Agent": desktopUA };
export const resolve = (input) => resolveDefault(input, { redirect: new URL(input.url).hostname === "v.kuaishou.com" || new URL(input.url).pathname.startsWith("/f/"), keep: keys });
function map(state, url, id) {
  const client = object(state.defaultClient);
  let photo = object(client["VisionVideoDetailPhoto:" + id]), payload = {};
  for (const n of objects(state)) {
    const p = n.photo;
    if (p && Object.keys(p).length && (p.id == null || String(p.id) === id) && (p.photoId == null || String(p.photoId) === id)) {
      photo = p;
      payload = n;
      break;
    }
  }
  if (!Object.keys(photo).length) return null;
  const media = [], atlas = photo.ext_params?.atlas ?? payload.atlas ?? {}, cdn = (typeof atlas.cdn === "string" ? atlas.cdn : array(atlas.cdn)[0]) ?? atlas.cdnList?.[0]?.cdn ?? "";
  for (const [i, path] of array(atlas.list).entries()) {
    let u = path;
    if (!mediaUrl(u) && cdn) u = (cdn.startsWith("http") ? cdn : "https:" + (cdn.startsWith("//") ? cdn : "//" + cdn)).replace(/\/$/, "") + "/" + path.replace(/^\//, "");
    const size = atlas.size?.[i] ?? {}, item = imageItem(u, { headers, data: { width: size.w, height: size.h } });
    if (item) media.push(item);
  }
  const sources = [], seen = /* @__PURE__ */ new Set();
  const add = (raw, data = {}) => {
    for (const u of urls(raw)) if (!seen.has(u)) {
      seen.add(u);
      sources.push(source(u, { headers, data }));
    }
  };
  for (const k of ["photoUrl", "photoH265Url", "mainMvUrls"]) add(photo[k]);
  function deref(v, depth = 0) {
    if (depth > 15) return null;
    if (Array.isArray(v)) return v.map((x) => deref(x, depth + 1));
    if (v && typeof v === "object") {
      const ref = v.__ref ?? v.id;
      if (typeof ref === "string" && client[ref]) return deref(client[ref], depth + 1);
      return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deref(x, depth + 1)]));
    }
    if (typeof v === "string" && /^[\[{]/.test(v)) try {
      return JSON.parse(v);
    } catch {
    }
    return v;
  }
  for (const key of ["manifest", "manifestH265", "videoResource"]) for (const n of objects(deref(photo[key]))) if (n.url && (n.width != null || n.qualityType != null || n.codecs != null)) {
    add(n.url, n);
    add(n.backupUrl, n);
  }
  if (!sources.length && client["VisionVideoDetailPhoto:" + id]) {
    const r = object(client["VisionVideoSetRepresentation:1"]);
    add(r.url, r);
  }
  if (sources.length) media.push(videoItem(sources, { thumbnailUrl: urls(photo.coverUrl ?? photo.coverUrls ?? photo.webpCoverUrls)[0] ?? null, durationMs: photo.duration == null ? null : Math.round(photo.duration * 1e3) }));
  return media.length ? result(url, { content: photo.caption ?? "", media }) : null;
}
export async function parse(input) {
  const { url } = await resolve(input), u = new URL(url), id = keys.map((k) => u.searchParams.get(k)).find(Boolean) ?? u.pathname.split("/").filter(Boolean).pop()?.replace(/\.html$/, "");
  if (!id) fail("No photo ID");
  for (const candidate of /* @__PURE__ */ new Set([url, "https://v.m.chenzhongtech.com/fw/photo/" + id, "https://www.kuaishou.com/short-video/" + id])) try {
    const r2 = await get(candidate, { headers });
    for (const marker of ["window.__APOLLO_STATE__", "window.INIT_STATE"]) {
      const value2 = map(assigned(r2.body, marker), url, id);
      if (value2) return value2;
    }
  } catch (e) {
    if (["timeout", "permissionDenied"].includes(e.code)) throw e;
  }
  const r = await postJson("https://www.kuaishou.com/graphql", { operationName: "visionVideoDetail", variables: { photoId: id, page: "search" }, query: "query visionVideoDetail($photoId:String,$page:String){visionVideoDetail(photoId:$photoId,page:$page){status photo{id caption duration coverUrl photoUrl manifest{adaptationSet{duration representation{url backupUrl width height codecs avgBitrate}}} manifestH265 videoResource}}}" }, { headers });
  const value = map(object(r.data), url, id);
  if (!value) fail("Login required", "authenticationRequired");
  return value;
}
