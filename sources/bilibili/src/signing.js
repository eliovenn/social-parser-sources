import { digest, form, fail } from "../../common/api.js";
export async function signWbi(query, imageUrl, subUrl, timestamp) {
  const stem = (u) => new URL(u).pathname.split("/").pop().split(".")[0], value = stem(imageUrl) + stem(subUrl);
  const order = [46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45, 35, 27, 43, 5, 49, 33, 9, 42, 19, 29, 28, 14, 39, 12, 38, 41, 13];
  if (value.length < 64) fail("Invalid WBI key");
  const params = { ...query, wts: String(timestamp) }, sorted = {};
  for (const k of Object.keys(params).sort()) sorted[k] = String(params[k]).replace(/[!'()*]/g, "");
  return { ...sorted, w_rid: await digest("md5", form(sorted) + order.map((i) => value[i]).join("")) };
}
function base64(bytes) {
  const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  let s = "";
  for (let i = 0; i < bytes.length; i += 3) {
    const n = bytes[i] << 16 | (bytes[i + 1] ?? 0) << 8 | (bytes[i + 2] ?? 0);
    s += a[n >>> 18] + a[n >>> 12 & 63] + (i + 1 < bytes.length ? a[n >>> 6 & 63] : "=") + (i + 2 < bytes.length ? a[n & 63] : "=");
  }
  return s;
}
export function playbackFingerprint() {
  const rnd = (n) => Math.floor(Math.random() * n), noise = (min, n) => base64(Array.from({ length: min + rnd(n) }, () => 33 + rnd(94))).slice(0, -2), wh = rnd(114), off = rnd(514), top = rnd(101);
  return { dm_img_list: "[]", dm_img_str: noise(16, 49), dm_cover_img_str: noise(32, 97), dm_img_inter: JSON.stringify({ ds: [], wh: [6e3 + 3 * wh, 6600 + wh, wh], of: [3 * top + off, 4 * top + 2 * off, off] }) };
}
