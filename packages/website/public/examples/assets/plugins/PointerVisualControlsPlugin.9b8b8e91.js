import"../modulepreload-polyfill.b7f2da20.js";import{M as r,B as a,a as s,P as m,L as p,b as g}from"../three.a7f96461.js";import{W as d,C as l}from"../index.905449da.js";import{R as u}from"../index.90c2f86e.js";import{E as f}from"../index.ac438749.js";import{G as c}from"../index.2afa8225.js";import{E as P}from"../index.725c43cc.js";import{u as w}from"../index.a2f5d06c.js";import{P as y}from"../index.5447b772.js";const t=w({plugins:[u(),d({antialias:!0,alpha:!0}),f({WebGLMultisampleRenderTarget:!0}),l(),c(),y()],strategy:[P()]}).setDom(document.getElementById("app")).setSize().play(),e=t.scene,n=new r(new a(10,10,10),new s({color:"rgb(255, 105, 100)"}));n.position.x=10;e.add(n);const o=new m("rgb(255, 255, 255)",1,300,0);o.position.y=30;e.add(o);const b=new p(n.geometry);e.add(b);const i=new g(n.geometry);i.position.x=-10;e.add(i);window.engine=t;
