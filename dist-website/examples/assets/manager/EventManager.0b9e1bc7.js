import{f as d}from"../Vis.es.638ec8a7.js";import{M as i,g as a,m as r,n as p}from"../three.8f03b6f1.js";import"../vis-three.9866afe7.js";const c=new d().setDom(document.getElementById("app")).setSize().play(),o=c.scene,t=new i(new a(10,10,10),new r({color:"rgb(255, 105, 100)"}));t.position.x=10;o.add(t);const n=new i(new a(10,10,10),new r({color:"rgb(255, 105, 100)"}));n.position.x=5;n.position.y=5;o.add(n);const l=new p("rgb(255, 255, 255)",1,300,0);l.position.y=30;o.add(l);const g=c.eventManager,m=["pointerdown","pointerup","mousedown","mouseup","pointerenter","pointerleave","click","dblclick","contextmenu"];for(const e of m)t.addEventListener(e,s=>{console.log(`box ${e}`)}),n.addEventListener(e,s=>{console.log(`box2 ${e}`)}),g.addEventListener(e,s=>{console.log(`global ${e}`)});
