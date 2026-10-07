// Compatibility helpers for platform code; transport is standard global fetch.

async function request(method, url, body, options={}) {
  const headers=new Headers(options.headers);
  if(options.cookies){
    const session=parserContext;
    headers.set('cookie',Object.entries({...session.cookies,...options.cookies}).map(([k,v])=>`${k}=${v}`).join('; '));
  }
  const response=await fetch(url,{
    method,headers,
    body:method==='POST'?(typeof body==='string'?body:JSON.stringify(body)):undefined,
    credentials:options.credentials===false?'omit':'include',
    redirect:options.followRedirects===false?'manual':'follow',
    signal:options.signal,
  });
  const responseHeaders={};
  response.headers.forEach((value,key)=>{responseHeaders[key]=[value];});
  const cookies=response.headers.getSetCookie();
  if(cookies.length)responseHeaders['set-cookie']=cookies;
  return {url:response.url,body:await response.text(),status:response.status,headers:responseHeaders};
}
export const http={get:(url,options)=>request('GET',url,undefined,options),post:(url,body,options)=>request('POST',url,body,options)};
