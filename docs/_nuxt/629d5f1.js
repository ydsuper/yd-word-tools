(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{383:function(e,t,n){"use strict";var o={get:function(e){return JSON.parse(window.localStorage.getItem(e))},set:function(e,t){window.localStorage.setItem(e,JSON.stringify(t))},remove:function(e){window.localStorage.removeItem(e)},clear:function(){window.localStorage.clear()}};t.a=o},389:function(e,t,n){var content=n(406);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(64).default)("1b7833da",content,!0,{sourceMap:!1})},405:function(e,t,n){"use strict";n(389)},406:function(e,t,n){var o=n(63)(!1);o.push([e.i,".action-home .el-checkbox-group{margin-top:30px}.action-home .el-checkbox-group>.el-checkbox{margin-right:10px}.action-home .el-checkbox-group>.el-checkbox>.el-checkbox__label{padding-left:4px}@media only screen and (min-width:376px){.action-home .el-checkbox-group>.el-checkbox>.el-checkbox__label{padding-left:4px;font-size:16px}}.action-box{position:absolute;left:50%;bottom:100px;transform:translateX(-50%)}.el-message{min-width:150px}.mode-btn{position:absolute;right:12px;bottom:8px;font-size:12px}",""]),e.exports=o},411:function(e,t,n){"use strict";n.r(t);var o=n(8),c=(n(67),n(383)),r=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],d=["C","P","S"],l=["A","B","D","E","R","M","I","F","T"],h=["G","H","O","N","U","V","W","L"],k=["J","K","Q","X","Y","Z"],m={data:function(){return{checkAll:!1,checkedWords:[],words:r,ws1:d,ws2:l,ws3:h,ws4:k,isIndeterminate:!0,mode:1}},mounted:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.mode=c.a.get("mode")||1,n=c.a.get("checkedWords")||[],e.checkedWords=n,t.next=5,e.getWords();case 5:o=t.sent,c.a.set("words",o),window.addEventListener("keydown",e.handleKeyDown);case 8:case"end":return t.stop()}}),t)})))()},destroyed:function(){window.removeEventListener("keydown",this.handleKeyDown)},methods:{getWords:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!c.a.get("words")){t.next=4;break}n=c.a.get("words"),t.next=9;break;case 4:return t.next=6,e.$axios.get("/words.json");case 6:o=t.sent,data=o.data,n=data;case 9:return e.$store.commit("setWords",n),t.abrupt("return",n);case 11:case"end":return t.stop()}}),t)})))()},handleCheckAllChange:function(e){this.checkedWords=e?r:[],this.isIndeterminate=!1,c.a.set("checkedWords",this.checkedWords)},handlecheckedWordsChange:function(e){var t=e.length;this.checkAll=t===this.words.length,this.isIndeterminate=t>0&&t<this.words.length,c.a.set("checkedWords",e)},handleKeyDown:function(e){"Enter"==e.key&&this.handleAction()},handleAction:function(){0!=this.checkedWords.length?1==this.mode?this.$router.push("/action"):2==this.mode&&this.$router.push("/word"):this.$message({message:"请先选择首字母哟~",type:"warning",duration:2e3})},handleMode:function(){this.mode=1==this.mode?2:1,c.a.set("mode",this.mode)}}},f=(n(405),n(48)),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"action-home"},[n("p",[e._v("选择首字母")]),e._v(" "),n("el-checkbox",{attrs:{indeterminate:e.isIndeterminate},on:{change:e.handleCheckAllChange},model:{value:e.checkAll,callback:function(t){e.checkAll=t},expression:"checkAll"}},[e._v("全选")]),e._v(" "),n("div",{staticStyle:{margin:"15px 0"}}),e._v(" "),n("el-checkbox-group",{on:{change:e.handlecheckedWordsChange},model:{value:e.checkedWords,callback:function(t){e.checkedWords=t},expression:"checkedWords"}},e._l(e.ws1,(function(t){return n("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),1),e._v(" "),n("el-checkbox-group",{on:{change:e.handlecheckedWordsChange},model:{value:e.checkedWords,callback:function(t){e.checkedWords=t},expression:"checkedWords"}},e._l(e.ws2,(function(t){return n("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),1),e._v(" "),n("el-checkbox-group",{on:{change:e.handlecheckedWordsChange},model:{value:e.checkedWords,callback:function(t){e.checkedWords=t},expression:"checkedWords"}},e._l(e.ws3,(function(t){return n("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),1),e._v(" "),n("el-checkbox-group",{on:{change:e.handlecheckedWordsChange},model:{value:e.checkedWords,callback:function(t){e.checkedWords=t},expression:"checkedWords"}},e._l(e.ws4,(function(t){return n("el-checkbox",{key:t,attrs:{label:t}},[e._v(e._s(t))])})),1),e._v(" "),n("el-row",{staticClass:"action-box"},[n("el-button",{attrs:{type:"primary",round:""},on:{click:e.handleAction}},[e._v("开始")])],1),e._v(" "),n("el-button",{staticClass:"mode-btn",attrs:{plain:""},on:{click:e.handleMode}},[e._v(e._s(1==e.mode?"测试":"背词"))])],1)}),[],!1,null,null,null);t.default=component.exports}}]);