import{C as d,D as m,g as t}from"../Vis.es.0345dbb6.js";import"../three.8f03b6f1.js";import"../vis-three.9866afe7.js";new d({width:256,height:256}).draw(e=>{e.textBaseline="middle",e.textAlign="center",e.fillStyle="rgb(206, 42, 230)",e.font=" bold 52px \u5FAE\u8F6F\u96C5\u9ED1",e.fillText("PRESSURE",128,128)}).preview();const n=new m().install("Stats").complete().setDom(document.getElementById("app")).setSize().setStats(!0),a=t("AmbientLight",{color:"rgb(100, 100, 100)"}),r=t("MeshStandardMaterial"),s=t("BoxGeometry",{width:20,height:10,depth:20}),i=t("Scene",{children:[a.vid]});n.applyConfig(a,r,s,i);n.setScene(i.vid).play();let l=0;document.getElementById("object").onclick=()=>{for(let e=0;e<100;e+=1){const o=t("Mesh",{material:r.vid,geometry:s.vid,position:{x:Math.random()*(500+1)-250,y:Math.random()*(500+1)-250,z:Math.random()*(500+1)-250},matrixAutoUpdate:!1});n.applyConfig(o),i.children.push(o.vid)}l+=1,document.getElementById("button-group").children[0].innerHTML=`total: ${l*100}`};