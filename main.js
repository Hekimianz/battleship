(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([n.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* ******************************************** End of CSS Reset ******************************************** */\n/* ******************************************** End of CSS Reset ******************************************** */\n/* ******************************************** End of CSS Reset ******************************************** */\n\n/* green: #61C611 */\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  color: #daffba;\n}\n\n#wrapper {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n}\n\nh1 {\n  margin-bottom: 30px;\n  font-size: 4em;\n  font-weight: bold;\n  color: white;\n}\n\n#board1,\n#board2 {\n  width: 300px;\n  height: 300px;\n  display: flex;\n  margin-top: 30px;\n  flex-wrap: wrap;\n}\n\n.cell {\n  width: 25px;\n  border: 1px solid #61c611;\n}\n\n.col {\n  width: 27px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#logoImg {\n  margin-top: 200px;\n  height: 3.5em;\n  margin-bottom: 10px;\n}\n\n.playBtn {\n  background-color: initial;\n  background-image: linear-gradient(-180deg, #61c611, #346b06);\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;\n  color: #ffffff;\n  cursor: pointer;\n  display: inline-block;\n  height: 44px;\n  outline: 0;\n  overflow: hidden;\n  padding: 0 20px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  width: 100px;\n  border: 0;\n  font-size: 1.5em;\n}\n\n.playBtn:hover {\n  background: #346b06;\n}\n',""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var h=t(p),u={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==h)e[h].references++,e[h].updater(u);else{var f=o(u,r);r.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}a.push(p)}return a}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=t(i[a]);e[s].references--}for(var c=r(n,o),l=0;l<i.length;l++){var d=t(i[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return n[r](i,i.exports,t),i.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),i=t(569),a=t.n(i),s=t(565),c=t.n(s),l=t(216),d=t.n(l),p=t(589),h=t.n(p),u=t(426),f={};f.styleTagTransform=h(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=d(),e()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals;const b=t.p+"4e4104bf7fbf8e13bb7e.svg";({init(){this.wrapper=document.createElement("div"),this.wrapper.setAttribute("id","wrapper"),document.body.appendChild(this.wrapper),this.homePage()},gamePage(){this.boardsWrap=document.createElement("div"),this.boardsWrap.setAttribute("id","boardsWrap"),this.board1=document.createElement("div"),this.board1.setAttribute("id","board1"),this.board2=document.createElement("div"),this.board2.setAttribute("id","board2"),this.createGrid(this.board1),this.createGrid(this.board2),this.wrapper.appendChild(this.boardsWrap),this.boardsWrap.append(this.board1,this.board2)},createGrid(n){const e=[1,2,3,4,5,6,7,8,9,10];for(let t=1;t<122;t+=1)this.cell=document.createElement("div"),1===t?this.cell.classList.add("col"):t>=2&&t<=11?(this.cell.classList.add("col"),this.cell.innerText="-abcdefghij".charAt(t-1).toUpperCase()):12===t||23===t||34===t||45===t||56===t||67===t||78===t||89===t||100===t||111===t?(this.cell.classList.add("col"),this.cell.innerText=e[0],e.shift()):this.cell.classList.add("cell"),n.appendChild(this.cell)},homePage(){this.logo=document.createElement("img"),this.logo.src=b,this.logo.id="logoImg",this.header=document.createElement("h1"),this.header.innerText="Battleship",this.playBtn=document.createElement("button"),this.playBtn.innerText="Play",this.playBtn.classList.add("playBtn"),this.playBtn.addEventListener("click",(()=>{this.clearPage(),this.gamePage()})),this.wrapper.append(this.logo,this.header,this.playBtn)},clearPage(){for(;this.wrapper.firstChild;)this.wrapper.removeChild(this.wrapper.lastChild)}}).init()})()})();