(()=>{var r={365:(r,e,t)=>{var n={"./american-express-gr.png":560,"./discover-gr.png":480,"./jcb-gr.png":956,"./mastercard-gr.png":751,"./mir-gr.png":83,"./visa-gr.png":838};function c(r){var e=s(r);return t(e)}function s(r){if(!t.o(n,r)){var e=new Error("Cannot find module '"+r+"'");throw e.code="MODULE_NOT_FOUND",e}return n[r]}c.keys=function(){return Object.keys(n)},c.resolve=s,r.exports=c,c.id=365},715:(r,e,t)=>{var n={"./american-express-gr.png":560,"./american-express.png":888,"./discover-gr.png":480,"./discover.png":936,"./jcb-gr.png":956,"./jcb.png":300,"./mastercard-gr.png":751,"./mastercard.png":437,"./mir-gr.png":83,"./mir.png":201,"./visa-gr.png":838,"./visa.png":370};function c(r){var e=s(r);return t(e)}function s(r){if(!t.o(n,r)){var e=new Error("Cannot find module '"+r+"'");throw e.code="MODULE_NOT_FOUND",e}return n[r]}c.keys=function(){return Object.keys(n)},c.resolve=s,r.exports=c,c.id=715},560:(r,e,t)=>{"use strict";r.exports=t.p+"d2b366ea17e3d60cf8a8.png"},888:(r,e,t)=>{"use strict";r.exports=t.p+"bf411cf58012db9e959e.png"},480:(r,e,t)=>{"use strict";r.exports=t.p+"257c470e7fa235b983a6.png"},936:(r,e,t)=>{"use strict";r.exports=t.p+"0f755ab08056b718a79f.png"},956:(r,e,t)=>{"use strict";r.exports=t.p+"156abf477b253363f4ff.png"},300:(r,e,t)=>{"use strict";r.exports=t.p+"b6b3633714f8e0bd1ae7.png"},751:(r,e,t)=>{"use strict";r.exports=t.p+"2af96c2ccda700b22f92.png"},437:(r,e,t)=>{"use strict";r.exports=t.p+"62c6869fe719ae8c8268.png"},83:(r,e,t)=>{"use strict";r.exports=t.p+"f73a9f7e6cea128cb357.png"},201:(r,e,t)=>{"use strict";r.exports=t.p+"ee68fa66dc6ee5f0e302.png"},838:(r,e,t)=>{"use strict";r.exports=t.p+"abf82b8d5ecb28100f9f.png"},370:(r,e,t)=>{"use strict";r.exports=t.p+"f4ba0de28943c6988593.png"}},e={};function t(n){var c=e[n];if(void 0!==c)return c.exports;var s=e[n]={exports:{}};return r[n](s,s.exports,t),s.exports}t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(r){if("object"==typeof window)return window}}(),t.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),(()=>{var r;t.g.importScripts&&(r=t.g.location+"");var e=t.g.document;if(!r&&e&&(e.currentScript&&"SCRIPT"===e.currentScript.tagName.toUpperCase()&&(r=e.currentScript.src),!r)){var n=e.getElementsByTagName("script");if(n.length)for(var c=n.length-1;c>-1&&(!r||!/^http(s?):/.test(r));)r=n[c--].src}if(!r)throw new Error("Automatic publicPath is not supported in this browser");r=r.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=r})(),(()=>{"use strict";document.querySelector(".validate-btn").addEventListener("click",(function(){var r=document.querySelector(".card-number").value.trim(),e=document.querySelector(".result");if(function(r){for(var e=r.replace(/\D/g,""),t=0,n=!1,c=e.length-1;c>=0;c--){var s=parseInt(e[c],10);n&&(s*=2)>9&&(s-=9),t+=s,n=!n}return t%10==0}(r)){var n=function(r){var e=r.replace(/\D/g,"");return/^4/.test(e)?"Visa":/^5[1-5]/.test(e)?"MasterCard":/^3[47]/.test(e)?"American Express":/^6(?:011|5)/.test(e)?"Discover":/^35(2[89]|[3-8][0-9])/.test(e)?"JCB":/^220[0-4]/.test(e)?"Mir":"Unknown"}(r);e.textContent="Valid card (".concat(n,")"),function(r){document.querySelectorAll(".card-icons img").forEach((function(e){var n=e.dataset.type;n.toLowerCase()===r.toLowerCase()?e.src=t(715)("./".concat(n.toLowerCase(),".png")):e.src=t(365)("./".concat(n.toLowerCase(),"-gr.png"))}))}(n)}else e.textContent="Invalid card number"}))})()})();
//# sourceMappingURL=main.js.map