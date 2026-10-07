import { resolveDefault, get, html, json, array, urls, source, imageItem, videoItem, result, fail } from "../../common/api.js";
export const resolve = (input) => resolveDefault(input, { redirect: new URL(input.url).pathname.startsWith("/s/") });
export async function parse(input) {
  const { url, canonicalUrl } = await resolve(input);
  const s = (await html.select((await get(url)).body, "#RENDER_DATA"))[0];
  if (!s) fail();
  const item = json(decodeURIComponent(s.text)).ppxItemDetail?.item ?? {}, media = [];
  if (item.item_type === 2) {
    const v = item.video?.video_download ?? {}, sources = urls(v.url_list).map((u) => source(u));
    if (sources.length) media.push(videoItem(sources, { width: v.width ?? null, height: v.height ?? null, thumbnailUrl: urls(v.cover_image?.download_list)[0] ?? null, durationMs: v.duration == null ? null : Math.round(v.duration * 1e3) }));
  } else if (item.item_type === 1) {
    media.push(...array(item.cover?.download_list).map((v) => imageItem(v.url)).filter(Boolean));
  } else fail("Unsupported content", "unsupportedContent");
  return result(canonicalUrl, { content: item.content ?? "", media });
}
