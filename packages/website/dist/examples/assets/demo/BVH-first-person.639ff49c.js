import"../modulepreload-polyfill.b7f2da20.js";import{l as B}from"../loadingTips.c31b1441.js";import{aA as x,w as E,bK as M,q as u,a8 as V,K as C,M as L,a as W}from"../three.837c9bb0.js";import{m as _,M as G}from"../index.74f64762.js";import{W as R,C as I}from"../index.1d7ad8b9.js";import{R as z}from"../index.9c42f01c.js";import{E as K}from"../index.388dadd4.js";import{L as H}from"../vis-three.plugin-loader-manager.es.7fbd57ff.js";import{K as A,a as D}from"../index.7e76d8d2.js";import{S as T}from"../index.9f3e0a95.js";import{P as j}from"../index.4cdf3859.js";import{E as q}from"../index.b828c96c.js";import{S as O}from"../index.484afc60.js";import{d as U}from"../index.7d48aff8.js";/* empty css               */import"../Antdv.a86c3c0d.js";import"../Pass.1ae4f2a0.js";const b=new u,P=new u,g=new x;new E;const s=new M,S=5,F=20;let w=!1;const d=new u,y={radius:.5,segment:new M(new u,new u(0,-1,0))},o=U({plugins:[z({fps:1e3/60}),R({antialias:!0,alpha:!0}),K({WebGLMultisampleRenderTarget:!0}),I(),H({path:"/examples/"}),T(),G({visualizer:!0,shapecast:{intersectsBounds:a=>a.intersectsBox(g),intersectsTriangle:a=>{const r=b,t=P,c=a.closestPointToSegment(s,r,t);if(c<y.radius){const i=y.radius-c,l=t.sub(r).normalize();s.start.addScaledVector(l,i),s.end.addScaledVector(l,i)}}}}),j()],strategy:[q(),O()]}).setDom(document.getElementById("app")).setSize().setStats(!0);o.install(A({target:o.camera,movementSpeed:10,quickenSpeed:10,space:"world",extendKeyDown:a=>{switch(a.code){case"Space":w&&(d.y=F);break}},beforeUpdate:({delta:a})=>{d.y+=w?0:a*-30,n.position.addScaledVector(d,a)}})).exec(D());const n=o.camera;B(o);document.getElementById("lock").onclick=()=>{o.pointerLockControls.lock(),document.getElementById("lock").style.display="none"};o.pointerLockControls.addEventListener("unlock",()=>{document.getElementById("lock").style.display="flex"});const v=()=>{d.y=0,n.position.set(47,0,90),n.lookAt(n.position.x,n.position.y,n.position.z-10),console.log(n.matrixWorld)},k=new V("white",7);k.position.set(-5,5,10);o.scene.add(n,k);v();const J=new u;o.keyboardMoveControls.forwrad=a=>o.pointerLockControls.getDirection(J);const N=a=>{n.updateMatrixWorld(),g.makeEmpty(),s.copy(y.segment),s.start.applyMatrix4(n.matrixWorld),s.end.applyMatrix4(n.matrixWorld),g.expandByPoint(s.start),g.expandByPoint(s.end),g.min.addScalar(-y.radius),g.max.addScalar(y.radius),o.meshBVHManager.shapecast();const r=b;r.copy(s.start);const t=P;t.subVectors(r,n.position),w=t.y>Math.abs(a*d.y*.25);const c=Math.max(0,t.length()-1e-5);t.normalize().multiplyScalar(c),n.position.add(t),w?d.set(0,0,0):(t.normalize(),d.addScaledVector(t,-t.dot(d))),n.position.y<-80&&v()};o.keyboardMoveControls.addEventListener("afterUpdate",a=>{for(let r=0;r<S;r+=1)N(a.delta/S)});o.loadResourcesAsync(["/model/glb/dungeon_low_poly_game_level_challenge/scene.gltf"]).then(a=>{const t=a.resourceMap.get("/model/glb/dungeon_low_poly_game_level_challenge/scene.gltf").scene;t.scale.setScalar(.03);const c=new x;c.setFromObject(t),c.getCenter(t.position).negate(),t.updateMatrixWorld(!0);const i={};t.traverse(e=>{if(!(/Boss/.test(e.name)||/Enemie/.test(e.name)||/Shield/.test(e.name)||/Sword/.test(e.name)||/Character/.test(e.name)||/Gate/.test(e.name)||/Cube/.test(e.name)||e.material&&e.material.color.r===1)&&e.isMesh){const f=e.material.color.getHex();i[f]=i[f]||[],i[f].push(e)}});const l=new C;for(const e in i){const f=i[e],h=[];if(f.forEach(p=>{if(p.material.emissive.r!==0)l.attach(p);else{const m=p.geometry.clone();m.applyMatrix4(p.matrixWorld),h.push(m)}}),h.length){const p=_(h),m=new L(p,new W({color:parseInt(e),shadowSide:2}));m.castShadow=!0,m.receiveShadow=!0,m.material.shadowSide=2,l.add(m)}}l.updateMatrixWorld(!0),l.traverse(e=>{e.geometry&&o.addBVH(e)}),o.scene.add(l),o.play()});window.engine=o;