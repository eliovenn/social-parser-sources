import { random } from "../../common/api.js";
const rot = (x, n) => (x << n % 32 | x >>> 32 - n % 32) >>> 0;
const utf8 = (s) => Array.from(unescape(encodeURIComponent(s)), (c) => c.charCodeAt(0));
function sm3(input) {
  const bytes = [...input, 128];
  while (bytes.length % 64 !== 56) bytes.push(0);
  const bits = input.length * 8;
  for (let i = 7; i >= 0; i--) bytes.push(Math.floor(bits / 2 ** (8 * i)) & 255);
  const state = [1937774191, 1226093241, 388252375, 3666478592, 2842636476, 372324522, 3817729613, 2969243214];
  for (let off = 0; off < bytes.length; off += 64) {
    const w = Array(68).fill(0);
    for (let j = 0; j < 16; j++) {
      const k = off + 4 * j;
      w[j] = (bytes[k] << 24 | bytes[k + 1] << 16 | bytes[k + 2] << 8 | bytes[k + 3]) >>> 0;
    }
    for (let j = 16; j < 68; j++) {
      const x = w[j - 16] ^ w[j - 9] ^ rot(w[j - 3], 15);
      w[j] = (x ^ rot(x, 15) ^ rot(x, 23) ^ rot(w[j - 13], 7) ^ w[j - 6]) >>> 0;
    }
    let [a, b, c, d, e, f, g, h] = state;
    for (let j = 0; j < 64; j++) {
      const s1 = rot(rot(a, 12) + e + rot(j < 16 ? 2043430169 : 2055708042, j) >>> 0, 7), s2 = (s1 ^ rot(a, 12)) >>> 0, ff = (j < 16 ? a ^ b ^ c : a & b | a & c | b & c) >>> 0, gg = (j < 16 ? e ^ f ^ g : e & f | ~e & g) >>> 0, t1 = ff + d + s2 + ((w[j] ^ w[j + 4]) >>> 0) >>> 0, t2 = gg + h + s1 + w[j] >>> 0;
      d = c;
      c = rot(b, 9);
      b = a;
      a = t1;
      h = g;
      g = rot(f, 19);
      f = e;
      e = (t2 ^ rot(t2, 9) ^ rot(t2, 17)) >>> 0;
    }
    const next = [a, b, c, d, e, f, g, h];
    for (let j = 0; j < 8; j++) state[j] = (state[j] ^ next[j]) >>> 0;
  }
  return state.flatMap((w) => [24, 16, 8, 0].map((s) => w >>> s & 255));
}
export async function aBogus(query, { startTime, endTime, randomValues } = {}) {
  const entropy = random(8), start = startTime ?? Date.now(), end = endTime ?? start + 4 + entropy[0] % 5, p = sm3(sm3(utf8(query + "cus"))), m = sm3(sm3(utf8("GETcus"))), browser = "1536|742|1536|864|0|0|0|0|1536|864|1536|864|1536|742|24|24|MacIntel";
  const data = [44, end >>> 24 & 255, 0, 0, 0, 0, 24, p[21], m[21], 0, 40, end >>> 16 & 255, 0, 0, 0, 1, 0, 239, p[22], m[22], 49, end >>> 8 & 255, 0, 0, 0, 0, end & 255, 0, 0, 14, start >>> 24 & 255, start >>> 16 & 255, 0, start >>> 8 & 255, start & 255, 3, Math.floor(end / 4294967296), 1, Math.floor(start / 4294967296), 1, browser.length, 0, 0, 0];
  const check = data.reduce((a, b) => a ^ b, 0);
  data.push(...Array.from(browser, (c) => c.charCodeAt(0)), check);
  const s = Array.from({ length: 256 }, (_, i2) => i2);
  let j = 0;
  for (let i2 = 0; i2 < 256; i2++) {
    j = (j + s[i2] + 121) % 256;
    [s[i2], s[j]] = [s[j], s[i2]];
  }
  let i = 0;
  j = 0;
  const cipher = [];
  for (const b of data) {
    i = (i + 1) % 256;
    j = (j + s[i]) % 256;
    [s[i], s[j]] = [s[j], s[i]];
    cipher.push(b ^ s[(s[i] + s[j]) % 256]);
  }
  const prefix = [];
  for (let k = 0; k < 3; k++) {
    const r = randomValues?.[k] ?? (entropy[2 * k + 1] << 8 | entropy[2 * k + 2]) % 1e4, lo = r & 255, hi = r >>> 8;
    prefix.push(lo & 170 | 1, lo & 85 | (k === 0 ? 2 : 0), hi & 170 | (k === 1 ? 0 : 5), hi & 85 | (k === 0 ? 40 : 0));
  }
  const alphabet = "Dkdpgh2ZmsQB80/MfvV36XI1R45-WUAlEixNLwoqYTOPuzKFjJnry79HbGcaStCe", codes = [...prefix, ...cipher];
  let out = "";
  for (let i2 = 0; i2 < codes.length; i2 += 3) {
    const n = codes[i2] << 16 | (codes[i2 + 1] ?? 0) << 8 | (codes[i2 + 2] ?? 0);
    out += alphabet[n >>> 18 & 63] + alphabet[n >>> 12 & 63];
    if (i2 + 1 < codes.length) out += alphabet[n >>> 6 & 63];
    if (i2 + 2 < codes.length) out += alphabet[n & 63];
  }
  return out.padEnd(Math.ceil(out.length / 4) * 4, "=");
}
