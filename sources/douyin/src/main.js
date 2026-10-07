import { resolveDefault, get, getJson, endpoint, form, match, assigned, objects, html, json, fail } from "../../common/api.js";
import { mapAweme } from "../../common/aweme.js";
import { aBogus } from "./signing.js";
export const resolve = (i) => resolveDefault(i, { redirect: new URL(i.url).hostname === "v.douyin.com", keep: ["modal_id", "vid"] });
export async function parse(input) {
  const { url, canonicalUrl } = await resolve(input), u = new URL(url), id = u.searchParams.get("modal_id") ?? u.searchParams.get("vid") ?? match(/\/(?:video|note|slides)\/(\d+)/, u.pathname), task = parserContext;
  let failure;
  if (Object.keys(task.cookies).length) {
    try {
      const fields = { device_platform: "webapp", aid: "6383", channel: "channel_pc_web", pc_client_type: "1", version_code: "290100", version_name: "29.1.0", cookie_enabled: "true", screen_width: "1920", screen_height: "1080", browser_language: "zh-CN", browser_platform: "Win32", browser_name: "Chrome", browser_version: "130.0.0.0", browser_online: "true", engine_name: "Blink", engine_version: "130.0.0.0", os_name: "Windows", os_version: "10", cpu_core_num: "12", device_memory: "8", platform: "PC", downlink: "10", effective_type: "4g", aweme_id: id };
      const q = form(fields), data = await getJson("https://www.douyin.com/aweme/v1/web/aweme/detail/?" + q + "&a_bogus=" + encodeURIComponent(await aBogus(q)), { headers: { Referer: "https://www.douyin.com/", "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0" } });
      if (String(data.aweme_detail?.aweme_id) === id) return mapAweme(data.aweme_detail, canonicalUrl, "douyin");
    } catch (e) {
      failure = e;
    }
  }
  const body = (await get(`https://www.iesdouyin.com/share/video/${id}/`, { headers: { "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 Version/16.6 Mobile/15E148 Safari/604.1" } })).body;
  for (const p of objects(assigned(body, "window._ROUTER_DATA"))) if (String(p.aweme_id) === id && (p.video || p.images)) return mapAweme(p, canonicalUrl, "douyin");
  const render = (await html.select(body, "#RENDER_DATA"))[0]?.text;
  if (render) {
    try {
      for (const p of objects(json(decodeURIComponent(render)))) if (String(p.aweme_id ?? p.awemeId) === id) return mapAweme(p, canonicalUrl, "douyin");
    } catch {
    }
  }
  if (failure) throw failure;
  fail("Cookie required", "authenticationRequired");
}
