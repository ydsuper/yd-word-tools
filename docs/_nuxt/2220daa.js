(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{384:function(t,e,n){"use strict";var r={get:function(t){return JSON.parse(window.localStorage.getItem(t))},set:function(t,e){window.localStorage.setItem(t,JSON.stringify(e))},remove:function(t){window.localStorage.removeItem(t)},clear:function(){window.localStorage.clear()}};e.a=r},385:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(141);var o=n(174),l=n(102);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||Object(o.a)(t)||Object(l.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},389:function(t,e,n){var content=n(405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(64).default)("46bbfeb0",content,!0,{sourceMap:!1})},404:function(t,e,n){"use strict";n(389)},405:function(t,e,n){var r=n(63)(!1);r.push([t.i,".handle-btns{position:absolute;left:50%;bottom:100px;transform:translateX(-50%)}.el-message{min-width:150px}.zh-btn{position:absolute;right:8px;bottom:6px;font-size:12px}",""]),t.exports=r},411:function(t,e,n){"use strict";n.r(e);var r=n(385),o=n(384),l={data:function(){return{list:{},filterList:[],mobile:!1,current:0,isCh:!0}},mounted:function(){this.isMobile(),this.list=this.$store.state.words||o.a.get("words");var t=o.a.get("checkedWords");t&&0!=t.length?this.handleData(t):(this.$message({message:"请先选择首字母哟~",type:"warning",duration:2e3}),this.$router.push("/")),window.addEventListener("keydown",this.handleKeyDown)},unmounted:function(){window.removeEventListener("keydown",this.handleKeyDown)},methods:{isMobile:function(){var t=navigator.userAgent.toLowerCase();return/ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(t)?this.mobile=!0:this.mobile=!1},handleData:function(t){console.log(t);for(var i=0;i<t.length;i++){var e,n=t[i];(e=this.filterList).push.apply(e,Object(r.a)(this.list[n]))}},handleReviews:function(t){this.current+=t,this.current<0&&(this.current=0),this.current>this.filterList.length-1&&(this.current=this.filterList.length-1)},handleKeyDown:function(t){var e=t.key;"ArrowLeft"==e?this.handleReviews(-1):"ArrowRight"==e&&this.handleReviews(1)},handleZh:function(){this.isCh=!this.isCh}}},c=(n(404),n(48)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:20}},[n("el-badge",{staticClass:"item",attrs:{value:t.current+1+"/"+t.filterList.length,type:"primary"}},[n("el-card",{attrs:{shadow:"always","body-style":{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",minWidth:"168px",minHeight:"140px",padding:"50px",fontSize:"20px"}}},[t._v("\n          "+t._s(t.filterList[t.current]&&t.filterList[t.current].en)+"\n          "),n("span",{directives:[{name:"show",rawName:"v-show",value:t.isCh,expression:"isCh"}]},[t._v(t._s(t.filterList[t.current]&&t.filterList[t.current].ch))])])],1)],1)],1),t._v(" "),n("el-button",{staticClass:"zh-btn",attrs:{circle:"",plain:""},on:{click:t.handleZh}},[t._v(t._s(t.isCh?"隐":"显"))]),t._v(" "),n("div",{staticClass:"handle-btns"},[n("div",[n("el-row",{attrs:{type:"flex",justify:"center",gutter:16}},[n("el-col",{attrs:{span:12}},[t.mobile?n("el-button",{attrs:{type:"success"},on:{click:function(e){return t.handleReviews(-1)}}},[t._v("👈 上一个")]):n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"也可使用左方向键",placement:"bottom-start"}},[n("el-button",{attrs:{type:"success"},on:{click:function(e){return t.handleReviews(-1)}}},[t._v("👈 上一个")])],1)],1),t._v(" "),n("el-col",{attrs:{span:12}},[t.mobile?n("el-button",{attrs:{type:"success"},on:{click:function(e){return t.handleReviews(1)}}},[t._v("👉 下一个")]):n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"也可使用右方向键",placement:"bottom-end"}},[n("el-button",{attrs:{type:"success"},on:{click:function(e){return t.handleReviews(1)}}},[t._v("👉 下一个")])],1)],1)],1)],1)])],1)}),[],!1,null,null,null);e.default=component.exports}}]);