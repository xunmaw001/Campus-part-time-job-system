(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/jianzhixinxi/add-or-update"],{"579c":function(e,n,i){},"57aa":function(e,n,i){"use strict";var a=i("579c"),t=i.n(a);t.a},"5cc6":function(e,n,i){"use strict";i.d(n,"b",(function(){return t})),i.d(n,"c",(function(){return r})),i.d(n,"a",(function(){return a}));var a={wPicker:function(){return Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(i.bind(null,"bea6"))}},t=function(){var e=this,n=e.$createElement;e._self._c},r=[]},"956b":function(e,n,i){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=t(i("a34a"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e,n,i,a,t,r,u){try{var o=e[r](u),c=o.value}catch(s){return void i(s)}o.done?n(c):Promise.resolve(c).then(a,t)}function u(e){return function(){var n=this,i=arguments;return new Promise((function(a,t){var u=e.apply(n,i);function o(e){r(u,a,t,o,c,"next",e)}function c(e){r(u,a,t,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([i.e("common/vendor"),i.e("components/w-picker/w-picker")]).then(function(){return resolve(i("bea6"))}.bind(null,i)).catch(i.oe)},c={data:function(){return{cross:"",ruleForm:{dianpumingcheng:"",gangweimingcheng:"",jianzhifenlei:"",tupian:"",zhanghao:"",dianjiadizhi:"",lianxidianhua:"",zhaopinneirong:"",fabushijian:""},jianzhifenleiOptions:[],jianzhifenleiIndex:0,user:{},ro:{dianpumingcheng:!1,gangweimingcheng:!1,jianzhifenlei:!1,tupian:!1,zhanghao:!1,dianjiadizhi:!1,lianxidianhua:!1,zhaopinneirong:!1,fabushijian:!1,clicktime:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var i=this;return u(a.default.mark((function t(){var r,u,o,c;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i.ruleForm.fabushijian=i.$utils.getCurDateTime(),r=e.getStorageSync("nowTable"),t.next=4,i.$api.session(r);case 4:return u=t.sent,i.user=u.data,i.ruleForm.zhanghao=i.user.zhanghao,i.ro.zhanghao=!0,i.ruleForm.lianxidianhua=i.user.lianxidianhua,i.ro.lianxidianhua=!0,t.next=12,i.$api.option("jianzhifenlei","jianzhifenlei",{});case 12:if(u=t.sent,i.jianzhifenleiOptions=u.data,i.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(i.ruleForm.refid=n.refid,i.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){t.next=22;break}return i.ruleForm.id=n.id,t.next=20,i.$api.info("jianzhixinxi",i.ruleForm.id);case 20:u=t.sent,i.ruleForm=u.data;case 22:if(i.cross=n.cross,!n.cross){t.next=70;break}o=e.getStorageSync("crossObj"),t.t0=a.default.keys(o);case 26:if((t.t1=t.t0()).done){t.next=70;break}if(c=t.t1.value,"dianpumingcheng"!=c){t.next=32;break}return i.ruleForm.dianpumingcheng=o[c],i.ro.dianpumingcheng=!0,t.abrupt("continue",26);case 32:if("gangweimingcheng"!=c){t.next=36;break}return i.ruleForm.gangweimingcheng=o[c],i.ro.gangweimingcheng=!0,t.abrupt("continue",26);case 36:if("jianzhifenlei"!=c){t.next=40;break}return i.ruleForm.jianzhifenlei=o[c],i.ro.jianzhifenlei=!0,t.abrupt("continue",26);case 40:if("tupian"!=c){t.next=44;break}return i.ruleForm.tupian=o[c],i.ro.tupian=!0,t.abrupt("continue",26);case 44:if("zhanghao"!=c){t.next=48;break}return i.ruleForm.zhanghao=o[c],i.ro.zhanghao=!0,t.abrupt("continue",26);case 48:if("dianjiadizhi"!=c){t.next=52;break}return i.ruleForm.dianjiadizhi=o[c],i.ro.dianjiadizhi=!0,t.abrupt("continue",26);case 52:if("lianxidianhua"!=c){t.next=56;break}return i.ruleForm.lianxidianhua=o[c],i.ro.lianxidianhua=!0,t.abrupt("continue",26);case 56:if("zhaopinneirong"!=c){t.next=60;break}return i.ruleForm.zhaopinneirong=o[c],i.ro.zhaopinneirong=!0,t.abrupt("continue",26);case 60:if("fabushijian"!=c){t.next=64;break}return i.ruleForm.fabushijian=o[c],i.ro.fabushijian=!0,t.abrupt("continue",26);case 64:if("clicktime"!=c){t.next=68;break}return i.ruleForm.clicktime=o[c],i.ro.clicktime=!0,t.abrupt("continue",26);case 68:t.next=26;break;case 70:i.styleChange();case 71:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},fabushijianConfirm:function(e){console.log(e),this.ruleForm.fabushijian=e.result,this.$forceUpdate()},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},jianzhifenleiChange:function(e){this.jianzhifenleiIndex=e.target.value,this.ruleForm.jianzhifenlei=this.jianzhifenleiOptions[this.jianzhifenleiIndex]},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(a.default.mark((function i(){var t,r,u,o,c,s,l,f,h,d;return a.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:if(n.ruleForm.dianpumingcheng){i.next=3;break}return n.$utils.msg("店铺名称不能为空"),i.abrupt("return");case 3:if(n.ruleForm.gangweimingcheng){i.next=6;break}return n.$utils.msg("岗位名称不能为空"),i.abrupt("return");case 6:if(n.ruleForm.jianzhifenlei){i.next=9;break}return n.$utils.msg("兼职分类不能为空"),i.abrupt("return");case 9:if(!n.ruleForm.lianxidianhua||n.$validate.isMobile(n.ruleForm.lianxidianhua)){i.next=12;break}return n.$utils.msg("联系电话应输入手机格式"),i.abrupt("return");case 12:if(!n.cross){i.next=28;break}if(o=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==o){i.next=28;break}if(s=e.getStorageSync("crossObj"),o.startsWith("[")){i.next=24;break}for(l in s)l==o&&(s[l]=c);return f=e.getStorageSync("crossTable"),i.next=22,n.$api.update("".concat(f),s);case 22:i.next=28;break;case 24:t=Number(e.getStorageSync("userid")),r=s["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 28:if(!r||!t){i.next=50;break}return n.ruleForm.crossuserid=t,n.ruleForm.crossrefid=r,h={page:1,limit:10,crossuserid:t,crossrefid:r},i.next=34,n.$api.list("jianzhixinxi",h);case 34:if(d=i.sent,!(d.data.total>=u)){i.next=40;break}return n.$utils.msg(e.getStorageSync("tips")),i.abrupt("return",!1);case 40:if(!n.ruleForm.id){i.next=45;break}return i.next=43,n.$api.update("jianzhixinxi",n.ruleForm);case 43:i.next=47;break;case 45:return i.next=47,n.$api.add("jianzhixinxi",n.ruleForm);case 47:n.$utils.msgBack("提交成功");case 48:i.next=58;break;case 50:if(!n.ruleForm.id){i.next=55;break}return i.next=53,n.$api.update("jianzhixinxi",n.ruleForm);case 53:i.next=57;break;case 55:return i.next=57,n.$api.add("jianzhixinxi",n.ruleForm);case 57:n.$utils.msgBack("提交成功");case 58:case"end":return i.stop()}}),i)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,i=n.getFullYear(),a=n.getMonth()+1,t=n.getDate();return"start"===e?i-=60:"end"===e&&(i+=2),a=a>9?a:"0"+a,t=t>9?t:"0"+t,"".concat(i,"-").concat(a,"-").concat(t)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,i("543d")["default"])},"962a":function(e,n,i){"use strict";(function(e){i("48d1");a(i("66fd"));var n=a(i("c16d"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,i("543d")["createPage"])},c16d:function(e,n,i){"use strict";i.r(n);var a=i("5cc6"),t=i("dbcb");for(var r in t)"default"!==r&&function(e){i.d(n,e,(function(){return t[e]}))}(r);i("57aa");var u,o=i("f0c5"),c=Object(o["a"])(t["default"],a["b"],a["c"],!1,null,"d86f392a",null,!1,a["a"],u);n["default"]=c.exports},dbcb:function(e,n,i){"use strict";i.r(n);var a=i("956b"),t=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(n,e,(function(){return a[e]}))}(r);n["default"]=t.a}},[["962a","common/runtime","common/vendor"]]]);