import {parseDocument} from 'htmlparser2';
import {selectAll} from 'css-select';
import render from 'dom-serializer';
const text = node => node.type === 'text' ? node.data : (node.children ?? []).map(text).join('');
const select = (body, selector) => selectAll(selector, parseDocument(body)).map(node => ({text:text(node),html:(node.children??[]).map(n=>render(n)).join(''),outerHtml:render(node),attributes:{...node.attribs}}));
function content(body) {
 const doc=parseDocument(body);
 function visit(node){
  if(node.type==='text')return node.data;
  const value=(node.children??[]).map(visit).join(''),a=node.attribs??{};
  switch(node.name){
   case 'script':case 'style':return '';
   case 'img':return `\n![${a.alt??''}](${a['data-original']??a['data-src']??a.src??''})\n`;
   case 'br':return '\n';case 'a':return `[${value}](${a.href??''})`;
   case 'b':case 'strong':return `**${value}**`;case 'em':case 'i':return `*${value}*`;
   case 'li':return `- ${value}\n`;case 'blockquote':return `\n> ${value.trim()}\n`;
   case 'p':case 'div':return `\n${value}\n`;
   default:return /^h[1-6]$/.test(node.name??'')?`\n${'#'.repeat(Number(node.name[1]))} ${value}\n`:value;
  }
 }
 return {text:text(parseDocument(body.replace(/<br\s*\/?>/gi,'\n').replace(/<\/(?:p|div|h[1-6])>/gi,'\n'))).trim(),markdown:visit(doc).replace(/\n{3,}/g,'\n\n').trim(),images:selectAll('img',doc).map(n=>n.attribs['data-original']??n.attribs['data-src']??n.attribs.src??null)};
}
export const html={select,content};
export const xml={representations(body){
 const doc=parseDocument(body,{xmlMode:true});
 const child=(n,name)=>(n.children??[]).find(n=>n.name===name);
 return selectAll('Representation',doc,{xmlMode:true}).map(node=>{
  const ancestors=[];for(let p=node;p;p=p.parent)ancestors.push(p);
  return {id:node.attribs.id??null,url:child(node,'BaseURL')?text(child(node,'BaseURL')):null,mimeType:node.attribs.mimeType??node.parent?.attribs?.mimeType??null,complete:ancestors.some(n=>child(n,'SegmentBase'))&&!ancestors.some(n=>child(n,'SegmentTemplate')||child(n,'SegmentList'))};
 });
}};
