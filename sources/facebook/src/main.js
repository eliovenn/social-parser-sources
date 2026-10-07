import { get, html, xml, readData, resolveDefault, host, source, videoItem, result, mediaUrl, fail } from "../../common/api.js";
export const resolve = (input) => resolveDefault(input, { redirect: new URL(input.url).pathname.startsWith("/share/"), keep: ["v"] });
function* maps(v, id, depth = 0) {
  if (depth > 80) return;
  if (Array.isArray(v)) {
    for (const x of v) yield* maps(x, id, depth + 1);
  } else if (v && typeof v === "object") {
    const identity = v.video_id ?? v.videoId ?? (v.__typename === "Video" ? v.id : null);
    if (id != null && identity != null && String(identity) !== id) return;
    yield v;
    for (const x of Object.values(v)) yield* maps(x, id, depth + 1);
  }
}
function videoId(url) {
  const u = new URL(url);
  return u.searchParams.get("v") ?? u.pathname.match(/\/(?:videos|reel)\/(?:[^/]+\/)?(\d+)/)?.[1];
}
export async function parse(input) {
  const { url } = await resolve(input), page = await get(url), metadata = await html.select(page.body, "meta"), meta = (k) => metadata.find((e) => e.attributes.property === k || e.attributes.name === k)?.attributes.content ?? "", canonical = mediaUrl(meta("og:url")), id = videoId(url) ?? (canonical && host(canonical, "facebook.com") ? videoId(canonical) : null), roots = [];
  for (const script of await html.select(page.body, "script")) {
    const text = script.text.trim();
    if (/^[\[{]/.test(text)) try {
      roots.push(readData(text));
    } catch {
    }
    for (const marker of ["handleServerJS(", "s.handle(", "bigPipe.onPageletArrive("]) {
      let offset = 0;
      while ((offset = text.indexOf(marker, offset)) >= 0) {
        offset += marker.length;
        try {
          roots.push(readData(text.slice(offset)));
        } catch {
        }
      }
    }
  }
  const candidates = [];
  for (const root of roots) for (const n of maps(root)) {
    const nid = n.video_id ?? n.videoId ?? n.id;
    if (nid != null && id != null && String(nid) === id) candidates.push(n);
  }
  if (!candidates.length) {
    const legacy = roots.flatMap((r) => [...maps(r)]).filter((n) => n.videoData && (id == null || String(n.video_id) === id));
    if (legacy.length === 1) candidates.push(legacy[0]);
  }
  const sources = [], seen = /* @__PURE__ */ new Set(), headers = { "User-Agent": "facebookexternalhit/1.1", Referer: "https://www.facebook.com/" };
  function add(v, label, kind, track = "audioVideo") {
    const u = mediaUrl(v);
    if (!u || seen.has(u)) return;
    seen.add(u);
    sources.push(source(u, { headers, track, formatId: label, ...kind ? { kind } : {} }));
  }
  let title = "", description = "", thumbnail = null, duration = null;
  for (const candidate of candidates) {
    title ||= candidate.name ?? "";
    description ||= candidate.savable_description?.text ?? "";
    thumbnail ??= mediaUrl(candidate.thumbnailImage?.uri) ?? mediaUrl(candidate.preferred_thumbnail?.image?.uri);
    duration ??= candidate.playable_duration_in_ms;
    for (const n of maps(candidate, id)) {
      for (const k of ["playable_url", "playable_url_quality_hd", "playable_url_dash", "browser_native_hd_url", "browser_native_sd_url", "sd_src", "hd_src", "sd_src_no_ratelimit", "hd_src_no_ratelimit", "progressive_url"]) add(n[k], k);
      for (const k of ["dash_manifest_url", "manifest_url"]) add(n[k], "dash", "dash");
      add(n.hls_playlist_url, "hls", "hls");
      for (const k of ["dash_manifest", "playlist", "dash_manifest_xml_string", "manifest_xml"]) {
        if (typeof n[k] !== "string") continue;
        try {
          const text = n[k].trimStart().startsWith("<") ? n[k] : decodeURIComponent(n[k].replace(/\+/g, " "));
          for (const r of await xml.representations(text)) if (r.complete) add(r.url, r.id ?? "dash-file", "direct", r.mimeType?.startsWith("audio/") ? "audio" : r.mimeType?.startsWith("video/") ? "video" : "unknown");
        } catch (e) {
          if (e.code === "timeout") throw e;
        }
      }
    }
  }
  if (!sources.length) fail("No accessible media", new URL(page.url).pathname.includes("login") || (await html.select(page.body, 'input[name="pass"]')).length ? "authenticationRequired" : "unsupportedContent");
  return result(url, { title: title || meta("og:title"), content: description || meta("og:description"), media: [videoItem(sources, { thumbnailUrl: thumbnail ?? mediaUrl(meta("og:image")), durationMs: duration == null ? null : Math.round(duration) })] });
}
