import { digest, random } from "../../common/api.js";
import { sm4Keys, sm4Box, zhihuAlphabet } from "./constants.js";
const rot = (x, n) => (x << n | x >>> 32 - n) >>> 0, load = (a, i) => (a[i] << 24 | a[i + 1] << 16 | a[i + 2] << 8 | a[i + 3]) >>> 0;
function encrypt(block) {
  const x = Array(36).fill(0);
  for (let i = 0; i < 4; i++) x[i] = load(block, 4 * i);
  for (let i = 0; i < 32; i++) {
    const t = x[i + 1] ^ x[i + 2] ^ x[i + 3] ^ sm4Keys[i], e = load([sm4Box[t >>> 24 & 255], sm4Box[t >>> 16 & 255], sm4Box[t >>> 8 & 255], sm4Box[t & 255]], 0);
    x[i + 4] = (x[i] ^ e ^ rot(e, 2) ^ rot(e, 10) ^ rot(e, 18) ^ rot(e, 24)) >>> 0;
  }
  return x.slice(32).reverse().flatMap((v) => [24, 16, 8, 0].map((s) => v >>> s & 255));
}
export async function sign(path, cookie, { iv } = {}) {
  const initial = iv ?? await random(16);
  if (initial.length !== 16) throw Error("iv");
  const d = await digest("md5", `101_3_3.0+${path}+${cookie}`), plain = Array.from(d.slice(14), (c) => c.charCodeAt(0)), pad = 16 - plain.length % 16;
  plain.push(...Array(pad).fill(pad));
  let prev = [...initial];
  const blob = [...prev];
  for (let off = 0; off < plain.length; off += 16) {
    prev = encrypt(Array.from({ length: 16 }, (_, i) => plain[off + i] ^ prev[i]));
    blob.push(...prev);
  }
  const sextets = [];
  for (let i = 0; i < blob.length; i += 3) {
    const n = blob[i] << 16 | blob[i + 1] << 8 | blob[i + 2];
    for (const s of [18, 12, 6, 0]) sextets.push(n >>> s & 63);
  }
  const masks = [58, 0, 0, 0, 0, 40, 3, 0, 0, 0, 32, 14, 0, 0, 0, 0];
  return "2.0_" + Array.from({ length: 64 }, (_, i) => zhihuAlphabet[sextets[63 - i] ^ masks[i % 16]]).join("");
}
