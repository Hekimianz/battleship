(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>o});var l=n(81),r=n.n(l),a=n(645),i=n.n(a)()(r());i.push([e.id,'/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol,\nul {\n  list-style: none;\n}\nblockquote,\nq {\n  quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* ******************************************** End of CSS Reset ******************************************** */\n/* ******************************************** End of CSS Reset ******************************************** */\n/* ******************************************** End of CSS Reset ******************************************** */\n\n/* green: #61C611 */\n\nhtml,\nbody {\n  width: 100%;\n  height: 100%;\n  background-color: rgb(32, 32, 32);\n  color: #daffba;\n}\n\n#wrapper {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n}\n\nh1 {\n  margin-bottom: 30px;\n  font-size: 4em;\n  font-weight: bold;\n  color: white;\n}\n\n#boardsWrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n#board1,\n#board2 {\n  box-sizing: border-box;\n  width: 300px;\n  height: 300px;\n  display: flex;\n  margin-top: 30px;\n  flex-wrap: wrap;\n}\n\n.player1,\n.player2 {\n  transition: 0.3s all;\n  box-sizing: border-box;\n  width: 27px;\n  border: 1px solid #61c611;\n}\n\n#player2 {\n  cursor: pointer;\n}\n\n.col {\n  box-sizing: border-box;\n  width: 27px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#logoImg {\n  margin-top: 200px;\n  height: 3.5em;\n  margin-bottom: 10px;\n}\n#userName {\n  width: 100px;\n  font-size: 16px;\n  margin-bottom: 20px;\n}\n\n.playBtn {\n  background-color: initial;\n  background-image: linear-gradient(-180deg, #61c611, #346b06);\n  border-radius: 5px;\n  box-shadow: rgba(0, 0, 0, 0.1) 0 2px 4px;\n  color: #ffffff;\n  cursor: pointer;\n  display: inline-block;\n  height: 44px;\n  outline: 0;\n  overflow: hidden;\n  padding: 0 20px;\n  pointer-events: auto;\n  position: relative;\n  text-align: center;\n  width: 100px;\n  border: 0;\n  font-size: 1.5em;\n}\n\n.playBtn:hover {\n  background: #346b06;\n}\n\n#gameOverWrap {\n  width: 200px;\n  height: 100px;\n  position: absolute;\n  background-color: #62c611;\n  border: 2px solid #c70824;\n  top: 0;\n  left: 0;\n  right: 0;\n  margin: auto auto auto auto;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin-left: 27px;\n}\n\n#gameOverText {\n  font-size: 1.5em;\n}\n\n#startGameBtn {\n  margin-left: 27px;\n}\n',""]);const o=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",l=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),l&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),l&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,l,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(l)for(var o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(var h=0;h<e.length;h++){var c=[].concat(e[h]);l&&i[c[0]]||(void 0!==a&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=a),n&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=n):c[2]=n),r&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=r):c[4]="".concat(r)),t.push(c))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,l=0;l<t.length;l++)if(t[l].identifier===e){n=l;break}return n}function l(e,l){for(var a={},i=[],o=0;o<e.length;o++){var s=e[o],h=l.base?s[0]+l.base:s[0],c=a[h]||0,u="".concat(h," ").concat(c);a[h]=c+1;var d=n(u),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(p);else{var b=r(p,l);l.byIndex=o,t.splice(o,0,{identifier:u,updater:b,references:1})}i.push(u)}return i}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=l(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var o=n(a[i]);t[o].references--}for(var s=l(e,r),h=0;h<a.length;h++){var c=n(a[h]);0===t[c].references&&(t[c].updater(),t.splice(c,1))}a=s}}},569:e=>{var t={};e.exports=function(e,n){var l=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!l)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");l.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var l="";n.supports&&(l+="@supports (".concat(n.supports,") {")),n.media&&(l+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(l+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),l+=n.css,r&&(l+="}"),n.media&&(l+="}"),n.supports&&(l+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(l+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(l,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(l){var r=t[l];if(void 0!==r)return r.exports;var a=t[l]={id:l,exports:{}};return e[l](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var l=t.getElementsByTagName("script");l.length&&(e=l[l.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),l=n(795),r=n.n(l),a=n(569),i=n.n(a),o=n(565),s=n.n(o),h=n(216),c=n.n(h),u=n(589),d=n.n(u),p=n(426),b={};b.styleTagTransform=d(),b.setAttributes=s(),b.insert=i().bind(null,"head"),b.domAPI=r(),b.insertStyleElement=c(),t()(p.Z,b),p.Z&&p.Z.locals&&p.Z.locals;const m=n.p+"4e4104bf7fbf8e13bb7e.svg",g=function(e,t){return{name:e,length:t,nHits:0,hit(){return this.nHits+=1,this.nHits},isSunk(){return!(this.length-this.nHits>0)}}},f=function(e="cpu"){return{board:{ships:{carrier:g("carrier",5),battleship:g("battleship",4),destroyer:g("destroyer",3),submarine:g("submarine",3),patrol:g("patrol",2)},board:{a:{1:{hit:null,owner:null},2:{hit:null,owner:null},3:{hit:null,owner:null},4:{hit:null,owner:null},5:{hit:null,owner:null},6:{hit:null,owner:null},7:{hit:null,owner:null},8:{hit:null,owner:null},9:{hit:null,owner:null},10:{hit:null,owner:null}},b:{1:{hit:null,owner:null},2:{hit:null,owner:null},3:{hit:null,owner:null},4:{hit:null,owner:null},5:{hit:null,owner:null},6:{hit:null,owner:null},7:{hit:null,owner:null},8:{hit:null,owner:null},9:{hit:null,owner:null},10:{hit:null,owner:null}},c:{1:{hit:null,owner:null},2:{hit:null,owner:null},3:{hit:null,owner:null},4:{hit:null,owner:null},5:{hit:null,owner:null},6:{hit:null,owner:null},7:{hit:null,owner:null},8:{hit:null,owner:null},9:{hit:null,owner:null},10:{hit:null,owner:null}},d:{1:{hit:null,owner:null},2:{hit:null,owner:null},3:{hit:null,owner:null},4:{hit:null,owner:null},5:{hit:null,owner:null},6:{hit:null,owner:null},7:{hit:null,owner:null},8:{hit:null,owner:null},9:{hit:null,owner:null},10:{hit:null,owner:null}},e:{1:{hit:null,owner:null},2:{hit:null,owner:null},3:{hit:null,owner:null},4:{hit:null,owner:null},5:{hit:null,owner:null},6:{hit:null,owner:null},7:{hit:null,owner:null},8:{hit:null,owner:null},9:{hit:null,owner:null},10:{hit:null,owner:null}},f:{1:{hit:null,owner:null},2:{hit:null,owner:null},3:{hit:null,owner:null},4:{hit:null,owner:null},5:{hit:null,owner:null},6:{hit:null,owner:null},7:{hit:null,owner:null},8:{hit:null,owner:null},9:{hit:null,owner:null},10:{hit:null,owner:null}},g:{1:{hit:null,owner:null},2:{hit:null,owner:null},3:{hit:null,owner:null},4:{hit:null,owner:null},5:{hit:null,owner:null},6:{hit:null,owner:null},7:{hit:null,owner:null},8:{hit:null,owner:null},9:{hit:null,owner:null},10:{hit:null,owner:null}},h:{1:{hit:null,owner:null},2:{hit:null,owner:null},3:{hit:null,owner:null},4:{hit:null,owner:null},5:{hit:null,owner:null},6:{hit:null,owner:null},7:{hit:null,owner:null},8:{hit:null,owner:null},9:{hit:null,owner:null},10:{hit:null,owner:null}},i:{1:{hit:null,owner:null},2:{hit:null,owner:null},3:{hit:null,owner:null},4:{hit:null,owner:null},5:{hit:null,owner:null},6:{hit:null,owner:null},7:{hit:null,owner:null},8:{hit:null,owner:null},9:{hit:null,owner:null},10:{hit:null,owner:null}},j:{1:{hit:null,owner:null},2:{hit:null,owner:null},3:{hit:null,owner:null},4:{hit:null,owner:null},5:{hit:null,owner:null},6:{hit:null,owner:null},7:{hit:null,owner:null},8:{hit:null,owner:null},9:{hit:null,owner:null},10:{hit:null,owner:null}}},allSunk:!1,placeShip(e,t,n,l){if(null===this.board[t][n].owner){e.placed=!0;const r="abcdefghij";if("vertical"===l)for(let l=0;l<e.length;l+=1)this.board[t][n].owner=e,void 0!==this.board[t][n-e.length]?this.board[t][n-l].owner=e:void 0!==this.board[t][n+e.length]&&(this.board[t][n+l].owner=e);if("horizontal"===l)for(let l=0;l<e.length;l+=1){const a=r.indexOf(t);""!==r.charAt(a+e.length)?this.board[r.charAt(a+l)][n].owner=e:""!==r.charAt(a-e.length)&&(this.board[r.charAt(a-l)][n].owner=e)}}},clearShip(e){for(const t in this.board)for(const n in this.board[t])this.board[t][n].owner===e&&(this.board[t][n].owner=null)},moveShip(e,t,n,l){this.clearShip(l),this.placeShip(l,e,t,n)},recieveAttack(e,t){const n=this.board[e][t];return null!==n.owner?(n.owner.hit(),n.hit=1,!0):(n.hit=0,!1)},reportSunk(){return!0===this.ships.carrier.isSunk()&&!0===this.ships.battleship.isSunk()&&!0===this.ships.destroyer.isSunk()&&!0===this.ships.submarine.isSunk()&&!0===this.ships.patrol.isSunk()&&(this.allSunk=!0,!0)}},name:e,randomNum:()=>Math.floor(10*Math.random()),randomCol(){return"abcdefghij".charAt(this.randomNum())},randomRow(){return this.randomNum()+1},recieveRandomAttack(e=this.randomCol(),t=this.randomRow()){if(null===this.board.board[e][t].hit){if(!0===this.board.recieveAttack(e,t))return!0}else this.recieveRandomAttack();return!1}}};({gameLoop:{createPlayers(e){this.player1=f(e),this.player2=f()},startGame(e){this.createPlayers(e),this.placeShips(this.player2)},placeShips(e){this.getRandTable(),e.board.placeShip(e.board.ships.carrier,this.placedTables[this.table][0][0],this.placedTables[this.table][0][1],this.placedTables[this.table][0][2]),e.board.placeShip(e.board.ships.battleship,this.placedTables[this.table][1][0],this.placedTables[this.table][1][1],this.placedTables[this.table][1][2]),e.board.placeShip(e.board.ships.destroyer,this.placedTables[this.table][2][0],this.placedTables[this.table][2][1],this.placedTables[this.table][2][2]),e.board.placeShip(e.board.ships.submarine,this.placedTables[this.table][3][0],this.placedTables[this.table][3][1],this.placedTables[this.table][3][2]),e.board.placeShip(e.board.ships.patrol,this.placedTables[this.table][4][0],this.placedTables[this.table][4][1],this.placedTables[this.table][4][2])},getRandTable(){return this.table=Math.floor(Math.random()*this.placedTables.length),this.table},placedTables:[[["b",8,"vertical"],["e",8,"horizontal"],["d",2,"vertical"],["f",5,"horizontal"],["g",3,"horizontal"]],[["a",4,"horizontal"],["f",9,"vertical"],["i",10,"vertical"],["i",4,"vertical"],["b",8,"horizontal"]],[["a",6,"horizontal"],["d",10,"horizontal"],["g",5,"horizontal"],["d",4,"vertical"],["i",9,"vertical"]],[["b",10,"horizontal"],["a",8,"horizontal"],["c",1,"vertical"],["g",8,"vertical"],["c",5,"horizontal"]],[["b",6,"horizontal"],["f",9,"horizontal"],["d",2,"vertical"],["h",2,"vertical"],["d",8,"horizontal"]],[["c",8,"horizontal"],["a",6,"vertical"],["f",2,"horizontal"],["i",6,"vertical"],["f",6,"horizontal"]],[["a",8,"horizontal"],["g",1,"vertical"],["c",5,"horizontal"],["j",8,"vertical"],["g",7,"horizontal"]],[["b",1,"horizontal"],["b",9,"horizontal"],["f",5,"vertical"],["j",9,"vertical"],["b",3,"horizontal"]],[["a",3,"horizontal"],["c",10,"horizontal"],["b",5,"horizontal"],["e",8,"vertical"],["a",7,"vertical"]],[["b",4,"horizontal"],["i",3,"vertical"],["a",9,"horizontal"],["f",9,"horizontal"],["f",7,"vertical"]],[["b",3,"horizontal"],["e",9,"horizontal"],["b",8,"vertical"],["j",6,"vertical"],["g",6,"vertical"]],[["e",5,"horizontal"],["a",1,"vertical"],["c",2,"vertical"],["a",9,"horizontal"],["e",7,"horizontal"]],[["c",7,"horizontal"],["h",1,"vertical"],["d",1,"horizontal"],["b",2,"vertical"],["d",4,"horizontal"]],[["c",9,"horizontal"],["a",7,"horizontal"],["b",2,"horizontal"],["j",2,"vertical"],["j",9,"vertical"]],[["e",1,"horizontal"],["c",4,"horizontal"],["c",8,"vertical"],["b",10,"horizontal"],["e",7,"vertical"]],[["e",7,"horizontal"],["a",8,"horizontal"],["d",1,"horizontal"],["f",5,"vertical"],["a",6,"vertical"]],[["i",1,"vertical"],["e",10,"horizontal"],["d",3,"horizontal"],["b",9,"vertical"],["f",1,"horizontal"]],[["c",2,"horizontal"],["e",10,"horizontal"],["j",2,"vertical"],["c",7,"horizontal"],["c",5,"vertical"]],[["d",5,"horizontal"],["a",10,"horizontal"],["b",5,"vertical"],["i",1,"vertical"],["h",8,"horizontal"]],[["b",8,"horizontal"],["e",5,"horizontal"],["c",2,"horizontal"],["h",1,"vertical"],["h",8,"vertical"]]]},init(){this.wrapper=document.createElement("div"),this.wrapper.setAttribute("id","wrapper"),document.body.appendChild(this.wrapper),this.homePage()},gamePage(){this.boardsWrap=document.createElement("div"),this.boardsWrap.setAttribute("id","boardsWrap"),this.board1=document.createElement("div"),this.board1.setAttribute("id","board1"),this.board2=document.createElement("div"),this.board2.setAttribute("id","board2"),this.startGameBtn=document.createElement("button"),this.startGameBtn.innerText="Start Game",this.startGameBtn.id="startGameBtn",this.createGrid(this.board1),this.createGrid(this.board2,2),this.flipShip=document.createElement("button"),this.flipShip.innerText="Flip Ship",this.wrapper.append(this.boardsWrap,this.startGameBtn),this.boardsWrap.append(this.board1,this.flipShip,this.board2),this.allCells=document.getElementsByClassName("player1"),this.allCellsP2=document.getElementsByClassName("player2"),this.startGameBtn.addEventListener("click",(()=>{this.startGameBtn.style.display="none",this.attack()})),this.flipShip.addEventListener("click",(()=>{"horizontal"===this.orientation?this.orientation="vertical":this.orientation="horizontal"}))},createGrid(e,t=1){const n="-abcdefghij-abcdefghij-abcdefghij-abcdefghij-abcdefghij-abcdefghij-abcdefghij-abcdefghij-abcdefghij-abcdefghij-abcdefghij",l=[1,2,3,4,5,6,7,8,9,10];for(let r=1;r<122;r+=1)this.cell=document.createElement("div"),1===r?this.cell.classList.add("col"):r>=2&&r<=11?(this.cell.classList.add("col"),this.cell.innerText=n.charAt(r-1).toUpperCase()):12===r||23===r||34===r||45===r||56===r||67===r||78===r||89===r||100===r||111===r?(this.cell.classList.add("col"),this.cell.innerText=l[0],l.shift()):(this.cell.classList.add(`player${t}`),this.cell.dataset.col=n.charAt(r-1),void 0!==l[0]?this.cell.dataset.row=l[0]-1:this.cell.dataset.row=10,this.cell.dataset.coords=`${this.cell.dataset.col} ${this.cell.dataset.row}`),e.appendChild(this.cell)},homePage(){this.logo=document.createElement("img"),this.logo.src=m,this.logo.id="logoImg",this.header=document.createElement("h1"),this.header.innerText="Battleship",this.userName=document.createElement("input"),this.userName.id="userName",this.userName.placeholder="Your name:",this.playBtn=document.createElement("button"),this.playBtn.innerText="Play",this.playBtn.classList.add("playBtn"),this.playBtn.addEventListener("click",(()=>{this.clearPage(),this.gamePage(),this.gameLoop.startGame(this.userName.value),this.renderBoard(this.gameLoop.player1),this.placement()})),this.wrapper.append(this.logo,this.header,this.userName,this.playBtn)},clearPage(){for(;this.wrapper.firstChild;)this.wrapper.removeChild(this.wrapper.lastChild)},renderBoard(e){e===this.gameLoop.player2&&(this.allCells=document.getElementsByClassName("player2"));for(const t in e.board.board)for(const n in e.board.board[t])if(null!==e.board.board[t][n].owner)for(let e=0;e<this.allCells.length;e+=1)this.allCells[e].dataset.coords===`${t} ${n}`&&(this.allCells[e].style.backgroundColor="#1EDE09");else for(let e=0;e<this.allCells.length;e+=1)this.allCells[e].dataset.coords===`${t} ${n}`&&(this.allCells[e].style.backgroundColor="transparent");this.allCells=document.getElementsByClassName("player1")},renderAttacks(e){e===this.gameLoop.player2&&(this.allCells=document.getElementsByClassName("player2"));for(const t in e.board.board)for(const n in e.board.board[t])if(null!==e.board.board[t][n].hit)if(0===e.board.board[t][n].hit)for(let e=0;e<this.allCells.length;e+=1)this.allCells[e].dataset.coords===`${t} ${n}`&&(this.allCells[e].style.backgroundColor="#EAFF08");else if(1===e.board.board[t][n].hit)for(let e=0;e<this.allCells.length;e+=1)this.allCells[e].dataset.coords===`${t} ${n}`&&(this.allCells[e].style.backgroundColor="#C70824",this.allCells[e].style.borderWidth="3px");this.allCells=document.getElementsByClassName("player1")},attack(){for(let e=0;e<this.allCellsP2.length;e+=1)this.allCellsP2[e].addEventListener("click",this.attackEvent.bind(this))},attackEvent(e){this.gameLoop.player2.board.recieveAttack(e.target.dataset.col,e.target.dataset.row),this.renderAttacks(this.gameLoop.player2),!1===this.checkGameOver(this.gameLoop.player2,this.gameLoop.player1)&&setTimeout((()=>{this.gameLoop.player1.recieveRandomAttack(),this.renderAttacks(this.gameLoop.player1),this.checkGameOver(this.gameLoop.player1,this.gameLoop.player2)}),300)},checkGameOver(e,t){if(!1===e.board.reportSunk())return!1;this.winner=t.name;for(let e=0;e<this.allCellsP2.length;e+=1)this.allCellsP2[e].style.pointerEvents="none";return this.gameOverScreen(),!0},gameOverScreen(){this.gameOverWrap=document.createElement("div"),this.gameOverWrap.id="gameOverWrap",this.gameOverSpan=document.createElement("span"),this.gameOverSpan.innerText=`${this.winner} Wins!`,this.gameOverSpan.id="gameOverText",this.restartGame=document.createElement("button"),this.restartGame.innerText="Play again",this.restartGame.addEventListener("click",(()=>{this.gameOverWrap.style.display="none",this.clearPage(),this.gamePage(),this.gameLoop.startGame(this.userName.value),this.renderBoard(this.gameLoop.player1),this.attack()})),document.body.appendChild(this.gameOverWrap),this.gameOverWrap.append(this.gameOverSpan,this.restartGame)},orientation:"vertical",placement(){for(let e=0;e<this.allCells.length;e+=1)this.allCells[e].addEventListener("click",(e=>{const{col:t}=e.target.dataset,n=Number(e.target.dataset.row);!0!==this.gameLoop.player1.board.ships.carrier.placed?this.gameLoop.player1.board.placeShip(this.gameLoop.player1.board.ships.carrier,t,n,this.orientation):!0!==this.gameLoop.player1.board.ships.battleship.placed?this.gameLoop.player1.board.placeShip(this.gameLoop.player1.board.ships.battleship,t,n,this.orientation):!0!==this.gameLoop.player1.board.ships.destroyer.placed?this.gameLoop.player1.board.placeShip(this.gameLoop.player1.board.ships.destroyer,t,n,this.orientation):!0!==this.gameLoop.player1.board.ships.submarine.placed?this.gameLoop.player1.board.placeShip(this.gameLoop.player1.board.ships.submarine,t,n,this.orientation):!0!==this.gameLoop.player1.board.ships.patrol.placed&&this.gameLoop.player1.board.placeShip(this.gameLoop.player1.board.ships.patrol,t,n,this.orientation),this.renderBoard(this.gameLoop.player1)}))}}).init()})()})();