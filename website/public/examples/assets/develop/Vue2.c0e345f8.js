import{J as n,L as i,a as r}from"../Vis.es.638ec8a7.js";import{g as o}from"../vue.esm.browser.min.816a6d7c.js";import{c as d}from"../vue3Support.5ea10b76.js";import"../three.8f03b6f1.js";import"../vis-three.9866afe7.js";const s=o.observable(JSON.parse(JSON.stringify(d),n.parse)),a=new i(o.observable({}));new o({el:"#app",data(){return{lightMap:a.getData()}},methods:{addPositionY(e){e.position.y+=5}},mounted(){const e=document.createElement("div");e.innerText="\u6B63\u5728\u52A0\u8F7D...",e.className="loadingDom",document.body.appendChild(e);const t=new r({lightDataSupport:a}).setDom(document.getElementById("three")).setStats(!0).setSize();t.loaderManager.setPath("/vis-three/examples/"),t.loadConfigAsync(s).then(m=>{document.body.removeChild(e),t.setScene(s.scene.Scene.vid).play(),this.$forceUpdate()})}});
