import { resolveDefault, getJson, endpoint, match, array, json, content, imageItem, source, videoItem, mediaUrl, result, fail } from "../../common/api.js";
import { sign } from "./signing.js";
export const resolve = (i) => resolveDefault(i, { keep: ["link_id"] });
export async function parse(input) {
  const { url, canonicalUrl } = await resolve(input), u = new URL(url), id = u.searchParams.get("link_id") ?? match(/\/link\/([^/]+)/, u.pathname);
  const r = await getJson(endpoint("https://api.xiaoheihe.cn", "/bbs/app/link/tree", { os_type: "web", app: "heybox", client_type: "web", version: "999.0.4", web_version: "2.5", x_client_type: "web", x_app: "heybox_website", heybox_id: "", x_os_type: "Windows", device_info: "Chrome", link_id: id, owner_only: "1", ...await sign("/bbs/app/link/tree") }));
  if (["login", "relogin", "lack_token", "show_captcha"].includes(r.status)) fail("Cookie required", "authenticationRequired");
  const link = r.result?.link;
  if (!link) fail();
  const media = [];
  let text = link.text ?? "";
  if (link.has_video === true || link.has_video === 1) {
    if (mediaUrl(link.video_url)) media.push(videoItem([source(mediaUrl(link.video_url))], { thumbnailUrl: mediaUrl(link.video_thumb) }));
  } else {
    let blocks;
    try {
      blocks = json(text);
    } catch {
    }
    if (Array.isArray(blocks)) {
      text = "";
      for (const b of blocks) {
        if (b.type === "img") {
          const i = imageItem(b.url, { data: b });
          if (i) media.push(i);
        } else {
          text += (b.text ?? "") + "\n";
          if (b.type === "html") media.push(...(await content(b.text ?? "")).media);
        }
      }
    }
  }
  const c = await content(text);
  return result(canonicalUrl, { title: link.title ?? "", content: c.text, markdown: c.markdown, media });
}
