(function(){"use strict";const b="";function _(a,t,n,v,r,o,c,g){var e=typeof a=="function"?a.options:a;t&&(e.render=t,e.staticRenderFns=n,e._compiled=!0),v&&(e.functional=!0),o&&(e._scopeId="data-v-"+o);var s;if(c?(s=function(i){i=i||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!i&&typeof __VUE_SSR_CONTEXT__<"u"&&(i=__VUE_SSR_CONTEXT__),r&&r.call(this,i),i&&i._registeredComponents&&i._registeredComponents.add(c)},e._ssrRegister=s):r&&(s=g?function(){r.call(this,(e.functional?this.parent:this).$root.$options.shadowRoot)}:r),s)if(e.functional){e._injectStyles=s;var k=e.render;e.render=function(C,u){return s.call(u),k(C,u)}}else{var l=e.beforeCreate;e.beforeCreate=l?[].concat(l,s):[s]}return{exports:a,options:e}}const f={computed:{captionMarks(){return this.field("caption",{marks:!0}).marks},alignement(){return"r-align-"+this.content.alignement||"r-align-left"},size(){return this.content.size||!1},maxwidthcustom(){return this.content.size=="custom"&&this.content.customsizevalue+this.content.customsizeunit||!1},src(){return this.content.image[0]&&this.content.image[0].url?this.content.image[0].url:!1}}};var m=function(){var t=this,n=t._self._c;return t.src?n("div",{class:[t.alignement],on:{click:t.open}},[n("div",[n("div",{class:["r-image-wrapper",t.size],style:{maxWidth:t.maxwidthcustom}},[n("img",{attrs:{src:t.src,alt:t.content.alt}})]),t.content.caption?n("figcaption",[n("k-writer",{attrs:{value:t.content.caption}})],1):t._e()])]):n("div",[n("button",{staticClass:"k-button k-block-figure-empty",attrs:{type:"button"},on:{click:t.open}},[n("k-icon",{attrs:{type:"image"}}),n("span",{staticClass:"k-button-text"},[t._v(" Sélectionnez une image … ")])],1)])},p=[],d=_(f,m,p,!1,null,null,null,null);const h=d.exports;panel.plugin("baptiste/file-block",{blocks:{image:h}})})();
