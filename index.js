(function(){"use strict";const b="";function u(a,t,n,h,o,s,c,g){var e=typeof a=="function"?a.options:a;t&&(e.render=t,e.staticRenderFns=n,e._compiled=!0),h&&(e.functional=!0),s&&(e._scopeId="data-v-"+s);var r;if(c?(r=function(i){i=i||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!i&&typeof __VUE_SSR_CONTEXT__<"u"&&(i=__VUE_SSR_CONTEXT__),o&&o.call(this,i),i&&i._registeredComponents&&i._registeredComponents.add(c)},e._ssrRegister=r):o&&(r=g?function(){o.call(this,(e.functional?this.parent:this).$root.$options.shadowRoot)}:o),r)if(e.functional){e._injectStyles=r;var k=e.render;e.render=function(C,_){return r.call(_),k(C,_)}}else{var l=e.beforeCreate;e.beforeCreate=l?[].concat(l,r):[r]}return{exports:a,options:e}}const f={computed:{captionMarks(){return this.field("caption",{marks:!0}).marks},maxWidth(){return this.content.size||!1},src(){return this.content.image[0]&&this.content.image[0].url?this.content.image[0].url:!1}}};var p=function(){var t=this,n=t._self._c;return t.src?n("div",{on:{click:t.open}},[n("div",{class:["r-image-wrapper",t.maxWidth]},[n("img",{attrs:{src:t.src,alt:t.content.alt}})]),t.content.caption?n("figcaption",[n("k-writer",{attrs:{value:t.content.caption}})],1):t._e()]):n("div",[n("button",{staticClass:"k-button k-block-figure-empty",attrs:{type:"button"},on:{click:t.open}},[n("k-icon",{attrs:{type:"image"}}),n("span",{staticClass:"k-button-text"},[t._v(" Sélectionnez une image … ")])],1)])},d=[],m=u(f,p,d,!1,null,null,null,null);const v=m.exports;panel.plugin("baptiste/file-block",{blocks:{image:v}})})();
