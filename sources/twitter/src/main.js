import { getJson, endpoint, match, array, clean, source, imageItem, videoItem, mediaUrl, result, desktopUA, fail } from "../../common/api.js";
import { twitterFeatures } from "./constants.js";
export async function resolve(i) {
  const u = new URL(i.url);
  return { url: clean(i.url), canonicalUrl: "https://x.com" + u.pathname };
}
export async function parse(input) {
  const { url, canonicalUrl } = await resolve(input), id = match(/\/status\/(\d+)/, new URL(url).pathname), task = parserContext;
  const response = await getJson(endpoint("https://api.twitter.com", "/graphql/kPLTRmMnzbPTv70___D06w/TweetResultByRestId", { variables: JSON.stringify({ tweetId: id, withCommunity: false, includePromotedContent: false, withVoice: false }), features: JSON.stringify(twitterFeatures), fieldToggles: JSON.stringify({ withArticleRichContentState: true, withArticlePlainText: false }) }), { headers: { authorization: "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA", "x-twitter-active-user": "yes", "x-twitter-client-language": "zh-cn", ...task.cookies.ct0 ? { "x-csrf-token": task.cookies.ct0 } : {} } });
  let post = response.data?.tweetResult?.result ?? {};
  post = post.tweet ?? post;
  const legacy = post.legacy;
  if (!legacy) fail("Login required", "authenticationRequired");
  if (post.rest_id != null && String(post.rest_id) !== id) fail();
  const headers = { Referer: "https://x.com/", "User-Agent": desktopUA }, media = [];
  for (const item of array((legacy.extended_entities ?? legacy.entities)?.media)) {
    const dim = item.original_info ?? {};
    if (item.type === "photo") {
      const u = mediaUrl(item.media_url_https);
      if (u) {
        const x = new URL(u);
        x.searchParams.set("name", "orig");
        media.push(imageItem(x.href, { headers, data: dim }));
      }
    } else {
      const info = item.video_info ?? {}, sources = array(info.variants).filter((v) => mediaUrl(v.url)).map((v) => source(mediaUrl(v.url), { headers, data: v }));
      if (sources.length) media.push({ ...videoItem(sources, { thumbnailUrl: mediaUrl(item.media_url_https), width: dim.width ?? null, height: dim.height ?? null, durationMs: info.duration_millis ?? null }), type: item.type === "animated_gif" ? "animation" : "video" });
    }
  }
  let text = post.note_tweet?.note_tweet_results?.result?.text || legacy.full_text || "", title = "";
  const article = post.article?.article_results?.result;
  if (article) {
    title = article.title ?? "";
    text = array(article.content_state?.blocks).map((e) => e.text ?? "").join("\n\n");
    const cover = imageItem(article.cover_media?.media_info?.original_img_url, { headers });
    if (cover) media.push(cover);
    for (const m of array(article.media_entities)) {
      const info = m.media_info ?? {}, pic = imageItem(info.original_img_url, { headers });
      if (pic) media.push(pic);
      const sources = array(info.variants).filter((v) => mediaUrl(v.url)).map((v) => source(mediaUrl(v.url), { headers, data: v }));
      if (sources.length) media.push(videoItem(sources));
    }
  }
  return result(canonicalUrl, { title, content: text, media });
}
