(function(e){function t(t){for(var s,o,c=t[0],i=t[1],u=t[2],d=0,l=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);f&&f(t);while(l.length)l.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],s=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(s=!1)}s&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var s={},r={app:0},a=[];function o(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"88a5139a"}[e]+".js"}function c(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var s=new Promise((function(t,s){n=r[e]=[t,s]}));t.push(n[2]=s);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=o(e);var u=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+s+": "+a+")",u.name="ChunkLoadError",u.type=s,u.request=a,n[1](u)}r[e]=void 0}};var d=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},c.m=e,c.c=s,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(n,s,function(t){return e[t]}.bind(null,s));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0fd5":function(e,t,n){var s={"./af":"8206","./af.js":"8206","./ar":"cdac","./ar-dz":"7f26","./ar-dz.js":"7f26","./ar-kw":"8e88","./ar-kw.js":"8e88","./ar-ly":"cd65","./ar-ly.js":"cd65","./ar-ma":"e8d6","./ar-ma.js":"e8d6","./ar-sa":"a284","./ar-sa.js":"a284","./ar-tn":"64f7","./ar-tn.js":"64f7","./ar.js":"cdac","./az":"b139","./az.js":"b139","./be":"98e2","./be.js":"98e2","./bg":"a1a5","./bg.js":"a1a5","./bm":"4d0d","./bm.js":"4d0d","./bn":"e8ae","./bn.js":"e8ae","./bo":"bcf2","./bo.js":"bcf2","./br":"69f1","./br.js":"69f1","./bs":"24d1","./bs.js":"24d1","./ca":"3507","./ca.js":"3507","./cs":"d15f","./cs.js":"d15f","./cv":"7bfe","./cv.js":"7bfe","./cy":"1d35","./cy.js":"1d35","./da":"a019","./da.js":"a019","./de":"0cfa","./de-at":"edea","./de-at.js":"edea","./de-ch":"9aae","./de-ch.js":"9aae","./de.js":"0cfa","./dv":"1722","./dv.js":"1722","./el":"5390","./el.js":"5390","./en-au":"dad9","./en-au.js":"dad9","./en-ca":"6f13","./en-ca.js":"6f13","./en-gb":"6267","./en-gb.js":"6267","./en-ie":"80b1","./en-ie.js":"80b1","./en-il":"ad38","./en-il.js":"ad38","./en-in":"eb60","./en-in.js":"eb60","./en-nz":"39db","./en-nz.js":"39db","./en-sg":"c30d","./en-sg.js":"c30d","./eo":"1a30","./eo.js":"1a30","./es":"48a3","./es-do":"f306","./es-do.js":"f306","./es-us":"60bf","./es-us.js":"60bf","./es.js":"48a3","./et":"f891","./et.js":"f891","./eu":"a403","./eu.js":"a403","./fa":"ce14","./fa.js":"ce14","./fi":"fc14","./fi.js":"fc14","./fil":"f46e","./fil.js":"f46e","./fo":"2bf2","./fo.js":"2bf2","./fr":"c1e8","./fr-ca":"50a2","./fr-ca.js":"50a2","./fr-ch":"b087","./fr-ch.js":"b087","./fr.js":"c1e8","./fy":"4665","./fy.js":"4665","./ga":"b396","./ga.js":"b396","./gd":"056c","./gd.js":"056c","./gl":"efde","./gl.js":"efde","./gom-deva":"12ea","./gom-deva.js":"12ea","./gom-latn":"8e2c","./gom-latn.js":"8e2c","./gu":"533d","./gu.js":"533d","./he":"7520","./he.js":"7520","./hi":"d2f3","./hi.js":"d2f3","./hr":"7e79","./hr.js":"7e79","./hu":"148f","./hu.js":"148f","./hy-am":"6711","./hy-am.js":"6711","./id":"2b10","./id.js":"2b10","./is":"1feb","./is.js":"1feb","./it":"1b21","./it-ch":"8d2c","./it-ch.js":"8d2c","./it.js":"1b21","./ja":"926e","./ja.js":"926e","./jv":"5a78","./jv.js":"5a78","./ka":"5975","./ka.js":"5975","./kk":"cc93","./kk.js":"cc93","./km":"66e1","./km.js":"66e1","./kn":"5421","./kn.js":"5421","./ko":"1297","./ko.js":"1297","./ku":"16f8","./ku.js":"16f8","./ky":"3df9","./ky.js":"3df9","./lb":"c124","./lb.js":"c124","./lo":"20a5","./lo.js":"20a5","./lt":"c14a","./lt.js":"c14a","./lv":"c553","./lv.js":"c553","./me":"ae25","./me.js":"ae25","./mi":"6f56","./mi.js":"6f56","./mk":"c8fc","./mk.js":"c8fc","./ml":"752d","./ml.js":"752d","./mn":"f09e","./mn.js":"f09e","./mr":"0a56","./mr.js":"0a56","./ms":"55b6","./ms-my":"a9e9","./ms-my.js":"a9e9","./ms.js":"55b6","./mt":"624b","./mt.js":"624b","./my":"e256","./my.js":"e256","./nb":"e1d5","./nb.js":"e1d5","./ne":"761a","./ne.js":"761a","./nl":"a0f2","./nl-be":"5cb2","./nl-be.js":"5cb2","./nl.js":"a0f2","./nn":"4fda","./nn.js":"4fda","./oc-lnc":"ec3d","./oc-lnc.js":"ec3d","./pa-in":"2f2f","./pa-in.js":"2f2f","./pl":"317f","./pl.js":"317f","./pt":"5553","./pt-br":"a9ab","./pt-br.js":"a9ab","./pt.js":"5553","./ro":"db12","./ro.js":"db12","./ru":"7aa4","./ru.js":"7aa4","./sd":"e87b","./sd.js":"e87b","./se":"a296","./se.js":"a296","./si":"51ec","./si.js":"51ec","./sk":"608b","./sk.js":"608b","./sl":"b367","./sl.js":"b367","./sq":"f68f","./sq.js":"f68f","./sr":"0991","./sr-cyrl":"c577","./sr-cyrl.js":"c577","./sr.js":"0991","./ss":"cf76","./ss.js":"cf76","./sv":"0153","./sv.js":"0153","./sw":"cb6f","./sw.js":"cb6f","./ta":"8bfa","./ta.js":"8bfa","./te":"668b","./te.js":"668b","./tet":"eae7","./tet.js":"eae7","./tg":"70b1","./tg.js":"70b1","./th":"7180","./th.js":"7180","./tk":"4912","./tk.js":"4912","./tl-ph":"f8bb","./tl-ph.js":"f8bb","./tlh":"b026","./tlh.js":"b026","./tr":"371d","./tr.js":"371d","./tzl":"c744","./tzl.js":"c744","./tzm":"787a","./tzm-latn":"71e0","./tzm-latn.js":"71e0","./tzm.js":"787a","./ug-cn":"6b5c","./ug-cn.js":"6b5c","./uk":"8c0c","./uk.js":"8c0c","./ur":"519e","./ur.js":"519e","./uz":"7982","./uz-latn":"3137","./uz-latn.js":"3137","./uz.js":"7982","./vi":"ae22","./vi.js":"ae22","./x-pseudo":"1129","./x-pseudo.js":"1129","./yo":"b4bf","./yo.js":"b4bf","./zh-cn":"fdc4","./zh-cn.js":"fdc4","./zh-hk":"747d","./zh-hk.js":"747d","./zh-mo":"fe39","./zh-mo.js":"fe39","./zh-tw":"d3e0","./zh-tw.js":"d3e0"};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=a,e.exports=r,r.id="0fd5"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.showNav?n("SiteNav"):e._e(),n("router-view")],1)},a=[],o=(n("b64b"),n("5530")),c=n("2f62"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("section",[n("div",{staticClass:"col1"},[n("router-link",{attrs:{to:"/"}},[n("h3",[e._v("Harsha Sample App")])]),n("ul",{staticClass:"inline"},[n("li",[n("router-link",{attrs:{to:"/"}},[e._v("Dashboard")])],1),n("li",[n("router-link",{attrs:{to:"/settings"}},[e._v("Settings")])],1),n("li",[n("a",{on:{click:function(t){return e.logout()}}},[e._v("Logout")])])])],1)])])},u=[],d={methods:{logout:function(){this.$store.dispatch("logout")}}},f=d,l=n("2877"),m=Object(l["a"])(f,i,u,!1,null,null,null),p=m.exports,b={components:{SiteNav:p},computed:Object(o["a"])(Object(o["a"])({},Object(c["b"])(["userProfile"])),{},{showNav:function(){return Object.keys(this.userProfile).length>1}})},j=b,h=Object(l["a"])(j,r,a,!1,null,null,null),v=h.exports,g=(n("45fc"),n("d3b7"),n("8c4f")),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"dashboard"}},[n("transition",{attrs:{name:"fade"}},[e.showCommentModal?n("CommentModal",{attrs:{post:e.selectedPost},on:{close:function(t){return e.toggleCommentModal()}}}):e._e()],1),n("section",[n("div",{staticClass:"col1"},[n("div",{staticClass:"profile"},[n("h5",[e._v(e._s(e.userProfile.name))]),n("p",[e._v(e._s(e.userProfile.title))]),n("div",{staticClass:"create-post"},[n("p",[e._v("Create a post")]),n("form",{on:{submit:function(e){e.preventDefault()}}},[n("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:e.post.content,expression:"post.content",modifiers:{trim:!0}}],domProps:{value:e.post.content},on:{input:function(t){t.target.composing||e.$set(e.post,"content",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),n("button",{staticClass:"button",attrs:{disabled:""===e.post.content},on:{click:function(t){return e.createPost()}}},[e._v("Post")])])])])]),n("div",{staticClass:"col2"},[e.posts.length?n("div",e._l(e.posts,(function(t){return n("div",{key:t.id,staticClass:"post"},[n("h5",[e._v(e._s(t.userName))]),n("span",[e._v(e._s(e._f("formatDate")(t.createdOn)))]),n("p",[e._v(e._s(e._f("trimLength")(t.content)))]),n("ul",[n("li",[n("a",{on:{click:function(n){return e.toggleCommentModal(t)}}},[e._v("Comments "+e._s(t.comments))])]),n("li",[n("a",{on:{click:function(n){return e.likePost(t.id,t.likes)}}},[e._v("Likes"+e._s(t.likes))])]),n("li",[n("a",{on:{click:function(n){return e.viewPost(t)}}},[e._v("View Full Post")])])])])})),0):n("div",[n("p",{staticClass:"no-results"},[e._v("There are no posts")])])])])],1)},k=[],_=n("4e22"),y=n.n(_),P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"c-container"},[n("a",{on:{click:function(t){return e.$emit("close")}}},[e._v("close")]),n("p",[e._v("Add a comment")]),n("form",{on:{submit:function(e){e.preventDefault()}}},[n("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:e.comment,expression:"comment",modifiers:{trim:!0}}],domProps:{value:e.comment},on:{input:function(t){t.target.composing||(e.comment=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),n("button",{staticClass:"button",attrs:{disabled:""==e.comment},on:{click:function(t){return e.addComment()}}},[e._v("Add Comment")])])])},O=[],x=(n("b0c0"),n("96cf"),n("1da1")),C=n("dc59"),z={props:["post"],data:function(){return{comment:""}},methods:{addComment:function(){var e=this;return Object(x["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,C["b"].add({createdOn:new Date,content:e.comment,postId:e.post.id,userId:C["a"].currentUser.uid,userName:e.$store.state.userProfile.name});case 2:return t.next=4,C["d"].doc(e.post.id).update({comments:parseInt(e.post.comments)+1});case 4:e.$emit("close");case 5:case"end":return t.stop()}}),t)})))()}}},R=z,U=Object(l["a"])(R,P,O,!1,null,null,null),M=U.exports,$={components:{CommentModal:M},data:function(){return{post:{content:""},showCommentModal:!1,selectedPost:{}}},computed:Object(o["a"])({},Object(c["b"])(["userProfile","posts"])),methods:{createPost:function(){this.$store.dispatch("createPost",{content:this.post.content}),this.post.content=""},toggleCommentModal:function(e){this.showCommentModal=!this.showCommentModal,this.showCommentModal?this.selectedPost=e:this.selectedPost={}}},filters:{formatdate:function(e){if(!e)return"-";var t=e.toDate();return y()(t).fromNow()},trimLength:function(e){return e.length<200?e:"${val.substrinng(0,200)}..."}}},S=$,A=Object(l["a"])(S,w,k,!1,null,"3c1171f6",null),E=A.exports;s["a"].use(g["a"]);var I=[{path:"/",name:"Dashboard",component:E,meta:{requiresAuth:!0}},{path:"/login",name:"Login",component:function(){return n.e("about").then(n.bind(null,"a55b"))}},{path:"/settings",name:"Settings",component:function(){return n.e("about").then(n.bind(null,"26d3"))},meta:{requiresAuth:!0}}],N=new g["a"]({mode:"history",base:"/",routes:I});N.beforeEach((function(e,t,n){var s=e.matched.some((function(e){return e.meta.requiresAuth}));s&&!C["a"].currentUser?n("/login"):n()}));var D=N;n("4160"),n("159b");s["a"].use(c["a"]),C["d"].orderBy("createdOn","desc").onSnapshot((function(e){var t=[];e.forEach((function(e){var n=e.data();n.id=e.id,t.push(n)})),q.commit("setPosts",t)}));var L,q=new c["a"].Store({state:{userProfile:{},posts:[]},mutations:{setUserProfile:function(e,t){e.userProfile=t},setPerformingRequest:function(e,t){e.performingRequest=t},setPosts:function(e,t){e.posts=t}},actions:{login:function(e,t){return Object(x["a"])(regeneratorRuntime.mark((function n(){var s,r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=e.dispatch,n.next=3,C["a"].signInWithEmailAndPassword(t.email,t.password);case 3:r=n.sent,a=r.user,s("fetchUserProfile",a);case 6:case"end":return n.stop()}}),n)})))()},signup:function(e,t){return Object(x["a"])(regeneratorRuntime.mark((function n(){var s,r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=e.dispatch,n.next=3,C["a"].createUserWithEmailAndPassword(t.email,t.password);case 3:return r=n.sent,a=r.user,n.next=7,C["e"].doc(a.uid).set({name:t.name,title:t.title});case 7:s("fetchUserProfile",a);case 8:case"end":return n.stop()}}),n)})))()},fetchUserProfile:function(e,t){return Object(x["a"])(regeneratorRuntime.mark((function n(){var s,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=e.commit,n.next=3,C["e"].doc(t.uid).get();case 3:r=n.sent,s("setUserProfile",r.data()),"/login"===D.currentRoute.path&&D.push("/");case 6:case"end":return n.stop()}}),n)})))()},logout:function(e){return Object(x["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,C["a"].signOut();case 3:n("setUserProfile",{}),D.push("/login");case 5:case"end":return t.stop()}}),t)})))()},createPost:function(e,t){return Object(x["a"])(regeneratorRuntime.mark((function n(){var s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=e.state,n.next=3,C["d"].add({createdOn:new Date,content:t.content,userId:C["a"].currentUser.uid,userName:s.userProfile.name,comments:0,likes:0});case 3:case"end":return n.stop()}}),n)})))()},likePost:function(e){return Object(x["a"])(regeneratorRuntime.mark((function t(){var n,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=C["a"].currentUser.uid,s="${userId}_${post.id}",t.next=4,C["c"].doc(s).get();case 4:if(r=t.sent,!r.exists){t.next=7;break}return t.abrupt("return");case 7:return t.next=9,C["c"].doc(s).set({postId:e.id,userId:n});case 9:C["d"].doc(e.id).update({likes:e.likesCount+1});case 10:case"end":return t.stop()}}),t)})))()}}}),T=q;n("7e7d");s["a"].config.productionTip=!1,C["a"].onAuthStateChanged((function(e){L||(L=new s["a"]({router:D,store:T,render:function(e){return e(v)}}).$mount("#app")),e&&T.dispatch("fetchUserProfile",e)}))},"7e7d":function(e,t,n){},dc59:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"e",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return d}));var s=n("2839"),r=(n("5705"),n("10b8"),{apiKey:"AIzaSyCkMkRViH8pTLJV0dphOBGO_AoLPRGq9Y4",authDomain:"webappdemo1-8f485.firebaseapp.com",databaseURL:"https://webappdemo1-8f485.firebaseio.com",projectId:"webappdemo1-8f485",storageBucket:"webappdemo1-8f485.appspot.com",messagingSenderId:"913404090237",appId:"1:913404090237:web:5821bcfc70ed30380b1e14"});s["initializeApp"](r);var a=s["firestore"](),o=s["auth"](),c=a.collection("users"),i=a.collection("posts"),u=a.collection("comments"),d=a.collection("likes")}});
//# sourceMappingURL=app.0b0dd330.js.map