import{f as r}from"../Vis.es.638ec8a7.js";import{M as d,g as m,m as p,n as g,i as w,L as h,v as y,s as M,o as b}from"../three.8f03b6f1.js";import"../vis-three.9866afe7.js";const o=new r().install("ObjectHelper").install("Selection").complete().setDom(document.getElementById("app")).setSize().play(),e=o.scene,t=new d(new m(10,10,10),new p({color:"rgb(255, 105, 100)"}));t.position.x=10;e.add(t);const i=new g("rgb(255, 255, 255)",1,30,0);i.position.y=20;e.add(i);const f=new w(t.geometry,new h({color:"yellow"}));e.add(f);const a=new y(t.geometry,new M({color:"blue"}));a.position.x=-10;e.add(a);const s=new b(180/Math.PI*45,16/9,5,70);s.position.set(0,20,50);s.lookAt(0,0,0);e.add(s);o.addEventListener("selected",l=>{let n="";l.objects.forEach(c=>{n+=`<div class="selected-elem">${c.uuid}</div>`}),document.getElementById("selected").innerHTML=n});
