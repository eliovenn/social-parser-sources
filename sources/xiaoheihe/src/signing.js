import { digest, random } from "../../common/api.js";
export async function sign(path, { time, nonce } = {}) {
  const t = time ?? Math.floor(Date.now() / 1e3), n = nonce ?? (await digest("md5", `${t}${(await random(16)).join(",")}`)).toUpperCase(), table = "AB45STUVWZEFGJ6CH01D237IXYPQRKLMN89";
  const map = (s, cut) => Array.from(s, (c2) => table[c2.charCodeAt(0) % (table.length - cut)]).join(""), normalized = "/" + path.split("/").filter(Boolean).join("/") + "/", mapped = [map(String(t + 1), 2), map(normalized, 0), map(n, 0)];
  let mixed = "";
  for (let i = 0; i < Math.max(...mapped.map((v) => v.length)); i++) for (const s of mapped) if (i < s.length) mixed += s[i];
  const d = await digest("md5", mixed.slice(0, 20)), twice = (e) => (e << 1 ^ (e & 128 ? 27 : 0)) & 255, m3 = (e) => twice(e) ^ e, m6 = (e) => m3(twice(e)), m12 = (e) => m6(m3(twice(e))), m14 = (e) => m12(e) ^ m6(e) ^ m3(e), c = Array.from(d.slice(26), (c2) => c2.charCodeAt(0)), bytes = [m14(c[0]) ^ m12(c[1]) ^ m6(c[2]) ^ m3(c[3]), m3(c[0]) ^ m14(c[1]) ^ m12(c[2]) ^ m6(c[3]), m6(c[0]) ^ m3(c[1]) ^ m14(c[2]) ^ m12(c[3]), m12(c[0]) ^ m6(c[1]) ^ m3(c[2]) ^ m14(c[3]), ...c.slice(4)];
  return { hkey: map(d.slice(0, 5), 4) + String(bytes.reduce((a, b) => a + b, 0) % 100).padStart(2, "0"), _time: String(t), nonce: n };
}
