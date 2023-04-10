(function(o,r){typeof exports=="object"&&typeof module!="undefined"?module.exports=r(require("@vis-three/middleware"),require("three")):typeof define=="function"&&define.amd?define(["@vis-three/middleware","three"],r):(o=typeof globalThis!="undefined"?globalThis:o||self,o["vis-three"]=o["vis-three"]||{},o["vis-three"]["module-geometry"]=r(o.middleware,o.three))})(this,function(o,r){"use strict";var de=Object.defineProperty;var Ge=(o,r,h)=>r in o?de(o,r,{enumerable:!0,configurable:!0,writable:!0,value:h}):o[r]=h;var C=(o,r,h)=>(Ge(o,typeof r!="symbol"?r+"":r,h),h);class h extends r.BufferGeometry{constructor(n){super();C(this,"type","LoadBufferGeometry");n&&this.copy(n)}}class d extends r.BufferGeometry{constructor(n=[],i=36,s=!0){super();C(this,"parameters");this.type="CurveGeometry",this.parameters={path:n.map(a=>a.clone()),space:s,divisions:i}}}class v extends d{constructor(t=[],n=36,i=!0){super(t,n,i),this.type="CubicBezierCurveGeometry";const s=new r.CurvePath;if(t.length<4){console.warn("CubicBezierCurveGeometry path length at least 4.");return}const a=4+(t.length-4)-(t.length-4)%3;for(let u=2;u<a;u+=3)s.add(new r.CubicBezierCurve3(t[u-2],t[u-1],t[u],t[u+1]));const c=s.curves.reduce((u,p)=>u+=p.arcLengthDivisions,0);if(n>c){const u=Math.ceil((n-c)/s.curves.length);s.curves.forEach(p=>{p.arcLengthDivisions=p.arcLengthDivisions*(u+1),p.updateArcLengths()})}this.setFromPoints(i?s.getSpacedPoints(n):s.getPoints(n))}}class P extends d{constructor(t=[],n=36,i=!0){if(super(t,n,i),this.type="LineCurveGeometry",!t.length){console.warn("LineCurveGeometry path length at least 1.");return}const s=new r.CurvePath;for(let c=1;c<t.length;c+=1)s.add(new r.LineCurve3(t[c-1],t[c]));const a=s.curves.reduce((c,u)=>c+=u.arcLengthDivisions,0);if(n>a){const c=Math.ceil((n-a)/s.curves.length);s.curves.forEach(u=>{u.arcLengthDivisions=u.arcLengthDivisions*(c+1),u.updateArcLengths()})}this.setFromPoints(i?s.getSpacedPoints(n):s.getPoints(n))}}class b extends d{constructor(t=[],n=36,i=!0){super(t,n,i),this.type="QuadraticBezierCurveGeometry";const s=new r.CurvePath;if(t.length<3){console.warn("QuadraticBezierCurveGeometry path length at least 3.");return}const a=3+(t.length-3)-(t.length-3)%2;for(let u=1;u<a;u+=2)s.add(new r.QuadraticBezierCurve3(t[u-1],t[u],t[u+1]));const c=s.curves.reduce((u,p)=>u+=p.arcLengthDivisions,0);if(n>c){const u=Math.ceil((n-c)/s.curves.length);s.curves.forEach(p=>{p.arcLengthDivisions=p.arcLengthDivisions*(u+1),p.updateArcLengths()})}this.setFromPoints(i?s.getSpacedPoints(n):s.getPoints(n))}}class L extends d{constructor(t=[],n=36,i=!0){if(super(t,n,i),this.type="SplineCurveGeometry",!t.length){console.warn("SplineCurveGeometry path length at least 1.");return}const s=new r.CatmullRomCurve3(t);this.setFromPoints(i?s.getSpacedPoints(n):s.getPoints(n))}}class x extends r.ShapeBufferGeometry{constructor(t=[new r.Vector2(0,0)],n=12){const i=new r.Shape,s=t[0];if(s){i.moveTo(s.x,s.y);for(let a=1;a<t.length;a+=1)i.lineTo(t[a].x,t[a].y)}super(i,n),this.type="LineShapeGeometry"}}class w extends r.TubeGeometry{constructor(t=[],n=64,i=1,s=8,a=!1){if(!t.length){console.warn("LineTubeGeometry path length at least 1.");return}const c=new r.CurvePath;for(let u=1;u<t.length;u+=1)c.add(new r.LineCurve3(t[u-1],t[u]));super(c,n,i,s,a),this.type="LineTubeGeometry"}}class B extends r.TubeGeometry{constructor(t=[],n=64,i=1,s=8,a=!1){if(!t.length){console.warn("SplineTubeGeometry path length at least 1.");return}const c=new r.CatmullRomCurve3(t);super(c,n,i,s,a),this.type="SplineTubeGeometry"}}const T=function(e,t){!(e instanceof d)&&!(e instanceof r.TubeGeometry)&&!(e instanceof r.ShapeGeometry)&&e.center(),e.computeBoundingBox();const n=e.boundingBox,i=t.position,s=t.rotation,a=t.scale,c=new r.Quaternion().setFromEuler(new r.Euler(s.x,s.y,s.z,"XYZ"));return e.applyQuaternion(c),e.scale(a.x,a.y,a.z),!(e instanceof d)&&!(e instanceof r.TubeGeometry)&&!(e instanceof r.ShapeGeometry)&&e.center(),e.computeBoundingBox(),e.translate((n.max.x-n.min.x)/2*i.x,(n.max.y-n.min.y)/2*i.y,(n.max.z-n.min.z)/2*i.z),e},f={reg:new RegExp(".*"),handler({config:e,target:t,processor:n,engine:i,compiler:s}){const a=n.create(e,i,s);t.copy(a),t.uuid=a.uuid,a.dispose()}},m={add:{groups({target:e,value:t}){e.addGroup(t.start,t.count,t.materialIndex)},$reg:[f]},set:{groups(e){const{path:t,target:n,config:i}=e;if(t[1]!==void 0){n.groups.splice(Number(e.path[1]),1);const s=i.groups[t[1]];n.addGroup(s.start,s.count,s.materialIndex)}else console.warn("geometry processor can not set group",e)},$reg:[f]},delete:{groups({target:e,key:t}){e.groups.splice(Number(t),1)},$reg:[f]}},y=function(e,t){e.clearGroups();for(const n of t.groups)e.addGroup(n.start,n.count,n.materialIndex);return T(e,t)},g=function(e){e.dispose()},l=function(){return{vid:"",type:"Geometry",position:{x:0,y:0,z:0},rotation:{x:0,y:0,z:0},scale:{x:1,y:1,z:1},groups:[]}},z=function(){return Object.assign(l(),{width:5,height:5,depth:5,widthSegments:1,heightSegments:1,depthSegments:1})},O=function(){return Object.assign(l(),{radius:3,widthSegments:32,heightSegments:32,phiStart:0,phiLength:Math.PI*2,thetaStart:0,thetaLength:Math.PI})},j=function(){return Object.assign(l(),{width:5,height:5,widthSegments:1,heightSegments:1})},A=function(){return Object.assign(l(),{radius:3,segments:8,thetaStart:0,thetaLength:Math.PI*2})},E=function(){return Object.assign(l(),{radius:3,height:5,radialSegments:8,heightSegments:1,openEnded:!1,thetaStart:0,thetaLength:Math.PI*2})},R=function(){return Object.assign(l(),{radius:3,tube:.4,radialSegments:8,tubularSegments:6,arc:Math.PI*2})},M=function(){return Object.assign(l(),{innerRadius:2,outerRadius:3,thetaSegments:8,phiSegments:8,thetaStart:0,thetaLength:Math.PI*2})},D=function(){return Object.assign(l(),{url:""})},I=function(){return Object.assign(l(),{attribute:{position:[],color:[],index:[],normal:[],uv:[],uv2:[]}})},F=function(){return Object.assign(l(),{radiusTop:3,radiusBottom:3,height:5,radialSegments:8,heightSegments:1,openEnded:!1,thetaStart:0,thetaLength:Math.PI*2})},Q=function(){return Object.assign(l(),{url:"",thresholdAngle:1})},G=function(){return Object.assign(l(),{path:[],divisions:36,space:!0})},V=function(){return Object.assign(G(),{})},$=function(){return Object.assign(G(),{})},q=function(){return Object.assign(G(),{})},N=function(){return Object.assign(G(),{})},S=function(){return Object.assign(l(),{path:[],tubularSegments:64,radius:1,radialSegments:8,closed:!1})},Y=function(){return Object.assign(S(),{})},_=function(){return Object.assign(S(),{})},U=function(){return Object.assign(l(),{path:[],curveSegments:12})},W=function(){return Object.assign(U(),{})};var X=o.defineProcessor({type:"BoxGeometry",config:z,commands:m,create:e=>y(new r.BoxBufferGeometry(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments),e),dispose:g}),Z=o.defineProcessor({type:"CircleGeometry",config:A,commands:m,create:e=>y(new r.CircleBufferGeometry(e.radius,e.segments,e.thetaStart,e.thetaLength),e),dispose:g}),k=o.defineProcessor({type:"ConeGeometry",config:E,commands:m,create:e=>y(new r.ConeBufferGeometry(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength),e),dispose:g}),H=o.defineProcessor({type:"CubicBezierCurveGeometry",config:q,commands:m,create:e=>y(new v(e.path.map(t=>new r.Vector3(t.x,t.y,t.z)),e.divisions,e.space),e),dispose:g});const J=function(e){const t=new r.BufferGeometry;return e.position.length&&t.setAttribute("position",new r.Float32BufferAttribute(e.position,3)),e.color.length&&t.setAttribute("color",new r.Float32BufferAttribute(e.color,3)),e.normal.length&&t.setAttribute("normal",new r.Float32BufferAttribute(e.normal,3)),e.uv.length&&t.setAttribute("uv",new r.Float32BufferAttribute(e.uv,2)),e.uv2.length&&t.setAttribute("uv2",new r.Float32BufferAttribute(e.uv2,2)),e.index.length&&t.setIndex(e.index),t};var K=o.defineProcessor({type:"CustomGeometry",config:I,commands:m,create(e){return y(J(e.attribute),e)},dispose(e){e.dispose()}}),ee=o.defineProcessor({type:"CylinderGeometry",config:F,commands:m,create:e=>y(new r.CylinderBufferGeometry(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength),e),dispose:g}),te=o.defineProcessor({type:"EdgesGeometry",config:Q,commands:m,create(e,t){const n=t.compilerManager.getObjectBySymbol(e.url);return!n||!(n instanceof r.BufferGeometry)?(console.error(`engine rescoure can not found url: ${e.url}`),new r.EdgesGeometry(new r.BoxBufferGeometry(5,5,5))):y(new r.EdgesGeometry(n),e)},dispose(e){e.dispose()}});class re extends o.Compiler{constructor(){super()}}const ne=function(e,t){o.Rule(e,t)};var se=o.defineProcessor({type:"LineCurveGeometry",config:V,commands:m,create:e=>y(new P(e.path.map(t=>new r.Vector3(t.x,t.y,t.z)),e.divisions,e.space),e),dispose:g}),oe=o.defineProcessor({type:"LineShapeGeometry",config:W,commands:m,create:e=>y(new x(e.path.map(t=>new r.Vector2(t.x,t.y)),e.curveSegments),e),dispose:g}),ue=o.defineProcessor({type:"LineTubeGeometry",config:Y,commands:m,create:e=>y(new w(e.path.map(t=>new r.Vector3(t.x,t.y,t.z)),e.tubularSegments,e.radius,e.radialSegments,e.closed),e),dispose:g}),ie=o.defineProcessor({type:"LoadGeometry",config:D,commands:m,create(e,t){const n=t.resourceManager.resourceMap.get(e.url);return!n&&!(n instanceof r.BufferGeometry)?(console.error(`engine rescoure can not found url: ${e.url}`),new r.BoxBufferGeometry(5,5,5)):y(new h(n),e)},dispose(e){e.dispose()}}),ae=o.defineProcessor({type:"PlaneGeometry",config:j,commands:m,create:e=>y(new r.PlaneBufferGeometry(e.width,e.height,e.widthSegments,e.heightSegments),e),dispose:g}),ce=o.defineProcessor({type:"QuadraticBezierCurveGeometry",config:N,commands:m,create:e=>y(new b(e.path.map(t=>new r.Vector3(t.x,t.y,t.z)),e.divisions,e.space),e),dispose:g}),me=o.defineProcessor({type:"RingGeometry",config:M,commands:m,create:e=>y(new r.RingBufferGeometry(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength),e),dispose:g}),ye=o.defineProcessor({type:"SphereGeometry",config:O,commands:m,create:e=>y(new r.SphereBufferGeometry(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength),e),dispose:g}),ge=o.defineProcessor({type:"SplineCurveGeometry",config:$,commands:m,create:e=>y(new L(e.path.map(t=>new r.Vector3(t.x,t.y,t.z)),e.divisions,e.space),e),dispose:g}),le=o.defineProcessor({type:"SplineTubeGeometry",config:_,commands:m,create:e=>y(new B(e.path.map(t=>new r.Vector3(t.x,t.y,t.z)),e.tubularSegments,e.radius,e.radialSegments,e.closed),e),dispose:g}),pe=o.defineProcessor({type:"TorusGeometry",config:R,commands:m,create:e=>y(new r.TorusGeometry(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc),e),dispose:g}),he={type:"geometry",compiler:re,rule:ne,processors:[X,Z,k,H,K,ee,te,se,oe,ue,ie,ae,ce,me,ye,ge,le,pe],lifeOrder:o.SUPPORT_LIFE_CYCLE.TWO};return he});
