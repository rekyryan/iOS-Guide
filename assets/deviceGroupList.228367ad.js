import{_ as C,i as P,g as b,C as w,r as L,o as t,c as o,a as c,t as y,F as i,k as d,l as _,D as m,q as f,w as k,b as D,a3 as S,a4 as A}from"./app.5c5e11a4.js";String.prototype.fdn=function(){return this.replace(/ /g,"-").replace(/\//g,"%2F").replace(/ü/g,"u").replace(/²/g,"2").replace(/³/g,"3")};const O={data(){return{colCount:3,fm:P(),themeLocaleData:b().value.chart.deviceChart,isDarkMode:w()}},computed:{localePathPrefix(){const r=this.fm.lang;return r=="en_US"?"":`/${r}`},typeArr(){return Array.from(new Set(this.fm.groupList.map(r=>r.type)))},groupObj(){var r=[],n=[{label:"",types:["iPhone","iPad","iPad Air","iPad Pro","iPad mini","iPod touch"]}].map(a=>{a.types=a.types.filter(e=>this.typeArr.includes(e));for(const e of a.types)r.push(e);return a});const p=this.typeArr.filter(a=>!r.includes(a));return p.length>0&&n.push({label:"Other",types:p}),n},imageObj(){var r=[],n={};for(const e of this.fm.groupList)r.includes(e.type)||(r.push(e.type),n[e.type]={key:e.img.key,imageBool:e.img.count>0,dark:e.img.dark});const p={AirPods:"AirPods1,1",iPhone:"iPhone14,2"};for(const e in p)n.hasOwnProperty(e)&&(n[e].key=p[e]);var a={};for(const e in n)a[e]=n[e].imageBool?`https://img.appledb.dev/device@preview/${n[e].key}/0${this.isDarkMode&&n[e].dark?"_dark":""}.webp`:`/assets/images/logo${this.isDarkMode?"_dark":""}.webp`;return a}}},v=r=>(S("data-v-0d9b4d24"),r=r(),A(),r),x=v(()=>c("br",null,null,-1)),B={key:0},I=["src"],j=v(()=>c("hr",{class:"separator"},null,-1)),M=[j];function T(r,n,p,a,e,h){const g=L("router-link");return t(),o(i,null,[c("h2",null,y(e.themeLocaleData.getStarted.requiredReading.title),1),(t(!0),o(i,null,d(e.themeLocaleData.getStarted.requiredReading.content,s=>(t(),o("p",{key:s},y(s),1))),128)),x,(t(!0),o(i,null,d(h.groupObj,s=>(t(),o(i,{key:s},[s.label?(t(),o("h2",B,y(s.label),1)):_("",!0),(t(!0),o(i,null,d(Math.ceil(s.types.length/e.colCount),u=>(t(),o("table",{key:u},[c("tr",{style:m(`width: ${parseInt(100/e.colCount)}%;`)},[(t(!0),o(i,null,d(e.colCount,l=>(t(),o("th",{key:l,style:m({width:parseInt(100/e.colCount)+"%"})},[s.types[(u-1)*e.colCount+l-1]?(t(),f(g,{key:0,to:`${h.localePathPrefix}/get-started/select-${s.types[(u-1)*e.colCount+l-1].fdn().toLowerCase()}/`},{default:k(()=>[D(y(s.types[(u-1)*e.colCount+l-1]),1)]),_:2},1032,["to"])):_("",!0)],4))),128))],4),c("tr",null,[(t(!0),o(i,null,d(e.colCount,l=>(t(),o("td",{key:l},[s.types[(u-1)*e.colCount+l-1]?(t(),f(g,{key:0,to:`${h.localePathPrefix}/get-started/select-${s.types[(u-1)*e.colCount+l-1].fdn().toLowerCase()}/`},{default:k(()=>[c("img",{src:h.imageObj[s.types[(u-1)*e.colCount+l-1]],style:{"max-height":"11em"}},null,8,I)]),_:2},1032,["to"])):_("",!0)]))),128))]),c("tr",null,[(t(!0),o(i,null,d(e.colCount,l=>(t(),o("td",{key:l},M))),128))])]))),128))],64))),128))],64)}var q=C(O,[["render",T],["__scopeId","data-v-0d9b4d24"],["__file","deviceGroupList.vue"]]);export{q as default};
