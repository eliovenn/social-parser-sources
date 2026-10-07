import { resolveDefault, postJson, array, source, mediaUrl, result, fail } from "../../common/api.js";
export const resolve = (input) => resolveDefault(input, { keep: ["pid"] });
export async function parse(input) {
  const { url, canonicalUrl } = await resolve(input);
  const pid = new URL(url).searchParams.get("pid");
  if (!/^\d+$/.test(pid ?? "")) fail("Invalid ID", "invalidInput");
  const response = await postJson("https://share.xiaochuankeji.cn/planck/share/post/detail_h5", { pid: Number(pid) }), post = response.data?.post;
  if (!post) fail("Missing post", "notFound");
  const media = [];
  for (const image of array(post.imgs)) {
    const sizes = Object.values(image.urls ?? {}), values = sizes.at(-1)?.urls ?? [], thumb = mediaUrl(values.at(-1)), video = mediaUrl(post.videos?.[image.id]?.url), u = video ?? thumb;
    if (u) media.push({ type: video ? "video" : "image", thumbnailUrl: thumb, sources: [source(u, { track: video ? "audioVideo" : "image" })] });
  }
  return result(canonicalUrl, { content: post.content ?? "", media });
}
