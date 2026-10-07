export function readData(text, requireEnd = false) {
  let i = 0;
  const space = () => {
    while (i < text.length) {
      if (/\s/.test(text[i])) i++;
      else if (text.startsWith("//", i)) {
        const n = text.indexOf("\n", i);
        i = n < 0 ? text.length : n + 1;
      } else if (text.startsWith("/*", i)) {
        const n = text.indexOf("*/", i + 2);
        if (n < 0) throw Error("comment");
        i = n + 2;
      } else break;
    }
  };
  const take = (c) => {
    space();
    if (text[i++] !== c) throw Error("literal");
  };
  function quoted() {
    const q = text[i++];
    let out = "";
    while (i < text.length) {
      let c = text[i++];
      if (c === q) return out;
      if (c === "\\") {
        c = text[i++];
        if (c === "u" || c === "x") {
          const n = c === "u" ? 4 : 2;
          const hex = text.slice(i, i + n);
          if (!new RegExp(`^[0-9a-fA-F]{${n}}$`).test(hex)) throw Error("escape");
          out += String.fromCharCode(parseInt(hex, 16));
          i += n;
          continue;
        }
        c = { n: "\n", r: "\r", t: "	", b: "\b", f: "\f", "\n": "" }[c] ?? c;
      }
      out += c;
    }
    throw Error("string");
  }
  function token() {
    space();
    const start = i;
    while (i < text.length && /[\w$.+\-]/.test(text[i])) i++;
    if (start === i) throw Error("token");
    return text.slice(start, i);
  }
  function read(depth = 0) {
    if (depth > 80) throw Error("depth");
    space();
    let value2;
    if (text[i] === "{") {
      i++;
      value2 = /* @__PURE__ */ Object.create(null);
      space();
      while (text[i] !== "}") {
        const key = /["']/.test(text[i]) ? quoted() : token();
        take(":");
        value2[key] = read(depth + 1);
        space();
        if (text[i] !== ",") break;
        i++;
        space();
      }
      take("}");
    } else if (text[i] === "[") {
      i++;
      value2 = [];
      space();
      while (text[i] !== "]") {
        value2.push(read(depth + 1));
        space();
        if (text[i] !== ",") break;
        i++;
        space();
      }
      take("]");
    } else if (text[i] === '"' || text[i] === "'") value2 = quoted();
    else {
      const word = token();
      if (["null", "undefined"].includes(word)) value2 = null;
      else if (word === "true" || word === "false") value2 = word === "true";
      else {
        if (!/^[+-]?(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?$/i.test(word)) throw Error("expression");
        const n = Number(word);
        value2 = Number.isInteger(n) && !Number.isSafeInteger(n) && /^-?\d+$/.test(word) ? word : n;
      }
    }
    space();
    if (text[i] === "*") {
      i++;
      if (token() !== "1" || !Number.isFinite(Number(value2))) throw Error("expression");
      value2 = Number(value2);
    }
    return value2;
  }
  const value = read();
  space();
  if (requireEnd && i < text.length) throw Error("Trailing data");
  return value;
}
export function json(text) {
  try {
    return readData(text, true);
  } catch {
    throw Object.assign(Error("Invalid response"), { code: "parseFailed" });
  }
}
export function assigned(text, marker) {
  const at = text.indexOf(marker);
  if (at < 0) return {};
  const start = text.indexOf("{", at + marker.length);
  if (start < 0) return {};
  try {
    return readData(text.slice(start));
  } catch {
    return {};
  }
}
export function* objects(value, depth = 0) {
  if (depth > 60) return;
  if (Array.isArray(value)) {
    for (const v of value) yield* objects(v, depth + 1);
  } else if (value && typeof value === "object") {
    yield value;
    for (const v of Object.values(value)) yield* objects(v, depth + 1);
  }
}
