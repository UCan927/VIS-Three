(function(c,p){typeof exports=="object"&&typeof module!="undefined"?module.exports=p(require("@vis-three/middleware"),require("uuid"),require("three")):typeof define=="function"&&define.amd?define(["@vis-three/middleware","uuid","three"],p):(c=typeof globalThis!="undefined"?globalThis:c||self,c["vis-three"]=c["vis-three"]||{},c["vis-three"]["module-path"]=p(c.middleware,c.uuid,c.three))})(this,function(c,p,n){"use strict";class C extends c.Compiler{constructor(){super()}compile(r,t){return super.compile(r,t),this}}const y=function(e,r,t=p.validate){c.Rule(e,r,t)},V=function(){return Object.assign(c.getSymbolConfig(),{curves:[],autoClose:!1})},d={arc:(e,r,t,s,u,o)=>{const i=new n.Vector2(e,r),v=new n.Vector2(u,o),x=new n.Vector2((u+e)/2,(o+r)/2),a=new n.Vector2().copy(v).sub(i);a.set(-a.y,a.x).negate().normalize().multiplyScalar(t).add(x);const f=new n.Vector2().copy(v).sub(a).length(),b=new n.Vector2().copy(i).sub(a).angle(),E=new n.Vector2().copy(v).sub(a).angle();return new n.EllipseCurve(a.x,a.y,f,f,b,E,s,0)},line:(e,r,t,s)=>new n.LineCurve(new n.Vector2(e,r),new n.Vector2(t,s)),bezier:(e,r,t,s,u,o,i,v)=>new n.CubicBezierCurve(new n.Vector2(e,r),new n.Vector2(t,s),new n.Vector2(u,o),new n.Vector2(i,v)),quadratic:(e,r,t,s,u,o)=>new n.QuadraticBezierCurve(new n.Vector2(e,r),new n.Vector2(t,s),new n.Vector2(u,o))},m=function(e,r){return r==="start"?{x:e.params[0],y:e.params[1]}:{x:e.params[e.params.length-2],y:e.params[e.params.length-1]}},l=function(e){return d[e.curve]?d[e.curve](...e.params):(console.warn(`path processor can not support this curve: ${e.curve}`),null)},w=function(e,r,t){if(t==="start")e.params[0]!==r[0]&&(e.params[0]=r[0]),e.params[1]!==r[1]&&(e.params[1]=r[1]);else{const s=e.params.length-1;e.params[s-1]!==r[0]&&(e.params[s-1]=r[0]),e.params[s]!==r[1]&&(e.params[s]=r[1])}};var h=c.defineProcessor({type:"Path",config:V,commands:{add:{curves({target:e,config:r,value:t}){const s=l(t);s&&e.curves.push(s)}},set:{curves({target:e,config:r,path:t}){const s=Number(t[1]);if(!Number.isInteger(s)){console.warn("path processor: set curves path error:",t);return}const u=l(r.curves[s]);e.curves[s]=u;const o=m(r.curves[s],"start"),i=m(r.curves[s],"end");s-1>=0&&w(r.curves[s-1],[o.x,o.y],"end"),s+1<=e.curves.length-1&&w(r.curves[s+1],[i.x,i.y],"start")}},delete:{curves({target:e,value:r}){e.curves.length-1<r||e.curves.splice(r,e.curves.length)}}},create(e,r){const t=new n.Path;if(e.curves.length)for(const s of e.curves){const u=l(s);u&&t.curves.push(u)}return t.autoClose=e.autoClose,t},dispose(e){e.curves=[]}}),P={type:"path",compiler:C,rule:y,processors:[h],lifeOrder:c.SUPPORT_LIFE_CYCLE.ZERO};return P});
