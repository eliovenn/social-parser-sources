import { array, object, urls, source, imageItem, videoItem, result, desktopUA, fail } from "./api.js";
function streams(video, headers) {
  const out = [], seen = /* @__PURE__ */ new Set();
  function add(value, data = {}) {
    for (const raw of urls(value)) {
      const u = new URL(raw);
      u.pathname = u.pathname.replaceAll("/playwm/", "/play/");
      if (!seen.has(u.href)) {
        seen.add(u.href);
        out.push(source(u.href, { headers, data: { ...video, ...object(value), ...data } }));
      }
    }
  }
  for (const rate of array(video.bit_rate ?? video.bitrateInfo)) add(rate.play_addr ?? rate.PlayAddr, rate);
  add(video.play_addr ?? video.playAddr);
  if (!out.length) add(video.download_addr ?? video.downloadAddr);
  return out;
}
export function mapAweme(post, url, platform) {
  const headers = { Referer: platform === "douyin" ? "https://www.douyin.com/" : "https://www.tiktok.com/", "User-Agent": desktopUA };
  const media = [];
  const images = array(post.images ?? (post.image_post_info ?? post.imagePost)?.images);
  for (const image of images) {
    const display = image.display_image ?? image.displayImage ?? image.imageURL ?? image.image ?? image;
    const photo = imageItem(display, { headers, data: object(display) });
    if (!photo) continue;
    const live = streams(object(image.video), headers);
    media.push(live.length ? { ...photo, type: "livePhoto", sources: [...photo.sources, ...live] } : photo);
  }
  if (!images.length) {
    const video = object(post.video), sources = streams(video, headers);
    if (sources.length) media.push(videoItem(sources, { thumbnailUrl: urls(video.origin_cover ?? video.cover ?? video.originCover)[0] ?? null, width: video.width ?? null, height: video.height ?? null, durationMs: video.duration == null ? null : Math.round(Number(video.duration) * (platform === "tiktok" && video.playAddr != null ? 1e3 : 1)) }));
  }
  if (!media.length) fail("No usable media");
  return result(url, { content: post.desc ?? "", media });
}
