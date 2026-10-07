import { resolveDefault, get, getJson, endpoint, match, array, html, json, fail } from "../../common/api.js";
import { mapAweme } from "../../common/aweme.js";
export const resolve = (i) => resolveDefault(i, { redirect: ["vm.tiktok.com", "vt.tiktok.com"].includes(new URL(i.url).hostname) || new URL(i.url).pathname.startsWith("/t/") });
export async function parse(input) {
  const { url, canonicalUrl } = await resolve(input), id = match(/\/(?:video|photo)\/(\d+)/, new URL(url).pathname);
  try {
    const d = await getJson(endpoint("https://api22-normal-c-alisg.tiktokv.com", "/aweme/v1/feed/", { iid: "7318518857994389254", device_id: "7318517321748022790", channel: "googleplay", app_name: "musical_ly", version_code: "300904", device_platform: "android", device_type: "SM-ASUS_Z01QD", os_version: "9", aweme_id: id }), { headers: { Referer: "https://www.tiktok.com/", "x-ladon": "Hello From Evil0ctal!" } });
    for (const p of array(d.aweme_list)) if (String(p.aweme_id) === id) return mapAweme(p, canonicalUrl, "tiktok");
  } catch {
  }
  const s = (await html.select((await get(url, { headers: { Referer: "https://www.tiktok.com/" } })).body, "#__UNIVERSAL_DATA_FOR_REHYDRATION__"))[0];
  if (!s) fail();
  const detail = json(s.text).__DEFAULT_SCOPE__?.["webapp.video-detail"] ?? {};
  if ([10216, 10222, 10204].includes(Number(detail.statusCode))) fail("Restricted", "authenticationRequired");
  const post = detail.itemInfo?.itemStruct;
  if (String(post?.id) !== id) fail();
  return mapAweme(post, canonicalUrl, "tiktok");
}
