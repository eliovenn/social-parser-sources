import {transform} from 'esbuild';
import {readdir,readFile,writeFile} from 'node:fs/promises';
async function format(dir){
 for(const entry of await readdir(dir,{withFileTypes:true})){
  const path=`${dir}/${entry.name}`;
  if(entry.isDirectory()&&entry.name!=='vendor')await format(path);
  else if(entry.isFile()&&path.endsWith('.js')){
   const result=await transform(await readFile(path,'utf8'),{loader:'js',target:'es2022',legalComments:'inline'});
   await writeFile(path,result.code);
  }
 }
}
await format('sources');
