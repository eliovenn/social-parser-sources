import { resolveDefault, postForm, match, array, metaCookies, metaMedia, result, desktopUA, fail } from "../../common/api.js";
import { relayProviders } from "./constants.js";
export const resolve = (i) => resolveDefault(i);
export function postId(code) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";
  let id = 0n;
  for (const ch of code) {
    const n = alphabet.indexOf(ch);
    if (n < 0) fail();
    id = id * 64n + BigInt(n);
  }
  return id.toString();
}
export async function parse(input) {
  const { url, canonicalUrl } = await resolve(input), code = match(/\/post\/([\w-]+)/, new URL(url).pathname), task = parserContext, cookies = await metaCookies("www.threads.com");
  const variables = { postID: postId(code) };
  for (const name of relayProviders) variables[`__relay_internal__pv__${name}relayprovider`] = false;
  const response = await postForm("https://www.threads.com/graphql/query", { doc_id: "27419285281047858", server_timestamps: "true", variables: JSON.stringify(variables) }, { cookies, headers: { Referer: "https://www.threads.com/", "X-IG-App-ID": "238260118697367", "x-csrftoken": cookies.csrftoken ?? task.cookies.csrftoken ?? "" } });
  let post;
  for (const e of array(response.data?.data?.edges)) for (const v of array(e.node?.thread_items)) if (v.post?.code === code) post = v.post;
  if (!post) fail();
  return result(canonicalUrl, { content: typeof post.caption === "string" ? post.caption : post.caption?.text ?? "", media: metaMedia(post, { Referer: "https://www.threads.com/", "User-Agent": desktopUA }) });
}
