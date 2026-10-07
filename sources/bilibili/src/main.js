import { array, object, getJson, endpoint, resolveDefault, host, source, imageItem, videoItem, result, mediaUrl, fail, desktopUA } from "../../common/api.js";
import { signWbi, playbackFingerprint } from "./signing.js";
const headers = { Referer: "https://www.bilibili.com/", "User-Agent": desktopUA };
export const resolve = (input) => resolveDefault(input, { redirect: !host(input.url, "bilibili.com"), keep: ["p"] });
async function get(path, params = {}, cookies = {}) {
  const r = await getJson(endpoint("https://api.bilibili.com", path, params), { headers, cookies });
  if (r.code != null && r.code !== 0 && !(path.endsWith("/nav") && r.data?.wbi_img)) fail("Bilibili API failed", [-101, -352, -403].includes(r.code) ? "authenticationRequired" : "parseFailed");
  if (!r.data) fail("No Bilibili data");
  return r.data;
}
function video(view, play, url) {
  const media = [];
  for (const part of array(play.durl)) {
    const sources2 = [part.url, ...array(part.backup_url)].map(mediaUrl).filter(Boolean).map((u) => source(u, { headers }));
    if (sources2.length) media.push(videoItem(sources2, { thumbnailUrl: mediaUrl(view.pic), width: view.dimension?.width ?? null, height: view.dimension?.height ?? null, durationMs: part.length ?? null }));
  }
  const dash = object(play.dash), sources = [];
  for (const [items, track] of [[dash.video, "video"], [dash.audio, "audio"], [dash.dolby?.audio, "audio"], [dash.flac?.audio ? [dash.flac.audio] : [], "audio"]]) for (const f of array(items)) for (const u of [f.baseUrl ?? f.base_url, ...array(f.backupUrl ?? f.backup_url)].map(mediaUrl).filter(Boolean)) sources.push(source(u, { headers, track, data: f, formatId: String(f.id), videoCodec: track === "video" ? f.codecs : null, audioCodec: track === "audio" ? f.codecs : null, bitrate: f.bandwidth ?? null }));
  if (sources.length) media.push(videoItem(sources, { thumbnailUrl: mediaUrl(view.pic), durationMs: view.duration == null ? null : Math.round(view.duration * 1e3) }));
  if (!media.length) fail("No Bilibili media");
  return result(url, { title: view.title ?? "", content: view.desc ?? "", media });
}
function dynamic(data, url) {
  const d = data.item?.modules?.module_dynamic;
  if (!d) fail("No dynamic");
  const major = object(d.major), opus = object(major.opus);
  let title = opus.title ?? "", content = opus.summary?.text ?? "";
  const media = [];
  if (Object.keys(opus).length) for (const pic of array(opus.pics)) {
    const item = imageItem(pic.url, { headers, data: pic, liveVideo: pic.live_url });
    if (item) media.push(item);
  }
  else {
    content = d.desc?.text ?? "";
    const type = (major.type ?? "").replace("MAJOR_TYPE_", "").toLowerCase(), card = object(major[type]);
    if (!content) {
      title = card.title ?? "";
      content = type === "medialist" ? card.sub_title ?? "" : type === "live" ? [card.desc_first, card.desc_second].filter(Boolean).join(" \xB7 ") : card.desc ?? "";
      const item = imageItem(card.cover, { headers });
      if (item) media.push(item);
    }
  }
  return result(url, { title, content, media });
}
export async function parse(input) {
  const { url } = await resolve(input), u = new URL(url);
  if (!u.pathname.startsWith("/video/")) {
    const id2 = u.pathname.match(/\d{10,}/)?.[0];
    if (!id2) fail("Invalid dynamic ID", "invalidInput");
    return dynamic(await get("/x/polymer/web-dynamic/v1/detail", { id: id2, features: "itemOpusStyle" }), url);
  }
  const id = u.pathname.match(/BV[\w]+|av\d+/)?.[0];
  if (!id) fail("Invalid video ID", "invalidInput");
  const q = id.startsWith("BV") ? { bvid: id } : { aid: id.slice(2) };
  let wbi;
  const signed = async (path, p) => {
    wbi ??= (await get("/x/web-interface/nav")).wbi_img;
    return get(path, await signWbi(p, wbi.img_url, wbi.sub_url, Math.floor(Date.now() / 1e3)));
  };
  async function extract(useWbi) {
    const detail = useWbi ? await signed("/x/web-interface/wbi/view/detail", q) : await get("/x/web-interface/view/detail", q), view = object(detail.View), pages = array(view.pages), p = Number(u.searchParams.get("p") ?? 1);
    if (!Number.isInteger(p) || p < 1 || pages.length && p > pages.length) fail("Invalid part", "invalidInput");
    const selected = pages.length ? pages[p - 1] : view;
    if (selected.cid == null) fail("Missing video part");
    const params = { ...q, cid: String(selected.cid), fnver: "0", fourk: "1" };
    let play;
    if (useWbi) play = await signed("/x/player/wbi/playurl", { ...params, fnval: "4048", ...playbackFingerprint() });
    else {
      const fp = await get("/x/frontend/finger/spi");
      play = await get("/x/player/playurl", { ...params, qn: "64", fnval: "1" }, { buvid3: fp.b_3 ?? "", buvid4: fp.b_4 ?? "" });
    }
    return video({ ...view, duration: selected.duration ?? view.duration }, play, url);
  }
  try {
    return await extract(false);
  } catch (e) {
    if (["invalidInput", "timeout", "permissionDenied"].includes(e.code)) throw e;
    return extract(true);
  }
}
