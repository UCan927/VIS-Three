import"../modulepreload-polyfill.b7f2da20.js";import{W as n,C as r}from"../index.1d3a6ec0.js";import{E as m}from"../index.2e2f06f6.js";import{T as s}from"../index.12fd638d.js";import{T as a}from"../index.664a593f.js";import{E as p}from"../index.117a61e1.js";import{q as l,g as e}from"../vis-three.middleware.es.7f273029.js";import{q as d,m as c,l as g,f as y,j as S,k as f,p as u}from"../vis-three.module-particle.es.8e43cbb8.js";import{S as x}from"../index.4ec3bfd2.js";import{S as v}from"../index.f318ae8c.js";import"../index.202ebdec.js";import"../three.237d835c.js";import"../ShaderPass.02f07bc0.js";import"../index.c35e5a3e.js";import"../vis-three.plugin-pointer-manager.es.640cfa1a.js";import"../index.e6be8a02.js";import"../vis-three.plugin-loader-manager.es.c1771985.js";import"../G6.d44f13fb.js";import"../Antdv.414c4eb5.js";import"../UnrealBloomPass.2cdbe9ee.js";import"../CSS3DRenderer.ba0f6fa5.js";import"../index.ee52b7bf.js";import"../vis-three.convenient.es.7b860830.js";const t=l({plugins:[n({antialias:!0,alpha:!0}),m({MSAA:!0}),r(),s(),x(),v()],strategy:[p(),a()],modules:[d,c,g,y,S,f,u]}).setDom(document.getElementById("app")).setSize().play();e.injectEngine=t;const o=e("Scene");t.setSceneBySymbol(o.vid);e.injectScene=o.vid;e("PointLight",{position:{y:30}});const B=e("MeshStandardMaterial",{color:"rgb(255, 105, 100)"}),i=e("BoxGeometry",{width:10,height:10,depth:10}),E=e("Mesh",{material:B.vid,geometry:i.vid,position:{x:10}}),h=e("Line",{geometry:i.vid}),P=e("PointsMaterial"),b=e("Points",{geometry:i.vid,material:P.vid,position:{x:-10}});document.getElementById("mesh").onclick=()=>{t.setSelectionBoxBySymbol([E.vid])};document.getElementById("line").onclick=()=>{t.setSelectionBoxBySymbol([h.vid])};document.getElementById("points").onclick=()=>{t.setSelectionBoxBySymbol([b.vid])};window.engine=t;