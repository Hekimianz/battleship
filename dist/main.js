(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>o});var l=t(81),r=t.n(l),i=t(645),a=t.n(i)()(r());a.push([e.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* ******************************************** End of CSS Reset ******************************************** */\n/* ******************************************** End of CSS Reset ******************************************** */\n/* ******************************************** End of CSS Reset ******************************************** */\n\n/* green: #61C611 */\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  background-color: rgb(32, 32, 32);\n  color: #daffba;\n}\n\n#wrapper {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n}\n\nh1 {\n  margin-bottom: 30px;\n  font-size: 4em;\n  font-weight: bold;\n  color: white;\n}\n\n#boardsWrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n#board1,\n#board2 {\n  box-sizing: border-box;\n  width: 300px;\n  height: 300px;\n  display: flex;\n  margin-top: 30px;\n  flex-wrap: wrap;\n}\n\n.player1,\n.player2 {\n  transition: 0.3s all;\n  box-sizing: border-box;\n  width: 27px;\n  border: 1px solid #61c611;\n}\n\n#player2 {\n  cursor: pointer;\n}\n\n.col {\n  box-sizing: border-box;\n  width: 27px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#logoImg {\n  margin-top: 200px;\n  height: 3.5em;\n  margin-bottom: 10px;\n}\n#userName {\n  width: 100px;\n  font-size: 16px;\n  margin-bottom: 20px;\n}\n\n.playBtn {\n  background-color: initial;\n  background-image: linear-gradient(-180deg, #61c611, #346b06);\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;\n  color: #ffffff;\n  cursor: pointer;\n  display: inline-block;\n  height: 44px;\n  outline: 0;\n  overflow: hidden;\n  padding: 0 20px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  width: 100px;\n  border: 0;\n  font-size: 1.5em;\n}\n\n.playBtn:hover {\n  background: #346b06;\n}\n\n#gameOverWrap {\n  width: 200px;\n  height: 100px;\n  position: absolute;\n  background-color: #62c611;\n  border: 2px solid #c70824;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: auto auto auto auto;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: 27px;\n}\n\n#gameOverText {\n  font-size: 1.5em;\n}\n\n#startGameBtn,\n#flipShip {\n  margin-left: 27px;\n  margin-top: 5px;\n}\n\n#startGameBtn {\n  background-color: initial;\n  background-image: linear-gradient(-180deg, #61c611, #346b06);\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;\n  color: #ffffff;\n  cursor: pointer;\n  display: inline-block;\n  height: 22px;\n  outline: 0;\n  padding: 0 20px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  width: 130px;\n  border: 0;\n  font-size: 1em;\n}\n\n#startGameBtn:hover {\n  background: #346b06;\n}\n\n#flipShip {\n  position: absolute;\n  top: 0;\n  width: 20px;\n  filter: invert(53%) sepia(80%) saturate(463%) hue-rotate(50deg)\n    brightness(103%) contrast(101%);\n  cursor: pointer;\n  transition: 0.3s all;\n}\n\n#flipShip:active,\n#flipShip:hover {\n  transform: rotate(180deg);\n}\n\n#flipShip:active {\n  transition: none;\n}\n',""]);const o=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",l=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),l&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),l&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,l,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(l)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(a[s]=!0)}for(var h=0;h<e.length;h++){var c=[].concat(e[h]);l&&a[c[0]]||(void 0!==i&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=i),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),n.push(c))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,l=0;l<n.length;l++)if(n[l].identifier===e){t=l;break}return t}function l(e,l){for(var i={},a=[],o=0;o<e.length;o++){var s=e[o],h=l.base?s[0]+l.base:s[0],c=i[h]||0,d="".concat(h," ").concat(c);i[h]=c+1;var u=t(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var b=r(p,l);l.byIndex=o,n.splice(o,0,{identifier:d,updater:b,references:1})}a.push(d)}return a}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var i=l(e=e||[],r=r||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var o=t(i[a]);n[o].references--}for(var s=l(e,r),h=0;h<i.length;h++){var c=t(i[h]);0===n[c].references&&(n[c].updater(),n.splice(c,1))}i=s}}},569:e=>{var n={};e.exports=function(e,t){var l=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var l="";t.supports&&(l+="@supports (".concat(t.supports,") {")),t.media&&(l+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(l+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),l+=t.css,r&&(l+="}"),t.media&&(l+="}"),t.supports&&(l+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(l+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(l,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(l){var r=n[l];if(void 0!==r)return r.exports;var i=n[l]={id:l,exports:{}};return e[l](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var l in n)t.o(n,l)&&!t.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:n[l]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var l=n.getElementsByTagName("script");l.length&&(e=l[l.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.nc=void 0,(()=>{var e=t(379),n=t.n(e),l=t(795),r=t.n(l),i=t(569),a=t.n(i),o=t(565),s=t.n(o),h=t(216),c=t.n(h),d=t(589),u=t.n(d),p=t(426),b={};b.styleTagTransform=u(),b.setAttributes=s(),b.insert=a().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=c(),n()(p.Z,b),p.Z&&p.Z.locals&&p.Z.locals;const m=t.p+"4e4104bf7fbf8e13bb7e.svg",g=t.p+"0e170d016c6e7ccd780d.svg",f=function(e,n){return{name:e,length:n,nHits:0,hit(){return this.nHits+=1,this.nHits},isSunk(){return!(this.length-this.nHits>0)}}},w=function(e="cpu"){return{board:{ships:{carrier:f("carrier",5),battleship:f("battleship",4),destroyer:f("destroyer",3),submarine:f("submarine",3),patrol:f("patrol",2)},board:{a:{1:{hit:null,owner:null},2:{hit:null,owner:null},3:{hit:null,owner:null},4:{hit:null,owner:null},5:{hit:null,owner:null},6:{hit:null,owner:null},7:{hit:null,owner:null},8:{hit:null,owner:null},9:{hit:null,owner:null},10:{hit:null,owner:null}},b:{1:{hit:null,owner:null},2:{hit:null,owner:null},3:{hit:null,owner:null},4:{hit:null,owner:null},5:{hit:null,owner:null},6:{hit:null,owner:null},7:{hit:null,owner:null},8:{hit:null,owner:null},9:{hit:null,owner:null},10:{hit:null,owner:null}},c:{1:{hit:null,owner:null},2:{hit:null,owner:null},3:{hit:null,owner:null},4:{hit:null,owner:null},5:{hit:null,owner:null},6:{hit:null,owner:null},7:{hit:null,owner:null},8:{hit:null,owner:null},9:{hit:null,owner:null},10:{hit:null,owner:null}},d:{1:{hit:null,owner:null},2:{hit:null,owner:null},3:{hit:null,owner:null},4:{hit:null,owner:null},5:{hit:null,owner:null},6:{hit:null,owner:null},7:{hit:null,owner:null},8:{hit:null,owner:null},9:{hit:null,owner:null},10:{hit:null,owner:null}},e:{1:{hit:null,owner:null},2:{hit:null,owner:null},3:{hit:null,owner:null},4:{hit:null,owner:null},5:{hit:null,owner:null},6:{hit:null,owner:null},7:{hit:null,owner:null},8:{hit:null,owner:null},9:{hit:null,owner:null},10:{hit:null,owner:null}},f:{1:{hit:null,owner:null},2:{hit:null,owner:null},3:{hit:null,owner:null},4:{hit:null,owner:null},5:{hit:null,owner:null},6:{hit:null,owner:null},7:{hit:null,owner:null},8:{hit:null,owner:null},9:{hit:null,owner:null},10:{hit:null,owner:null}},g:{1:{hit:null,owner:null},2:{hit:null,owner:null},3:{hit:null,owner:null},4:{hit:null,owner:null},5:{hit:null,owner:null},6:{hit:null,owner:null},7:{hit:null,owner:null},8:{hit:null,owner:null},9:{hit:null,owner:null},10:{hit:null,owner:null}},h:{1:{hit:null,owner:null},2:{hit:null,owner:null},3:{hit:null,owner:null},4:{hit:null,owner:null},5:{hit:null,owner:null},6:{hit:null,owner:null},7:{hit:null,owner:null},8:{hit:null,owner:null},9:{hit:null,owner:null},10:{hit:null,owner:null}},i:{1:{hit:null,owner:null},2:{hit:null,owner:null},3:{hit:null,owner:null},4:{hit:null,owner:null},5:{hit:null,owner:null},6:{hit:null,owner:null},7:{hit:null,owner:null},8:{hit:null,owner:null},9:{hit:null,owner:null},10:{hit:null,owner:null}},j:{1:{hit:null,owner:null},2:{hit:null,owner:null},3:{hit:null,owner:null},4:{hit:null,owner:null},5:{hit:null,owner:null},6:{hit:null,owner:null},7:{hit:null,owner:null},8:{hit:null,owner:null},9:{hit:null,owner:null},10:{hit:null,owner:null}}},allSunk:!1,placeShip(e,n,t,l){if(null===this.board[n][t].owner){e.placed=!0;const r="abcdefghij";if("vertical"===l)for(let l=0;l<e.length;l+=1)this.board[n][t].owner=e,void 0!==this.board[n][t-e.length]?null===this.board[n][t-l].owner?this.board[n][t-l].owner=e:this.clearShip(e):void 0!==this.board[n][t+e.length]&&(null===this.board[n][t+l].owner?this.board[n][t+l].owner=e:this.clearShip(e));if("horizontal"===l)for(let l=0;l<e.length;l+=1){const i=r.indexOf(n);""!==r.charAt(i+e.length)?null===this.board[r.charAt(i+l)][t].owner?this.board[r.charAt(i+l)][t].owner=e:this.clearShip(e):""!==r.charAt(i-e.length)&&(null===this.board[r.charAt(i-l)][t].owner?this.board[r.charAt(i-l)][t].owner=e:this.clearShip(e))}}},clearShip(e){for(const n in this.board)for(const t in this.board[n])this.board[n][t].owner===e&&(this.board[n][t].owner=null)},moveShip(e,n,t,l){this.clearShip(l),this.placeShip(l,e,n,t)},recieveAttack(e,n){const t=this.board[e][n];return null!==t.owner?(t.owner.hit(),t.hit=1,!0):(t.hit=0,!1)},reportSunk(){return!0===this.ships.carrier.isSunk()&&!0===this.ships.battleship.isSunk()&&!0===this.ships.destroyer.isSunk()&&!0===this.ships.submarine.isSunk()&&!0===this.ships.patrol.isSunk()&&(this.allSunk=!0,!0)}},name:e,randomNum:()=>Math.floor(10*Math.random()),randomCol(){return"abcdefghij".charAt(this.randomNum())},randomRow(){return this.randomNum()+1},recieveRandomAttack(e=this.randomCol(),n=this.randomRow()){if(null===this.board.board[e][n].hit){if(!0===this.board.recieveAttack(e,n))return!0}else this.recieveRandomAttack();return!1}}};({gameLoop:{createPlayers(e){this.player1=w(e),this.player2=w()},startGame(e){this.createPlayers(e),this.placeShips(this.player2)},placeShips(e){this.getRandTable(),e.board.placeShip(e.board.ships.carrier,this.placedTables[this.table][0][0],this.placedTables[this.table][0][1],this.placedTables[this.table][0][2]),e.board.placeShip(e.board.ships.battleship,this.placedTables[this.table][1][0],this.placedTables[this.table][1][1],this.placedTables[this.table][1][2]),e.board.placeShip(e.board.ships.destroyer,this.placedTables[this.table][2][0],this.placedTables[this.table][2][1],this.placedTables[this.table][2][2]),e.board.placeShip(e.board.ships.submarine,this.placedTables[this.table][3][0],this.placedTables[this.table][3][1],this.placedTables[this.table][3][2]),e.board.placeShip(e.board.ships.patrol,this.placedTables[this.table][4][0],this.placedTables[this.table][4][1],this.placedTables[this.table][4][2])},getRandTable(){return this.table=Math.floor(Math.random()*this.placedTables.length),this.table},placedTables:[[["b",8,"vertical"],["e",8,"horizontal"],["d",2,"vertical"],["f",5,"horizontal"],["g",3,"horizontal"]],[["a",4,"horizontal"],["f",9,"vertical"],["i",10,"vertical"],["i",4,"vertical"],["b",8,"horizontal"]],[["a",6,"horizontal"],["d",10,"horizontal"],["g",5,"horizontal"],["d",4,"vertical"],["i",9,"vertical"]],[["b",10,"horizontal"],["a",8,"horizontal"],["c",1,"vertical"],["g",8,"vertical"],["c",5,"horizontal"]],[["b",6,"horizontal"],["f",9,"horizontal"],["d",2,"vertical"],["h",2,"vertical"],["d",8,"horizontal"]],[["c",8,"horizontal"],["a",6,"vertical"],["f",2,"horizontal"],["i",6,"vertical"],["f",6,"horizontal"]],[["a",8,"horizontal"],["g",1,"vertical"],["c",5,"horizontal"],["j",8,"vertical"],["g",7,"horizontal"]],[["b",1,"horizontal"],["b",9,"horizontal"],["f",5,"vertical"],["j",9,"vertical"],["b",3,"horizontal"]],[["a",3,"horizontal"],["c",10,"horizontal"],["b",5,"horizontal"],["e",8,"vertical"],["a",7,"vertical"]],[["b",4,"horizontal"],["i",3,"vertical"],["a",9,"horizontal"],["f",9,"horizontal"],["f",7,"vertical"]],[["b",3,"horizontal"],["e",9,"horizontal"],["b",8,"vertical"],["j",6,"vertical"],["g",6,"vertical"]],[["e",5,"horizontal"],["a",1,"vertical"],["c",2,"vertical"],["a",9,"horizontal"],["e",7,"horizontal"]],[["c",7,"horizontal"],["h",1,"vertical"],["d",1,"horizontal"],["b",2,"vertical"],["d",4,"horizontal"]],[["c",9,"horizontal"],["a",7,"horizontal"],["b",2,"horizontal"],["j",2,"vertical"],["j",9,"vertical"]],[["e",1,"horizontal"],["c",4,"horizontal"],["c",8,"vertical"],["b",10,"horizontal"],["e",7,"vertical"]],[["e",7,"horizontal"],["a",8,"horizontal"],["d",1,"horizontal"],["f",5,"vertical"],["a",6,"vertical"]],[["i",1,"vertical"],["e",10,"horizontal"],["d",3,"horizontal"],["b",9,"vertical"],["f",1,"horizontal"]],[["c",2,"horizontal"],["e",10,"horizontal"],["j",2,"vertical"],["c",7,"horizontal"],["c",5,"vertical"]],[["d",5,"horizontal"],["a",10,"horizontal"],["b",5,"vertical"],["i",1,"vertical"],["h",8,"horizontal"]],[["b",8,"horizontal"],["e",5,"horizontal"],["c",2,"horizontal"],["h",1,"vertical"],["h",8,"vertical"]]]},init(){this.wrapper=document.createElement("div"),this.wrapper.setAttribute("id","wrapper"),document.body.appendChild(this.wrapper),this.homePage()},gamePage(){this.boardsWrap=document.createElement("div"),this.boardsWrap.setAttribute("id","boardsWrap"),this.board1=document.createElement("div"),this.board1.setAttribute("id","board1"),this.board2=document.createElement("div"),this.board2.setAttribute("id","board2"),this.startGameBtn=document.createElement("button"),this.startGameBtn.innerText="Start Game",this.startGameBtn.id="startGameBtn",this.createGrid(this.board1),this.createGrid(this.board2,2),this.flipShip=document.createElement("img"),this.flipShip.src=g,this.flipShip.id="flipShip",this.wrapper.append(this.boardsWrap,this.startGameBtn),this.boardsWrap.append(this.board1,this.flipShip,this.board2),this.allCells=document.getElementsByClassName("player1"),this.allCellsP2=document.getElementsByClassName("player2"),this.startGameBtn.addEventListener("click",(()=>{this.startGameBtn.style.display="none",this.flipShip.style.display="none",this.attack()})),this.flipShip.addEventListener("click",(()=>{"horizontal"===this.orientation?this.orientation="vertical":this.orientation="horizontal"}))},createGrid(e,n=1){const t="-abcdefghij-abcdefghij-abcdefghij-abcdefghij-abcdefghij-abcdefghij-abcdefghij-abcdefghij-abcdefghij-abcdefghij-abcdefghij",l=[1,2,3,4,5,6,7,8,9,10];for(let r=1;r<122;r+=1)this.cell=document.createElement("div"),1===r?this.cell.classList.add("col"):r>=2&&r<=11?(this.cell.classList.add("col"),this.cell.innerText=t.charAt(r-1).toUpperCase()):12===r||23===r||34===r||45===r||56===r||67===r||78===r||89===r||100===r||111===r?(this.cell.classList.add("col"),this.cell.innerText=l[0],l.shift()):(this.cell.classList.add(`player${n}`),this.cell.dataset.col=t.charAt(r-1),void 0!==l[0]?this.cell.dataset.row=l[0]-1:this.cell.dataset.row=10,this.cell.dataset.coords=`${this.cell.dataset.col} ${this.cell.dataset.row}`),e.appendChild(this.cell)},homePage(){this.logo=document.createElement("img"),this.logo.src=m,this.logo.id="logoImg",this.header=document.createElement("h1"),this.header.innerText="Battleship",this.userName=document.createElement("input"),this.userName.id="userName",this.userName.placeholder="Your name:",this.playBtn=document.createElement("button"),this.playBtn.innerText="Play",this.playBtn.classList.add("playBtn"),this.playBtn.addEventListener("click",(()=>{""!==this.userName.value&&(this.clearPage(),this.gamePage(),this.gameLoop.startGame(this.userName.value),this.renderBoard(this.gameLoop.player1),this.placement())})),this.wrapper.append(this.logo,this.header,this.userName,this.playBtn)},clearPage(){for(;this.wrapper.firstChild;)this.wrapper.removeChild(this.wrapper.lastChild)},renderBoard(e){e===this.gameLoop.player2&&(this.allCells=document.getElementsByClassName("player2"));for(const n in e.board.board)for(const t in e.board.board[n])if(null!==e.board.board[n][t].owner)for(let e=0;e<this.allCells.length;e+=1)this.allCells[e].dataset.coords===`${n} ${t}`&&(this.allCells[e].style.backgroundColor="#1EDE09");else for(let e=0;e<this.allCells.length;e+=1)this.allCells[e].dataset.coords===`${n} ${t}`&&(this.allCells[e].style.backgroundColor="transparent");this.allCells=document.getElementsByClassName("player1")},renderAttacks(e){e===this.gameLoop.player2&&(this.allCells=document.getElementsByClassName("player2"));for(const n in e.board.board)for(const t in e.board.board[n])if(null!==e.board.board[n][t].hit)if(0===e.board.board[n][t].hit)for(let e=0;e<this.allCells.length;e+=1)this.allCells[e].dataset.coords===`${n} ${t}`&&(this.allCells[e].style.backgroundColor="#EAFF08");else if(1===e.board.board[n][t].hit)for(let e=0;e<this.allCells.length;e+=1)this.allCells[e].dataset.coords===`${n} ${t}`&&(this.allCells[e].style.backgroundColor="#C70824",this.allCells[e].style.borderWidth="3px");this.allCells=document.getElementsByClassName("player1")},attack(){for(let e=0;e<this.allCellsP2.length;e+=1)this.allCellsP2[e].addEventListener("click",this.attackEvent.bind(this))},attackEvent(e){this.gameLoop.player2.board.recieveAttack(e.target.dataset.col,e.target.dataset.row),this.renderAttacks(this.gameLoop.player2),!1===this.checkGameOver(this.gameLoop.player2,this.gameLoop.player1)&&setTimeout((()=>{this.gameLoop.player1.recieveRandomAttack(),this.renderAttacks(this.gameLoop.player1),this.checkGameOver(this.gameLoop.player1,this.gameLoop.player2)}),300)},checkGameOver(e,n){if(!1===e.board.reportSunk())return!1;this.winner=n.name;for(let e=0;e<this.allCellsP2.length;e+=1)this.allCellsP2[e].style.pointerEvents="none";return this.gameOverScreen(),!0},gameOverScreen(){this.gameOverWrap=document.createElement("div"),this.gameOverWrap.id="gameOverWrap",this.gameOverSpan=document.createElement("span"),this.gameOverSpan.innerText=`${this.winner} Wins!`,this.gameOverSpan.id="gameOverText",this.restartGame=document.createElement("button"),this.restartGame.innerText="Play again",this.restartGame.addEventListener("click",(()=>{this.gameOverWrap.style.display="none",this.clearPage(),this.gamePage(),this.gameLoop.startGame(this.userName.value),this.renderBoard(this.gameLoop.player1),this.attack()})),document.body.appendChild(this.gameOverWrap),this.gameOverWrap.append(this.gameOverSpan,this.restartGame)},orientation:"vertical",placement(){for(let e=0;e<this.allCells.length;e+=1)this.allCells[e].addEventListener("click",(e=>{const{col:n}=e.target.dataset,t=Number(e.target.dataset.row);!0!==this.gameLoop.player1.board.ships.carrier.placed?this.gameLoop.player1.board.placeShip(this.gameLoop.player1.board.ships.carrier,n,t,this.orientation):!0!==this.gameLoop.player1.board.ships.battleship.placed?this.gameLoop.player1.board.placeShip(this.gameLoop.player1.board.ships.battleship,n,t,this.orientation):!0!==this.gameLoop.player1.board.ships.destroyer.placed?this.gameLoop.player1.board.placeShip(this.gameLoop.player1.board.ships.destroyer,n,t,this.orientation):!0!==this.gameLoop.player1.board.ships.submarine.placed?this.gameLoop.player1.board.placeShip(this.gameLoop.player1.board.ships.submarine,n,t,this.orientation):!0!==this.gameLoop.player1.board.ships.patrol.placed?this.gameLoop.player1.board.placeShip(this.gameLoop.player1.board.ships.patrol,n,t,this.orientation):console.log(this.gameLoop.player1.board.board),this.renderBoard(this.gameLoop.player1)}))}}).init()})()})();