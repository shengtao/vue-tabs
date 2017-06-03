!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueTabs=e():t.VueTabs=e()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var a=n[i]={i:i,l:!1,exports:{}};return t[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}var n={};return e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=5)}([function(t,e){t.exports=function(t,e,n,i){var a,o=t=t||{},r=typeof t.default;"object"!==r&&"function"!==r||(a=t,o=t.default);var s="function"==typeof o?o.options:o;if(e&&(s.render=e.render,s.staticRenderFns=e.staticRenderFns),n&&(s._scopeId=n),i){var c=Object.create(s.computed||null);Object.keys(i).forEach(function(t){var e=i[t];c[t]=function(){return e}}),s.computed=c}return{esModule:a,exports:o,options:s}}},function(t,e,n){var i=n(0)(n(3),n(8),null,null);i.options.__file="C:\\work\\Github\\vue-tabs\\src\\components\\TabContent.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] TabContent.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},function(t,e,n){n(7),n(6);var i=n(0)(n(4),n(9),null,null);i.options.__file="C:\\work\\Github\\vue-tabs\\src\\components\\VueTabs.vue",i.esModule&&Object.keys(i.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),i.options.functional&&console.error("[vue-loader] VueTabs.vue: functional components are not supported with templates, they should use render functions."),t.exports=i.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"v-tab",props:{title:{type:String,default:""},icon:{type:String,default:""},beforeChange:{type:Function},id:String,route:{type:[String,Object]},transitionName:String,transitionMode:String},computed:{isValidParent:function(){return"vue-tabs"===this.$parent.$options.name},hash:function(){return"#"+this.id}},data:function(){return{active:!1,validationError:null}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"vue-tabs",props:{activeTabColor:String,activeTextColor:String,textPosition:{type:String,default:"center"},type:{type:String,default:"tabs"},direction:{type:String,default:"horizontal"},centered:Boolean,startIndex:{type:Number,default:0}},data:function(){return{activeTabIndex:0,tabs:[]}},computed:{tabCount:function(){return this.tabs.length},isTabShape:function(){return"tabs"===this.type},isStacked:function(){return"vertical"===this.direction},classList:function(){return"nav "+(this.isTabShape?"nav-tabs":"nav-pills")+" "+(this.centered?"nav-justified":"")+" "+(this.isStacked?"nav-stacked":"")},stackedClass:function(){return this.isStacked?"stacked":""},activeTabStyle:function(){return{backgroundColor:this.activeTabColor,color:this.activeTextColor}},activeTitleColor:function(){return{color:this.activeTabColor}}},methods:{navigateToTab:function(t){var e=this;this.beforeTabChange(this.activeTabIndex,function(){e.changeTab(e.activeTabIndex,t)})},setLoading:function(t){this.loading=t,this.$emit("on-loading",t)},setValidationError:function(t,e){this.tabs[this.activeTabIndex].validationError=e,this.$emit("on-error",e),e&&t.$emit&&t.$emit("on-error",e)},validateBeforeChange:function(t,e,n){var i=this;if(this.setValidationError(e,null),t.then&&"function"==typeof t.then)this.setLoading(!0),t.then(function(t){i.setLoading(!1);var e=!0===t;i.executeBeforeChange(e,n)}).catch(function(t){i.setLoading(!1),i.setValidationError(e,t)});else{var a=!0===t;this.executeBeforeChange(a,n)}},executeBeforeChange:function(t,e){this.$emit("on-validate",t,this.activeTabIndex),t?e():this.tabs[this.activeTabIndex].validationError="error"},beforeTabChange:function(t,e){if(!this.loading){var n=this.tabs[t];if(n&&void 0!==n.beforeChange){var i=n.beforeChange();this.validateBeforeChange(i,n,e)}else e()}},changeTab:function(t,e){if(!(e<0||e>=this.tabCount)){var n=this.tabs[t],i=this.tabs[e];n&&(n.active=!1,i&&(i.active=!0)),this.activeTabIndex=e,this.$emit("tab-change",e,i,n),this.tryChangeRoute(i)}},tryChangeRoute:function(t){this.$router&&t&&t.route&&this.$router.push(t.route)}},mounted:function(){if(this.tabs=this.$children.filter(function(t){return"v-tab"===t.$options.name}),this.tabs.length>0&&0===this.startIndex){var t=this.tabs[this.activeTabIndex];t.active=!0,this.tryChangeRoute(t)}if(this.startIndex<this.tabs.length){var e=this.tabs[this.startIndex];this.activeTabIndex=this.startIndex,e.active=!0,this.tryChangeRoute(this.tabs[this.startIndex])}else console.warn("Prop startIndex set to "+this.startIndex+" is greater than the number of tabs - "+this.tabs.length+". Make sure that the starting index is less than the number of tabs registered")}}},function(t,e,n){t.exports={VueTabs:n(2),VTab:n(1),install:function(e){e.component("vue-tabs",t.exports.VueTabs),e.component("v-tab",t.exports.VTab)}}},function(t,e){},function(t,e){},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("section",{staticClass:"tab-container",attrs:{role:"tabpanel",id:t.hash,"aria-hidden":!t.active}},[t._t("default")],2)},staticRenderFns:[]},t.exports.render._withStripped=!0},function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-tabs",class:t.stackedClass},[n("ul",{class:t.classList,attrs:{role:"tablist"}},[t._l(t.tabs,function(e,i){return t._t("tab",[n("li",{key:e,staticClass:"tab",class:{active:e.active},attrs:{role:"presentation"}},["top"===t.textPosition?n("span",{staticClass:"title title_top",style:e.active?t.activeTitleColor:{}},[t._v("\n            "+t._s(e.title)+"\n        ")]):t._e(),t._v(" "),n("a",{style:e.active?t.activeTabStyle:{},attrs:{href:"#"+e.id,"aria-selected":e.active,"aria-controls":"#"+e.id,role:"tab"},on:{click:function(e){e.preventDefault(),t.navigateToTab(i)}}},[n("i",{class:e.icon},["center"===t.textPosition?n("span",[t._v("\n               "+t._s(e.title)+"\n            ")]):t._e()])]),t._v(" "),"bottom"===t.textPosition?n("span",{staticClass:"title title_bottom",style:e.active?t.activeTitleColor:{}},[t._v("\n            "+t._s(e.title)+"\n        ")]):t._e()])],{tab:e,index:i,clickHandler:t.navigateToTab})})],2),t._v(" "),n("div",{staticClass:"tab-content"},[t._t("default")],2)])},staticRenderFns:[]},t.exports.render._withStripped=!0}])});