import { resolveDefault, get, html, json, array, mediaUrl, source, videoItem, result, fail } from "../../common/api.js";
export const resolve = (input) => resolveDefault(input);
export async function parse(input) {
  const { url, canonicalUrl } = await resolve(input);
  const id = new URL(url).pathname.split("/")[2];
  const s = (await html.select((await get(url)).body, "script#__NEXT_DATA__"))[0];
  if (!s) fail();
  const data = json(s.text);
  const story = array(data.props?.pageProps?.spotlightFeed?.spotlightStories).find((s2) => s2.story?.storyId?.value === id);
  const metadata = story?.metadata, v = metadata?.videoMetadata, u = mediaUrl(v?.contentUrl);
  if (!u) fail("Missing Spotlight", "notFound");
  return result(canonicalUrl, { title: v.name ?? "", content: metadata.description ?? v.description ?? "", media: [videoItem([source(u, { extension: "mp4" })], { thumbnailUrl: mediaUrl(v.thumbnailUrl), width: v.width ?? null, height: v.height ?? null, durationMs: v.durationMs ?? null })] });
}
