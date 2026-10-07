import {aBogus} from '../sources/douyin/src/signing.js';
import {sign as xiaoheihe} from '../sources/xiaoheihe/src/signing.js';
import {sign as zhihu} from '../sources/zhihu/src/signing.js';
import {signWbi} from '../sources/bilibili/src/signing.js';
import {postId} from '../sources/threads/src/main.js';
import {readData} from '../sources/common/data.js';
import {solvePlayer} from '../sources/youtube/src/challenge.js';
export async function resolve(input){return input;}
export async function parse(input){
 if(input.operation==='challenge')return solvePlayer(input.player??'',input.signatures??[],input.nChallenges??[],input.prepared);
 if(input.operation==='data')return {data:readData(input.text)};
 return {
 douyin:await aBogus('aweme_id=123&aid=6383',{startTime:1700000000000,endTime:1700000000006,randomValues:[1234,5678,9012]}),
 xiaoheihe:(await xiaoheihe('/bbs/app/link/tree',{time:1700000000,nonce:'0123456789ABCDEF0123456789ABCDEF'})).hkey,
 zhihu:await zhihu('/api/v4/answers/123?include=data[*].content','fixture-d_c0',{iv:Array.from({length:16},(_,i)=>i)}),
 wbi:(await signWbi({foo:'114',bar:'514',zab:'1919810'},'https://i.example/7cd084941338484aae1ad9425b84077c.png','https://i.example/4932caff0ff746eab6f01bf08b70ac45.png',1702204169)).w_rid,
 threads:postId('___________')};
}
