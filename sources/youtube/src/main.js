
import { digest, array, object, host, mediaUrl, source, videoItem, result, fail } from "../../common/api.js";
import { YoutubeApi, origin } from "./api.js";
import { solvePlayer } from "./challenge.js";
function videoId(url) {
  const u = new URL(url);
  return host(url, "youtu.be") ? u.pathname.split("/")[1] : u.pathname === "/watch" ? u.searchParams.get("v") : u.pathname.split("/")[2];
}
export async function resolve(input) {
  const id = videoId(input.url);
  if (!id || !/^[-\w]{11}$/.test(id)) fail("Invalid video ID", "invalidInput");
  const url = origin + "/watch?v=" + id;
  return { url, canonicalUrl: url };
}
export async function parse(input) {
  const { url } = await resolve(input), id = videoId(url), api = new YoutubeApi(parserContext), responses = [], errors = [];
  try {
    responses.push(["web", await api.webpage(id)]);
  } catch (e) {
    errors.push(e);
  }
  for (const client of api.authenticated ? ["web_embedded", "tv_downgraded", "web"] : ["visionos", "web"]) {
    if (client !== "visionos") try {
      await api.loadPlayer();
    } catch (e) {
      errors.push(e);
    }
    try {
      responses.push([client, await api.player(id, client)]);
    } catch (e) {
      errors.push(e);
    }
  }
  const formats = [];
  let details = {}, restricted = false, unavailable = false, tokenRequired = false;
  for (const [client, response] of responses) {
    const video = object(response.videoDetails);
    if (video.videoId !== id) {
      const status = response.playabilityStatus?.status;
      restricted ||= ["LOGIN_REQUIRED", "AGE_CHECK_REQUIRED"].includes(status);
      unavailable ||= ["UNPLAYABLE", "ERROR"].includes(status);
      continue;
    }
    if (!Object.keys(details).length) details = video;
    const streaming = object(response.streamingData);
    for (const data of [...array(streaming.formats), ...array(streaming.adaptiveFormats)]) {
      if (data.type === "FORMAT_STREAM_TYPE_OTF" || array(data.drmFamilies).length) continue;
      const cipher = new URLSearchParams(data.signatureCipher ?? data.cipher ?? ""), address = mediaUrl(data.url ?? cipher.get("url"));
      if (!address) continue;
      const u = new URL(address);
      if (client === "web" && String(data.itag) !== "18" && !u.searchParams.has("pot")) {
        tokenRequired = true;
        continue;
      }
      formats.push({ u, data, sig: cipher.get("s"), sp: cipher.get("sp") ?? "signature", kind: "direct" });
    }
    for (const [key, kind] of [["hlsManifestUrl", "hls"], ["dashManifestUrl", "dash"]]) {
      const address = mediaUrl(streaming[key]);
      if (!address) continue;
      const u = new URL(address);
      if (client === "web" && kind === "dash" && !u.pathname.includes("/pot/")) {
        tokenRequired = true;
        continue;
      }
      formats.push({ u, data: {}, kind });
    }
  }
  for (const f of formats) f.n = f.u.searchParams.get("n") ?? f.u.pathname.match(/\/n\/([^/]+)/)?.[1];
  const signatures = [...new Set(formats.map((f) => f.sig).filter(Boolean))], challenges = [...new Set(formats.map((f) => f.n).filter(Boolean))];
  let solved = { sig: {}, n: {} }, challengeError;
  if (signatures.length || challenges.length) try {
    await api.loadPlayer();
    const key = "ejs:" + api.playerUrl + ":" + await digest("sha256", api.playerJavaScript);
    const prepared = await parserCache.get(key);
    solved = solvePlayer(api.playerJavaScript, signatures, challenges, prepared);
    if (solved.prepared) await parserCache.set(key, solved.prepared);
  } catch (e) {
    challengeError = e;
  }
  const sources = [], seen = /* @__PURE__ */ new Set();
  for (const f of formats) {
    if (f.sig && !solved.sig[f.sig] || f.n && !solved.n[f.n]) continue;
    const u = f.u;
    if (f.sig) u.searchParams.set(f.sp, solved.sig[f.sig]);
    if (f.n) {
      if (u.searchParams.has("n")) u.searchParams.set("n", solved.n[f.n]);
      else u.pathname = u.pathname.replace("/n/" + f.n, "/n/" + solved.n[f.n]);
    }
    if (seen.has(u.href)) continue;
    seen.add(u.href);
    const mime = f.data.mimeType ?? "", codecs = (mime.match(/codecs="([^"]+)"/)?.[1] ?? "").split(",").map((s) => s.trim()).filter(Boolean), audio = codecs.find((c) => /^(mp4a|opus|vorbis)/.test(c)), video = codecs.find((c) => c !== audio), track = f.kind !== "direct" ? "unknown" : mime.startsWith("audio/") ? "audio" : audio || f.data.audioQuality ? "audioVideo" : "video";
    sources.push(source(u.href, { kind: f.kind, track, headers: { "User-Agent": "Mozilla/5.0", Referer: origin + "/" }, data: f.data, formatId: String(f.data.itag ?? f.kind), extension: mime.includes("webm") ? "webm" : f.kind === "direct" ? "mp4" : null, videoCodec: video ?? null, audioCodec: audio ?? null }));
  }
  if (!sources.length) {
    if (restricted) fail("YouTube login required", "authenticationRequired");
    if (unavailable) fail("YouTube unavailable or region restricted", "unsupportedContent");
    if (challengeError) throw challengeError;
    if (tokenRequired) fail("YouTube requires a PO token", "unsupportedContent");
    if (errors.length) throw errors.at(-1);
    fail("No YouTube media");
  }
  return result(url, { title: details.title ?? "", content: details.shortDescription ?? "", media: [videoItem(sources, { thumbnailUrl: mediaUrl(array(details.thumbnail?.thumbnails).at(-1)?.url), durationMs: details.lengthSeconds == null ? null : Math.round(Number(details.lengthSeconds) * 1e3) })] });
}
