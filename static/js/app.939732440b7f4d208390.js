webpackJsonp([12],{"2ZGM":function(t,n){},"3+in":function(t,n){},"47Sz":function(t,n,e){"use strict";n.a={name:"BigTitle",data:function(){return{}},mounted:function(){},methods:{}}},"9EeZ":function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h1",[t._t("default")],2),t._v(" "),e("hr")])},r=[],o={render:i,staticRenderFns:r};n.a=o},FeW0:function(t,n,e){"use strict";function i(t){e("2ZGM")}Object.defineProperty(n,"__esModule",{value:!0});var r=e("47Sz"),o=e("9EeZ"),a=e("VU/8"),u=i,s=a(r.a,o.a,!1,u,"data-v-49397a67",null);n.default=s.exports},HC0I:function(t,n){},IcnI:function(t,n,e){"use strict";var i=e("7+uW"),r=e("NYxO");i.a.use(r.a),n.a=new r.a.Store({})},M93x:function(t,n,e){"use strict";function i(t){e("3+in")}var r=e("xJD8"),o=e("b5KY"),a=e("VU/8"),u=i,s=a(r.a,o.a,!1,u,"data-v-121de037",null);n.a=s.exports},NHnr:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e("7+uW"),r=e("9JMe"),o=(e.n(r),e("M93x")),a=e("YaEn"),u=e("IcnI");Object(r.sync)(u.a,a.a),i.a.config.productionTip=!1,i.a.component("BigDisplay",function(){return e.e(10).then(e.bind(null,"RrWH"))}),i.a.component("BigTitle",function(){return new Promise(function(t){t()}).then(e.bind(null,"FeW0"))}),i.a.component("SubTitle",function(){return e.e(9).then(e.bind(null,"0LZo"))}),new i.a({el:"#app",router:a.a,template:"<App/>",components:{App:o.a}})},NtIL:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",[e("button",{on:{click:t.prev}},[t._v("Prev")]),t._v(" "),e("div",{staticClass:"slider"}),t._v(" "),e("button",{on:{click:t.next}},[t._v("Next")])])},r=[],o={render:i,staticRenderFns:r};n.a=o},YaEn:function(t,n,e){"use strict";var i=e("7+uW"),r=e("/ocq");i.a.use(r.a),n.a=new r.a({routes:[{path:"/",name:"Home",component:function(){return e.e(2).then(e.bind(null,"HXef"))}},{path:"/WhatIsVue",name:"WhatIsVue",component:function(){return e.e(5).then(e.bind(null,"T1yL"))}},{path:"/CurrentState",name:"CurrentState",component:function(){return e.e(0).then(e.bind(null,"OFb3"))}},{path:"/Why",name:"Why",component:function(){return e.e(4).then(e.bind(null,"472u"))}},{path:"/Concise",name:"Concise",component:function(){return e.e(7).then(e.bind(null,"kn8K"))}},{path:"/Freedom",name:"Freedom",component:function(){return e.e(1).then(e.bind(null,"H7zN"))}},{path:"/Docs",name:"Docs",component:function(){return e.e(3).then(e.bind(null,"j1MT"))}},{path:"/Fin",name:"Fin",component:function(){return e.e(6).then(e.bind(null,"DcxP"))}},{path:"*",name:"404",component:function(){return e.e(8).then(e.bind(null,"c5Mg"))}}]})},b5KY:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"position-relative"},[e("button",{staticClass:"edge edge-left",on:{click:t.prev}},[t._v("«")]),t._v(" "),e("button",{staticClass:"edge edge-right",on:{click:t.next}},[t._v("»")])]),t._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-1"}),t._v(" "),e("div",{staticClass:"col-10"},[e("div",{staticStyle:{background:"#fefefe",margin:"10px",padding:"20px",border:"1px solid #f8f8f8","min-height":"90vh","margin-bottom":"60px"}},[e("transition",{attrs:{name:"slideup",mode:"out-in"}},[e("router-view",{key:t.$route.path})],1)],1)])])]),t._v(" "),e("div",{staticClass:"fixed-bottom"})])},r=[],o={render:i,staticRenderFns:r};n.a=o},"bVQ/":function(t,n,e){"use strict";var i=e("Xxa5"),r=e.n(i),o=e("exGp"),a=e.n(o);n.a={name:"Navigation",data:function(){return{list:["Home","WhatIsVue","CurrentState","Why","Concise","Freedom","Docs","Fin"]}},mounted:function(){var t=this;return a()(r.a.mark(function n(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:case"end":return t.stop()}},n,t)}))()},methods:{goto:function(t){this.$router.push({name:t})},prev:function(){var t=this.list.indexOf(this.$router.currentRoute.name);t&&this.goto(this.list[t-1])},next:function(){var t=this.list.indexOf(this.$router.currentRoute.name);t+1<this.list.length&&this.goto(this.list[t+1])}}}},bwGm:function(t,n,e){"use strict";function i(t){e("HC0I")}var r=e("bVQ/"),o=e("NtIL"),a=e("VU/8"),u=i,s=a(r.a,o.a,!1,u,"data-v-44929783",null);n.a=s.exports},xJD8:function(t,n,e){"use strict";var i=e("bwGm"),r=e("FeW0");n.a={name:"app",components:{Navigation:i.a,BigTitle:r.default},data:function(){return{list:["Home","WhatIsVue","CurrentState","Why","Concise","Freedom","Docs","Fin"]}},methods:{prev:function(){var t=this.list.indexOf(this.$router.currentRoute.name);t&&this.$router.push({name:this.list[t-1]})},next:function(){var t=this.list.indexOf(this.$router.currentRoute.name);t+1<this.list.length&&this.$router.push({name:this.list[t+1]})}}}}},["NHnr"]);
//# sourceMappingURL=app.939732440b7f4d208390.js.map