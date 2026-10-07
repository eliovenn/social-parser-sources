import { resolveDefault, get, html, content, match, fail, result } from "../../common/api.js";
export const resolve = (input) => resolveDefault(input, { parseOnly: ["shareKey", "s"] });
export async function parse(input) {
  const { url, canonicalUrl } = await resolve(input);
  match(/\/(?:feed|picture)\/(\d+)/, new URL(url).pathname);
  const page = (await get(url)).body;
  const body = (await html.select(page, ".feed-article-message"))[0] ?? (await html.select(page, ".feed-message"))[0];
  if (!body) fail("Body unavailable");
  const images = (await html.select(page, ".message-image-group"))[0]?.outerHtml ?? "";
  const c = await content(body.html), pics = await content(body.outerHtml + images);
  return result(canonicalUrl, { title: (await html.select(page, ".message-title"))[0]?.text.trim() ?? "", content: c.text, markdown: c.markdown, media: pics.media });
}
