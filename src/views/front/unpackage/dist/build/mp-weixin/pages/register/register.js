(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"1f3c":function(e,n,t){},"3e0e":function(e,n,t){"use strict";t.r(n);var a=t("b7a3"),r=t("bbe1");for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);t("46d1"),t("dce1");var u,s=t("f0c5"),o=Object(s["a"])(r["default"],a["b"],a["c"],!1,null,"53296b5c",null,!1,a["a"],u);n["default"]=o.exports},"46d1":function(e,n,t){"use strict";var a=t("1f3c"),r=t.n(a);r.a},"7ec1":function(e,n,t){},aa952:function(e,n,t){"use strict";(function(e){t("48d1");a(t("66fd"));var n=a(t("3e0e"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},b7a3:function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return a}));var r=function(){var e=this,n=e.$createElement;e._self._c},i=[]},bbe1:function(e,n,t){"use strict";t.r(n);var a=t("f9e5"),r=t.n(a);for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);n["default"]=r.a},dce1:function(e,n,t){"use strict";var a=t("7ec1"),r=t.n(a);r.a},f9e5:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,a,r,i,u){try{var s=e[i](u),o=s.value}catch(l){return void t(l)}s.done?n(o):Promise.resolve(o).then(a,r)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var u=e.apply(n,t);function s(e){i(u,a,r,s,o,"next",e)}function o(e){i(u,a,r,s,o,"throw",e)}s(void 0)}))}}var s={data:function(){return{xueshengyonghuxingbieOptions:[],xueshengyonghuxingbieIndex:0,shangjiaxingbieOptions:[],shangjiaxingbieIndex:0,ruleForm:{},emailcode:"",tableName:""}},onLoad:function(){var n=this;return u(a.default.mark((function t(){var r;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:[],r=e.getStorageSync("loginTable"),n.tableName=r,"xueshengyonghu"==n.tableName&&(n.xueshengyonghuxingbieOptions="男,女".split(","),n.ruleForm.xingbie=n.xueshengyonghuxingbieOptions[0]),"shangjia"==n.tableName&&(n.shangjiaxingbieOptions="男,女".split(","),n.ruleForm.xingbie=n.shangjiaxingbieOptions[0]),n.styleChange();case 6:case"end":return t.stop()}}),t)})))()},methods:{xueshengyonghuxingbieChange:function(e){this.xueshengyonghuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.xueshengyonghuxingbieOptions[this.xueshengyonghuxingbieIndex]},shangjiaxingbieChange:function(e){this.shangjiaxingbieIndex=e.target.value,this.ruleForm.xingbie=this.shangjiaxingbieOptions[this.shangjiaxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=this;return u(a.default.mark((function n(){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.shoujihao||"xueshengyonghu"!=e.tableName){n.next=3;break}return e.$utils.msg("手机号不能为空"),n.abrupt("return");case 3:if("xueshengyonghu"!=e.tableName||!e.ruleForm.shoujihao||e.$validate.isMobile(e.ruleForm.shoujihao)){n.next=6;break}return e.$utils.msg("手机号应输入手机格式"),n.abrupt("return");case 6:if(e.ruleForm.mima||"xueshengyonghu"!=e.tableName){n.next=9;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 9:if("xueshengyonghu"!=e.tableName||e.ruleForm.mima==e.ruleForm.mima2){n.next=12;break}return e.$utils.msg("两次密码输入不一致"),n.abrupt("return");case 12:if(e.ruleForm.nicheng||"xueshengyonghu"!=e.tableName){n.next=15;break}return e.$utils.msg("昵称不能为空"),n.abrupt("return");case 15:if("xueshengyonghu"!=e.tableName||!e.ruleForm.youxiang||e.$validate.isEmail(e.ruleForm.youxiang)){n.next=18;break}return e.$utils.msg("邮箱应输入邮件格式"),n.abrupt("return");case 18:if(e.ruleForm.zhanghao||"shangjia"!=e.tableName){n.next=21;break}return e.$utils.msg("账号不能为空"),n.abrupt("return");case 21:if(e.ruleForm.mima||"shangjia"!=e.tableName){n.next=24;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 24:if("shangjia"!=e.tableName||e.ruleForm.mima==e.ruleForm.mima2){n.next=27;break}return e.$utils.msg("两次密码输入不一致"),n.abrupt("return");case 27:if("shangjia"!=e.tableName||!e.ruleForm.lianxidianhua||e.$validate.isMobile(e.ruleForm.lianxidianhua)){n.next=30;break}return e.$utils.msg("联系电话应输入手机格式"),n.abrupt("return");case 30:return n.next=32,e.$api.register("".concat(e.tableName),e.ruleForm,e.emailcode);case 32:e.$utils.msgBack("注册成功");case 34:case"end":return n.stop()}}),n)})))()}}};n.default=s}).call(this,t("543d")["default"])}},[["aa952","common/runtime","common/vendor"]]]);