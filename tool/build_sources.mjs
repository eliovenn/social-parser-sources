import {build} from 'esbuild';
import {readFile,writeFile,mkdir,readdir} from 'node:fs/promises';
import {createHash} from 'node:crypto';
const check=process.argv.includes('--check'),partial=process.argv.includes('--partial');
const out='dist';await mkdir(out,{recursive:true});
async function emit(path,body){if(check){if(await readFile(path,'utf8')!==body)throw Error('Stale generated source: '+path);}else await writeFile(path,body);}
const entries=[];
for(const dir of (await readdir('sources',{withFileTypes:true})).filter(d=>d.isDirectory()&&d.name!=='common').sort((a,b)=>a.name.localeCompare(b.name))){
 const name=dir.name,manifest=JSON.parse(await readFile(`sources/${name}/manifest.json`,'utf8'));
 try {await readFile(`sources/${name}/src/main.js`);}catch(e){if(partial)continue;throw e;}
 const result=await build({entryPoints:[`sources/${name}/src/main.js`],bundle:true,write:false,format:'esm',platform:'neutral',target:'es2022',external:['crypto'],legalComments:'inline'});
 const code='/* @social-source\n'+JSON.stringify(manifest,null,2)+'\n*/\n'+result.outputFiles[0].text;
 await emit(`${out}/${name}.js`,code);
 entries.push({id:manifest.id,version:manifest.version,url:`${name}.js`,sha256:createHash('sha256').update(code).digest('hex')});
}
const index=JSON.stringify({apiVersion:1,sources:entries},null,2)+'\n';await emit(`${out}/index.json`,index);
console.log(`${check?'Verified':'Built'} ${entries.length} source bundles`);
await mkdir('test/fixtures',{recursive:true});
const probe=await build({entryPoints:['tool/source_probe.js'],bundle:true,write:false,format:'esm',platform:'neutral',target:'es2022',external:['crypto'],legalComments:'inline'});
await emit('test/fixtures/probe.js',probe.outputFiles[0].text);
// Protocol fixture: only the challenge algorithm is replaced; URL and format mapping is production code.
const youtubeFixture=await build({entryPoints:['sources/youtube/src/main.js'],bundle:true,write:false,format:'esm',platform:'neutral',target:'es2022',external:['crypto'],plugins:[{name:'challenge-fixture',setup(b){b.onLoad({filter:/youtube\/src\/challenge\.js$/},()=>({contents:'export function solvePlayer(player,signatures,ns){return {sig:Object.fromEntries(signatures.map(s=>[s,"clear"])),n:Object.fromEntries(ns.map(s=>[s,"fast"]))};}',loader:'js'}));}}]});
await emit('test/fixtures/youtube.js','/* @social-source\n'+await readFile('sources/youtube/manifest.json','utf8')+'\n*/\n'+youtubeFixture.outputFiles[0].text);

