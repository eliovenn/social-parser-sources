import { resolveDefault, postForm, match, array, metaCookies, metaMedia, mediaUrl, imageItem, source, videoItem, result, desktopUA, fail } from "../../common/api.js";
export const resolve = (i) => resolveDefault(i, { redirect: new URL(i.url).pathname.startsWith("/share/") });
export async function parse(input) {
  const { url, canonicalUrl } = await resolve(input);
  const code = match(/\/(?:p|reel|reels|tv)\/([\w-]+)/, new URL(url).pathname), task = parserContext, cookies = await metaCookies("www.instagram.com");
  const response = await postForm("https://www.instagram.com/graphql/query", { doc_id: "27128499623469141", server_timestamps: "true", variables: JSON.stringify({ shortcode: code, __relay_internal__pv__PolarisAIGMMediaWebLabelEnabledrelayprovider: false }) }, { cookies, headers: { Referer: "https://www.instagram.com/", "x-csrftoken": cookies.csrftoken ?? task.cookies.csrftoken ?? "" } });
  const d = response.data ?? {}, post = d.xdt_shortcode_media ?? d.xdt_api__v1__media__shortcode__web_info?.items?.[0];
  if (!post || post.shortcode != null && post.shortcode !== code || post.code != null && post.code !== code) fail();
  const headers = { Referer: "https://www.instagram.com/", "User-Agent": desktopUA };
  function legacy(n) {
    const children = array(n.edge_sidecar_to_children?.edges);
    if (children.length) return children.flatMap((c) => legacy(c.node));
    const dim = n.dimensions ?? {}, u = mediaUrl(n.video_url);
    if (u) return [videoItem([source(u, { headers, data: dim })], { thumbnailUrl: mediaUrl(n.display_url), width: dim.width ?? null, height: dim.height ?? null, durationMs: n.video_duration == null ? null : Math.round(n.video_duration * 1e3) })];
    return [imageItem(n.display_url ?? n.display_src, { headers, data: dim })].filter(Boolean);
  }
  return result(canonicalUrl, { content: post.edge_media_to_caption?.edges?.[0]?.node?.text ?? post.caption?.text ?? "", media: post.media_type != null ? metaMedia(post, headers) : legacy(post) });
}
