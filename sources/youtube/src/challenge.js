import jsc from "../vendor/core.js";
import { fail } from "../../common/api.js";
export function solvePlayer(player, signatures, nChallenges, prepared) {
  const requests = [];
  if (signatures.length) requests.push({ type: "sig", challenges: signatures });
  if (nChallenges.length) requests.push({ type: "n", challenges: nChallenges });
  const r = jsc({ ...prepared ? { type: "preprocessed", preprocessed_player: prepared } : { type: "player", player }, requests, output_preprocessed: true });
  if (r.type !== "result" || r.responses?.length !== requests.length) fail("YouTube challenge failed");
  const sig = {}, n = {};
  r.responses.forEach((response, i) => {
    if (response.type !== "result" || !response.data) return;
    const target = requests[i].type === "sig" ? sig : n;
    for (const [key, value] of Object.entries(response.data)) if (typeof value === "string" && value) target[key] = value;
  });
  return { sig, n, prepared: r.preprocessed_player };
}
