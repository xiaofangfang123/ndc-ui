(function(t){function e(e){for(var a,i,c=e[0],s=e[1],l=e[2],u=0,f=[];u<c.length;u++)i=c[u],o[i]&&f.push(o[i][0]),o[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},o={index:0},r=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0a5522":"a1dd4932","chunk-a54e1296":"f921e0b5"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise(function(e,a){n=o[t]=[e,a]});e.push(n[2]=a);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(t),r=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,n[1](i)}o[t]=void 0}};var l=setTimeout(function(){r({type:"timeout",target:s})},12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("c31f")},"0292":function(t,e,n){},"0617":function(t,e,n){"use strict";var a=n("b2e2"),o=n.n(a);o.a},1549:function(t,e,n){},4105:function(t,e,n){"use strict";var a=n("0292"),o=n.n(a);o.a},"4d1c":function(t,e,n){"use strict";var a=n("c4d0"),o=n.n(a);o.a},"96ac":function(t,e,n){"use strict";var a=n("1549"),o=n.n(a);o.a},b2e2:function(t,e,n){},c31f:function(t,e,n){"use strict";n.r(e);n("dac5"),n("6e26"),n("9604"),n("df67");var a=n("6e6d"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page",attrs:{id:"app"}},[n("page-header"),n("div",{staticClass:"page-container"},[n("page-nav",{staticClass:"nav"}),n("router-view",{staticClass:"view"})],1),n("page-footer")],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"page-header",style:"index"===t.$route.name?"box-shadow:none":"box-shadow:0 10px 60px 0 rgba(29,29,31,0.07)"},[t._m(0)])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-header-container"},[n("a",{attrs:{href:"https://github.com/minteliuwm/ndc-ui",target:"__blank"}},[n("span",{staticClass:"name"},[t._v("NDC UI")])])])}],s=(n("0617"),n("17cc")),l={},u=Object(s["a"])(l,i,c,!1,null,null,null),d=u.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-footer"},[n("a",{staticClass:"page-footer__github-link",attrs:{href:"https://github.com/minteliuwm/ndc-ui",target:"_blank"}},[n("svg",{staticClass:"octicon octicon-mark-github",attrs:{height:"28",width:"28",viewBox:"0 0 16 16",version:"1.1","aria-hidden":"true"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])])])},h=[],p=(n("cea3"),{}),m=Object(s["a"])(p,f,h,!1,null,null,null),v=m.exports,g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-nav"},t._l(Object.keys(t.data),function(e){return n("div",{key:e,staticClass:"group-container"},[n("p",{staticClass:"page-nav-title"},[t._v(t._s(e))]),t._l(t.data[e],function(e){return n("div",{key:e.name,staticClass:"page-nav-items"},[e.desc?[e.name?n("router-link",{class:t.$route.name===e.name?"active":"",attrs:{to:{name:e.name}}},[t._v(t._s(e.desc))]):t._e()]:t._e()],2)})],2)}),0)},b=[],_=n("ee95"),y={data:function(){return{data:_}}},x=y,C=(n("4105"),Object(s["a"])(x,g,b,!1,null,null,null)),w=C.exports,E=(n("7364"),n("fb37"),n("f763"),n("1e6f")),k=n("f9d3"),$=n.n(k);a["a"].use(E["a"]);var j=[{path:"/",redirect:{name:"introduce"}}];Object.keys(_).forEach(function(t){j=j.concat(_[t])});var O=function t(e){e.forEach(function(e){e.items?(t(e.items),j=j.concat(e.items)):"site-index"===e.name?e.component=function(t){return n.e("chunk-2d0a5522").then(function(){return t(n("09cf"))}.bind(null,n)).catch(n.oe)}:e.component=function(t){return n.e("chunk-a54e1296").then(function(){return t(n("62cd")("./".concat(e.name,".md")))}.bind(null,n)).catch(n.oe)}})};O(j);var P=j.filter(function(t){return t.path}),H=new E["a"]({routes:P});H.afterEach(function(t){a["a"].nextTick(function(){var t=document.querySelectorAll("pre code:not(.hljs)");Array.prototype.forEach.call(t,$.a.highlightBlock)})});var B=H,S={name:"app",components:{PageHeader:d,PageFooter:v,PageNav:w},mounted:function(){"onhashchange"in window&&(window.onhashchange=function(t){var e=window.location.hash.substring(2);B.push({name:e})})}},N=S,T=(n("4d1c"),Object(s["a"])(N,o,r,!1,null,null,null)),A=T.exports,M=n("591a");a["a"].use(M["a"]);var q=new M["a"].Store({state:{},mutations:{},actions:{}}),I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"ndc-button",class:["ndc-button-"+t.theme],attrs:{disabled:t.disabled},on:{click:t.onClick}},[t.icon?n("i",{staticClass:"ndc-button-icon",class:t.icon?t.icon:""}):t._e(),t._t("default")],2)},L=[],D=(n("f301"),n("df99"),{name:"NdcButton",props:{disabled:{type:Boolean,default:!1},icon:{type:String,default:""},theme:{default:"default",validator:function(t){return["default","primary","active"].includes(t)}}},methods:{onClick:function(){this.disabled||this.$emit("click")}}}),J=D,R=Object(s["a"])(J,I,L,!1,null,null,null),V=R.exports;V.install=function(t){t.component(V.name,V)};var z=V,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i",{class:"ndc-icon-"+t.name})},U=[],G={name:"NdcIcon",props:{name:String}},K=G,Q=Object(s["a"])(K,F,U,!1,null,null,null),W=Q.exports;W.install=function(t){t.component(W.name,W)};var X=W,Y="0.1.8",Z=[z,X],tt=function(t){Z.forEach(function(e){t.use(e)})};"undefined"!==typeof window&&window.Vue&&tt(window.Vue);var et={install:tt,version:Y},nt=(n("d3fc"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-block",class:[{hover:t.hovering}],on:{mouseenter:function(e){t.hovering=!0},mouseleave:function(e){t.hovering=!1}}},[n("div",{staticClass:"source"},[t._t("source")],2),n("div",{ref:"meta",staticClass:"meta"},[t.$slots.default?n("div",{staticClass:"description"},[t._t("default")],2):t._e(),n("div",{staticClass:"highlight"},[t._t("highlight")],2)]),n("div",{ref:"control",staticClass:"demo-block-control",class:{"is-fixed":t.fixedControl},on:{click:function(e){t.isExpanded=!t.isExpanded}}},[n("span",[t._v(t._s(t.controlText))])])])}),at=[],ot={data:function(){return{hovering:!1,isExpanded:!1,fixedControl:!1,scrollParent:null}},methods:{scrollHandler:function(){var t=this.$refs.meta.getBoundingClientRect(),e=t.top,n=t.bottom,a=t.left;this.fixedControl=n>document.documentElement.clientHeight&&e+44<=document.documentElement.clientHeight,this.$refs.control.style.left=this.fixedControl?"".concat(a,"px"):"0"},removeScrollHandler:function(){this.scrollParent&&this.scrollParent.removeEventListener("scroll",this.scrollHandler)}},computed:{controlText:function(){return this.isExpanded?"隐藏代码":"显示代码"},codeArea:function(){return this.$el.getElementsByClassName("meta")[0]},codeAreaHeight:function(){return this.$el.getElementsByClassName("description").length>0?this.$el.getElementsByClassName("description")[0].clientHeight+this.$el.getElementsByClassName("highlight")[0].clientHeight+20:this.$el.getElementsByClassName("highlight")[0].clientHeight}},watch:{isExpanded:function(t){var e=this;if(this.codeArea.style.height=t?"".concat(this.codeAreaHeight+1,"px"):"0",!t)return this.fixedControl=!1,this.$refs.control.style.left="0",void this.removeScrollHandler();setTimeout(function(){e.scrollParent=document.querySelector(".page-component__scroll > .el-scrollbar__wrap"),e.scrollParent&&e.scrollParent.addEventListener("scroll",e.scrollHandler),e.scrollHandler()},200)}},mounted:function(){var t=this;this.$nextTick(function(){var e=t.$el.getElementsByClassName("highlight")[0];0===t.$el.getElementsByClassName("description").length&&(e.style.width="100%",e.borderRight="none")})},beforeDestroy:function(){this.removeScrollHandler()}},rt=ot,it=(n("96ac"),Object(s["a"])(rt,nt,at,!1,null,null,null)),ct=it.exports;a["a"].use(et),a["a"].component("demo-block",ct),a["a"].config.productionTip=!1,new a["a"]({router:B,store:q,render:function(t){return t(A)}}).$mount("#app")},c4d0:function(t,e,n){},cea3:function(t,e,n){"use strict";var a=n("d54d"),o=n.n(a);o.a},d3fc:function(t,e,n){},d54d:function(t,e,n){},ee95:function(t){t.exports={"开发指南":[{name:"site-index",path:"/"},{name:"introduce",path:"/introduce",desc:"介绍"},{name:"start",path:"/start",desc:"快速上手"},{name:"contribute",path:"/contribute",desc:"开发指南"}],"组件":[{desc:"Button 按钮",name:"button",path:"/button"},{desc:"Icon 图标",name:"icon",path:"/icon"}]}}});
//# sourceMappingURL=index.31f2a1ca.js.map