import { resolveDefault, getJson, postForm, match, array, digest, imageItem, source, videoItem, mediaUrl, result, fail } from "../../common/api.js";
export const resolve = (i) => resolveDefault(i);
export async function sign(fields) {
  return digest("md5", Object.keys(fields).sort().map((k) => `${k}=${fields[k]}`).join("") + "36770b1f34c9bbf2e7d1a99d2b82fa9e");
}
export async function parse(input) {
  const { url, canonicalUrl } = await resolve(input);
  const id = match(/\/p\/(\d+)/, new URL(url).pathname), tbs = await getJson("https://tieba.baidu.com/dc/common/tbs");
  const fields = { pn: "1", lz: "0", r: "2", mark_type: "0", back: "0", fr: "personalize_page", kz: id, session_request_times: "1", tbs: tbs.tbs ?? "", subapp_type: "pc", _client_type: "20" };
  fields.sign = await sign(fields);
  const data = await postForm("https://tieba.baidu.com/c/f/pb/page_pc", fields);
  if (Number(data.error_code ?? 0) !== 0) fail();
  const t = data.thread, origin = t?.origin_thread_info ?? {};
  if (!t) fail();
  const media = array(origin.media).map((i) => imageItem(i.big_pic ?? i.small_pic, { data: i })).filter(Boolean), v = t.video_info ?? {};
  if (mediaUrl(v.video_url)) media.push(videoItem([source(mediaUrl(v.video_url))], { thumbnailUrl: mediaUrl(v.thumbnail_url), width: v.video_width ?? null, height: v.video_height ?? null, durationMs: v.video_duration == null ? null : Math.round(v.video_duration * 1e3) }));
  return result(canonicalUrl, { title: origin.title ?? t.title ?? "", content: array(origin.content).map((c) => c.text ?? "").join("\n"), media });
}
