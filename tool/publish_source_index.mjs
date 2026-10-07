// Generates the mutable CDN catalog from the local, relative build index.
import {readFile, writeFile, mkdir} from 'node:fs/promises';
import {dirname} from 'node:path';
import {createHash} from 'node:crypto';
const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const i = args.indexOf('--' + name);
  if (i < 0) return fallback;
  if (!args[i + 1] || args[i + 1].startsWith('--')) throw Error('Missing --' + name);
  return args[i + 1];
};
const repo = flag('repo'), ref = flag('ref'), out = flag('out', 'index.json');
if (!/^[\w.-]+\/[\w.-]+$/.test(repo ?? '') ||
    !/^(?:[a-f0-9]{40}|v\d+\.\d+\.\d+(?:[-.][\w.-]+)?)$/.test(ref ?? '')) {
  throw Error('Usage: node tool/publish_source_index.mjs --repo OWNER/REPO --ref COMMIT_SHA_OR_v1.0.0 [--out index.json]');
}
const prefix = 'dist/';
const index = JSON.parse(await readFile(prefix + 'index.json', 'utf8'));
if (index.apiVersion !== 1) throw Error('Unsupported index API');
for (const entry of index.sources) {
  if (!/^[\w-]+\.js$/.test(entry.url)) throw Error('Invalid bundled filename');
  const code = await readFile(prefix + entry.url);
  if (createHash('sha256').update(code).digest('hex') !== entry.sha256) {
    throw Error('Stale bundled digest: ' + entry.id);
  }
  entry.url = `https://cdn.jsdelivr.net/gh/${repo}@${ref}/${prefix}${entry.url}`;
}
await mkdir(dirname(out), {recursive: true});
await writeFile(out, JSON.stringify(index, null, 2) + '\n');
console.log(`Generated ${out} with ${index.sources.length} platform URLs. Publish the matching JS commit/tag before publishing this catalog.`);
