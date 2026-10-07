import { resolveDefault, get, html, content, assigned, array, imageItem, fail, result } from "../../common/api.js";
export const resolve = (input) => resolveDefault(input, { keep: ["__biz", "mid", "idx", "sn"], parseOnly: ["chksm", "scene", "key", "pass_ticket"] });
export async function parse(input) {
  const { url, canonicalUrl } = await resolve(input);
  const page = (await get(url)).body, data = assigned(page, "window.cgiDataNew");
  const body = data.content_noencode || data.text_page_info?.content_noencode || (await html.select(page, "#js_content"))[0]?.html || "";
  const title = data.title || (await html.select(page, "#activity-name"))[0]?.text.trim() || "";
  if (!body && !title && !Object.keys(data).length) fail();
  const headers = { Referer: "https://mp.weixin.qq.com/" };
  const c = await content(body, headers);
  for (const pic of array(data.picture_page_info_list)) {
    const item = imageItem(pic.watermark_info?.cdn_url ?? pic.cdn_url, { headers });
    if (item) c.media.push(item);
  }
  return result(canonicalUrl, { title, content: c.text, markdown: c.markdown, media: c.media });
}
