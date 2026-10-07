import { resolveDefault, getJson, postForm, endpoint, array, match, content, urls, mediaUrl, imageItem, source, videoItem, result, fail } from "../../common/api.js";
export const resolve = (i) => resolveDefault(i, { keep: ["fid"], redirect: ["mapp.api.weibo.cn", "video.weibo.com"].includes(new URL(i.url).hostname) });
export async function parse(input) {
  const { url, canonicalUrl } = await resolve(input), u = new URL(url), headers = { Referer: url };
  if (u.pathname.includes("/tv/show/")) {
    const id2 = match(/\/tv\/show\/([^/]+)/, u.pathname), r = await postForm(endpoint("https://weibo.com", "/tv/api/component", { page: "/tv/show/" + id2 }), { data: JSON.stringify({ Component_Play_Playinfo: { oid: id2 } }) }, { headers }), d2 = r.data?.Component_Play_Playinfo ?? {}, addresses = [...new Set(Object.values(d2.urls ?? {}).flatMap(urls))];
    if (!addresses.length) fail();
    return result(canonicalUrl, { content: (await content(d2.text ?? "")).text, media: [videoItem(addresses.map((v) => source(v, { headers })), { thumbnailUrl: mediaUrl(d2.cover_image), durationMs: d2.duration_time == null ? null : d2.duration_time * 1e3 })] });
  }
  if (u.pathname.startsWith("/u/")) fail("Use post link", "unsupportedContent");
  const id = u.pathname.split("/").filter(Boolean).at(-1);
  if (!id) fail();
  const d = await getJson(endpoint("https://weibo.com", "/ajax/statuses/show", { id, isGetLongText: "true" }), { headers });
  if (d.id == null && d.text == null && d.text_raw == null) fail();
  const media = [];
  function photo(p) {
    const full = p.largest ?? p.original ?? p.large ?? {}, v = mediaUrl(p.video);
    if (p.type === "gif" && v) {
      media.push({ type: "animation", sources: [source(v, { headers })], thumbnailUrl: mediaUrl(full.url), width: full.width ?? null, height: full.height ?? null });
      return;
    }
    const i = imageItem(full.url, { headers, data: full, liveVideo: p.video });
    if (i) media.push(i);
  }
  function video(page) {
    const info = page.media_info ?? page, variants = array(info.playback_list).map((v) => v.play_info ?? {});
    let sources = variants.filter((v) => mediaUrl(v.url)).map((v) => source(mediaUrl(v.url), { headers, data: v }));
    if (!sources.length) sources = ["mp4_hd_url", "mp4_sd_url", "stream_url_hd", "stream_url"].map((k) => mediaUrl(info[k])).filter(Boolean).map((u2) => source(u2, { headers }));
    if (sources.length) media.push(videoItem(sources, { thumbnailUrl: mediaUrl(page.page_pic?.url), durationMs: (info.duration ?? variants[0]?.duration) == null ? null : Number(info.duration ?? variants[0].duration) * 1e3 }));
  }
  function append(p) {
    const mixed = array(p.mix_media_info?.items);
    if (mixed.length) for (const i of mixed) {
      if (i.type === "pic") photo(i.data ?? {});
      else video(i.data ?? {});
    }
    else {
      for (const v of Object.values(p.pic_infos ?? {})) photo(v);
      video(p.page_info ?? {});
    }
  }
  append(d);
  if (d.retweeted_status) append(d.retweeted_status);
  return result(canonicalUrl, { title: d.page_info?.page_title ?? "", content: d.text_raw || (await content(d.text ?? "")).text, media });
}
