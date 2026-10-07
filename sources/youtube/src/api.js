import { get, postJson, assigned, readData, digest, mediaUrl, fail } from "../../common/api.js";
export const origin = "https://www.youtube.com";
const safari = "Mozilla/5.0 (Macintosh; Intel Mac OS X 15_7_3) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.0 Safari/605.1.15";
export class YoutubeApi {
  constructor(task) {
    this.task = task;
    this.config = {};
    this.playerUrl = "";
    this.playerJavaScript = "";
  }
  options(extra = {}) {
    return { ...extra, headers: { "User-Agent": safari, ...extra.headers } };
  }
  async webpage(id) {
    const { body } = await get(origin + "/watch?v=" + id + "&hl=en", this.options());
    let offset = 0;
    while ((offset = body.indexOf("ytcfg.set(", offset)) >= 0) {
      offset += 10;
      try {
        Object.assign(this.config, readData(body.slice(offset)));
      } catch {
      }
    }
    this.playerUrl = this.config.PLAYER_JS_URL ?? "";
    if (!this.playerUrl) {
      const m = /"(?:jsUrl|PLAYER_JS_URL)"\s*:\s*("(?:\\.|[^"\\])*")/.exec(body);
      if (m) this.playerUrl = JSON.parse(m[1]);
    }
    if (this.playerUrl) this.playerUrl = new URL(this.playerUrl, origin).href;
    return assigned(body, "ytInitialPlayerResponse =");
  }
  async loadPlayer() {
    if (this.playerJavaScript) return;
    if (!this.playerUrl) {
      const r = await get(origin + "/iframe_api", this.options({ credentials: false })), id = /player\\?\/([a-zA-Z0-9_-]+)\\?\//.exec(r.body)?.[1];
      if (id) this.playerUrl = origin + "/s/player/" + id + "/player_ias.vflset/en_US/base.js";
    }
    const u = mediaUrl(this.playerUrl);
    if (!u || new URL(u).hostname !== "www.youtube.com" || new URL(u).protocol !== "https:") fail("Missing player");
    this.playerJavaScript = (await get(u, this.options({ credentials: false }))).body;
  }
  get authenticated() {
    return !!this.task.cookies.LOGIN_INFO && ["SAPISID", "__Secure-1PAPISID", "__Secure-3PAPISID"].some((k) => this.task.cookies[k]);
  }
  async player(id, clientName) {
    const cfg = this.config;
    const [name, version, number] = { visionos: ["VISIONOS", "1.02", "101"], web_embedded: ["WEB_EMBEDDED_PLAYER", "2.20260708.00.00", "56"], tv_downgraded: ["TVHTML5", "5.20260707", "7"] }[clientName] ?? ["WEB", cfg.INNERTUBE_CLIENT_VERSION || "2.20260708.00.00", "1"];
    const client = { clientName: name, clientVersion: version, hl: "en", gl: "US", utcOffsetMinutes: 0, ...clientName === "visionos" ? { deviceMake: "Apple", deviceModel: "RealityDevice17,1", osName: "visionOS", osVersion: "26.5.23O471", userAgent: safari } : {} }, visitor = cfg.VISITOR_DATA ?? cfg.INNERTUBE_CONTEXT?.client?.visitorData;
    if (typeof visitor === "string") client.visitorData = visitor;
    const headers = { Origin: origin, "X-Youtube-Client-Name": number, "X-Youtube-Client-Version": version, ...typeof visitor === "string" ? { "X-Goog-Visitor-Id": visitor } : {} };
    if (clientName !== "visionos") {
      const timestamp = Math.floor(Date.now() / 1e3), cookies = this.task.cookies, auth = [], user = cfg.USER_SESSION_ID ?? "";
      for (const [key, value] of Object.entries({ SAPISIDHASH: cookies.SAPISID ?? cookies["__Secure-3PAPISID"], SAPISID1PHASH: cookies["__Secure-1PAPISID"], SAPISID3PHASH: cookies["__Secure-3PAPISID"] })) if (value) {
        const hash = await digest("sha1", (user ? user + " " : "") + timestamp + " " + value + " " + origin);
        auth.push(key + " " + timestamp + "_" + hash + (user ? "_u" : ""));
      }
      if (auth.length) Object.assign(headers, { Authorization: auth.join(" "), "X-Goog-AuthUser": String(cfg.SESSION_INDEX ?? 0), "X-Origin": origin });
      if (typeof cfg.DELEGATED_SESSION_ID === "string") headers["X-Goog-PageId"] = cfg.DELEGATED_SESSION_ID;
    }
    const sts = /(?:signatureTimestamp|sts)\s*[:=]\s*(\d+)/.exec(this.playerJavaScript)?.[1];
    return postJson(origin + "/youtubei/v1/player?prettyPrint=false", { videoId: id, contentCheckOk: true, racyCheckOk: true, context: { client, user: { lockedSafetyMode: false }, ...clientName === "web_embedded" ? { thirdParty: { embedUrl: origin + "/" } } : {} }, playbackContext: { contentPlaybackContext: { html5Preference: "HTML5_PREF_WANTS", ...sts ? { signatureTimestamp: Number(sts) } : {} } } }, this.options({ headers, credentials: clientName !== "visionos" }));
  }
}
