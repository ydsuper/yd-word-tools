(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{384:function(t,e,r){"use strict";var n={get:function(t){return JSON.parse(window.localStorage.getItem(t))},set:function(t,e){window.localStorage.setItem(t,JSON.stringify(e))},remove:function(t){window.localStorage.removeItem(t)},clear:function(){window.localStorage.clear()}};e.a=n},387:function(t,e,r){var content=r(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(64).default)("4df87b8c",content,!0,{sourceMap:!1})},398:function(t,e,r){"use strict";var n=r(5),o=r(49),l=r(399),c=r(248),d=r(4),f=1..toFixed,v=Math.floor,h=function(t,e,r){return 0===e?r:e%2==1?h(t,e-1,r*t):h(t*t,e/2,r)},m=function(data,t,e){for(var r=-1,n=e;++r<6;)n+=t*data[r],data[r]=n%1e7,n=v(n/1e7)},_=function(data,t){for(var e=6,r=0;--e>=0;)r+=data[e],data[e]=v(r/t),r=r%t*1e7},x=function(data){for(var t=6,s="";--t>=0;)if(""!==s||0===t||0!==data[t]){var e=String(data[t]);s=""===s?e:s+c.call("0",7-e.length)+e}return s};n({target:"Number",proto:!0,forced:f&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!d((function(){f.call({})}))},{toFixed:function(t){var e,r,n,d,f=l(this),v=o(t),data=[0,0,0,0,0,0],w="",y="0";if(v<0||v>20)throw RangeError("Incorrect fraction digits");if(f!=f)return"NaN";if(f<=-1e21||f>=1e21)return String(f);if(f<0&&(w="-",f=-f),f>1e-21)if(r=(e=function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}(f*h(2,69,1))-69)<0?f*h(2,-e,1):f/h(2,e,1),r*=4503599627370496,(e=52-e)>0){for(m(data,0,r),n=v;n>=7;)m(data,1e7,0),n-=7;for(m(data,h(10,n,1),0),n=e-1;n>=23;)_(data,1<<23),n-=23;_(data,1<<n),m(data,1,1),_(data,2),y=x(data)}else m(data,0,r),m(data,1<<-e,0),y=x(data)+c.call("0",v);return y=v>0?w+((d=y.length)<=v?"0."+c.call("0",v-d)+y:y.slice(0,d-v)+"."+y.slice(d-v)):w+y}})},399:function(t,e){var r=1..valueOf;t.exports=function(t){return r.call(t)}},400:function(t,e,r){"use strict";r(387)},401:function(t,e,r){var n=r(63)(!1);n.push([t.i,".cheer-box{margin-top:24px}.cheer-box .glory{font-size:28px;color:red}",""]),t.exports=n},409:function(t,e,r){"use strict";r.r(e);r(84),r(398);var n=r(384),o={data:function(){return{details:{}}},mounted:function(){var t=n.a.get("stime"),e=n.a.get("etime");this.handleTime(e-t),this.handleGrade()},methods:{handleTime:function(t){console.log(t);var s=t/1e3,e=parseInt(s/60);e=e>10?e:"0"+e,s=(s=parseInt(s%60))>10?s:"0"+s,this.$set(this.details,"time","".concat(e,":").concat(s))},handleGrade:function(){var t=n.a.get("totalNum"),e=n.a.get("reviews");console.log(t,e);var r=100-(+e.length/t*100).toFixed(1);this.$set(this.details,"ratio",r);var o=this.calcGrade(r);this.$set(this.details,"grade",o)},calcGrade:function(){return this.details.ratio>=99?"超神选手":this.details.ratio>90?"荣耀选手":this.details.ratio>80?"钻石选手":this.details.ratio>70?"铂金选手":this.details.ratio>60?"黄金选手":this.details.ratio>50?"白银选手":"青铜选手"}}},l=(r(400),r(48)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("el-descriptions",{staticClass:"margin-top",attrs:{title:"本次成绩单",column:2,border:""}},[r("template",{slot:"extra"},[r("nuxt-link",{attrs:{to:"/review"}},[r("el-button",{attrs:{type:"primary",size:"small"}},[t._v("复习")])],1)],1),t._v(" "),r("el-descriptions-item",[r("template",{slot:"label"},[r("i",{staticClass:"el-icon-user"}),t._v("\n        用户名\n      ")]),t._v("\n      admin\n    ")],2),t._v(" "),r("el-descriptions-item",[r("template",{slot:"label"},[r("i",{staticClass:"el-icon-time"}),t._v("\n        用时\n      ")]),t._v("\n      "+t._s(t.details.time||"00:00")+"\n    ")],2),t._v(" "),r("el-descriptions-item",[r("template",{slot:"label"},[r("i",{staticClass:"el-icon-s-data"}),t._v("\n        巩固率\n      ")]),t._v("\n      "+t._s(t.details.ratio||0)+"%\n    ")],2),t._v(" "),r("el-descriptions-item",[r("template",{slot:"label"},[r("i",{staticClass:"el-icon-tickets"}),t._v("\n        成绩\n      ")]),t._v(" "),r("el-tag",{attrs:{size:"small"}},[t._v(t._s(t.details.grade||"计算中"))])],2)],2),t._v(" "),r("div",{staticClass:"cheer-box"},[r("el-card",{attrs:{"body-style":{padding:"10px"}}},[r("img",{staticStyle:{width:"100%",display:"block"},attrs:{src:"cheer.jpg",alt:""}}),t._v(" "),r("div",{staticStyle:{padding:"14px"}},[r("span",{staticClass:"glory"},[t._v("为了荣耀！！！")])])])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);