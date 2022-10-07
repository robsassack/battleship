(()=>{var r={426:(r,e,t)=>{"use strict";t.d(e,{Z:()=>c});var n=t(81),o=t.n(n),a=t(645),i=t.n(a)()(o());i.push([r.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  background-color: rgb(121, 193, 221);\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n}\r\n\r\nh3 {\r\n  text-align: center;\r\n}\r\n\r\n#gameBoardsContainer {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  gap: 50px;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n}\r\n\r\n.cell {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  overflow: hidden;\r\n  width: 35px;\r\n  height: 35px;\r\n  outline: 1px solid black;\r\n  background-color: rgb(162, 212, 231);\r\n  font-size: 5em;\r\n  user-select: none;\r\n}\r\n\r\n.ship {\r\n  background-color: rgb(148, 148, 148);\r\n}\r\n\r\n.miss {\r\n  color: rgb(255, 255, 255);\r\n  background-color: rgb(162, 212, 231);\r\n}\r\n\r\n.hit {\r\n  color: rgb(255, 0, 0);\r\n  background-color: rgb(148, 148, 148);\r\n}\r\n",""]);const c=i},645:r=>{"use strict";r.exports=function(r){var e=[];return e.toString=function(){return this.map((function(e){var t="",n=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),n&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=r(e),n&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(r,t,n,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<r.length;l++){var d=[].concat(r[l]);n&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:r=>{"use strict";r.exports=function(r){return r[1]}},379:r=>{"use strict";var e=[];function t(r){for(var t=-1,n=0;n<e.length;n++)if(e[n].identifier===r){t=n;break}return t}function n(r,n){for(var a={},i=[],c=0;c<r.length;c++){var s=r[c],l=n.base?s[0]+n.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var h=o(f,n);n.byIndex=c,e.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(r,e){var t=e.domAPI(e);return t.update(r),function(e){if(e){if(e.css===r.css&&e.media===r.media&&e.sourceMap===r.sourceMap&&e.supports===r.supports&&e.layer===r.layer)return;t.update(r=e)}else t.remove()}}r.exports=function(r,o){var a=n(r=r||[],o=o||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=n(r,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},569:r=>{"use strict";var e={};r.exports=function(r,t){var n=function(r){if(void 0===e[r]){var t=document.querySelector(r);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(r){t=null}e[r]=t}return e[r]}(r);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},216:r=>{"use strict";r.exports=function(r){var e=document.createElement("style");return r.setAttributes(e,r.attributes),r.insert(e,r.options),e}},565:(r,e,t)=>{"use strict";r.exports=function(r){var e=t.nc;e&&r.setAttribute("nonce",e)}},795:r=>{"use strict";r.exports=function(r){var e=r.insertStyleElement(r);return{update:function(t){!function(r,e,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,o&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(n,r,e.options)}(e,r,t)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(e)}}}},589:r=>{"use strict";r.exports=function(r,e){if(e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}},498:r=>{r.exports=()=>{const r=Array(10).fill().map((()=>Array(10).fill(0))),e=[];return{board:r,ships:e,placeShip:(t,n,o,a)=>{if(((e,t,n,o)=>{if("horizontal"===o){for(let o=0;o<e.length;o+=1)if(0!==r[t][n+o])return!0}else for(let o=0;o<e.length;o+=1)if(0!==r[t+o][n])return!0;return!1})(t,n,o,a))throw new Error("Ships cannot overlap");if("horizontal"===a)for(let e=0;e<t.length;e+=1)r[n][o+e]=[t,e];else for(let e=0;e<t.length;e+=1)r[n+e][o]=[t,e];e.push(t)},receiveAttack:(e,t)=>{if(0===r[e][t])r[e][t]=1;else{if(1===r[e][t])throw new Error("Space already attacked");r[e][t][0].hit(r[e][t][1]),r[e][t]="X"}},allSunk:()=>!!e.every((r=>r.isSunk()))}}},507:(r,e,t)=>{const n=t(498);r.exports=()=>({playerBoard:n()})},643:r=>{r.exports=r=>{const e=Array(r).fill(!1);return{length:r,hit:t=>{if(t>=r||t<0)throw new Error("Invalid hit index");e[t]=!0},hits:e,isSunk:()=>!e.includes(!1)}}}},e={};function t(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={id:n,exports:{}};return r[n](a,a.exports,t),a.exports}t.n=r=>{var e=r&&r.__esModule?()=>r.default:()=>r;return t.d(e,{a:e}),e},t.d=(r,e)=>{for(var n in e)t.o(e,n)&&!t.o(r,n)&&Object.defineProperty(r,n,{enumerable:!0,get:e[n]})},t.o=(r,e)=>Object.prototype.hasOwnProperty.call(r,e),t.nc=void 0,(()=>{"use strict";var r=t(379),e=t.n(r),n=t(795),o=t.n(n),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),d=t.n(l),p=t(589),u=t.n(p),f=t(426),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),e()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const v=t(643),y=t(507),m=document.querySelector("#playerBoard"),g=document.querySelector("#computerBoard");(()=>{const r=y(),e=y();r.playerBoard.placeShip(v(3),3,3,"horizontal"),e.playerBoard.placeShip(v(5),4,2,"vertical"),e.playerBoard.placeShip(v(4),2,2,"horizontal"),e.playerBoard.placeShip(v(3),7,7,"horizontal"),e.playerBoard.placeShip(v(3),0,0,"vertical"),e.playerBoard.placeShip(v(2),5,6,"vertical");const t=[];for(let r=0;r<10;r+=1)for(let e=0;e<10;e+=1)t.push([r,e]);const n=(e,t)=>{t.textContent="",e.forEach(((n,o)=>{const a=document.createElement("div");a.classList.add("row"),n.forEach(((t,n)=>{const i=document.createElement("div");i.classList.add("cell"),a.appendChild(i),0!==e[o][n]&&"X"!==r.playerBoard.board[o][n]&&i.classList.add("ship"),1===e[o][n]&&(i.classList.add("miss"),i.innerText="•"),"X"===e[o][n]&&(i.classList.add("hit"),i.innerText="•")})),t.appendChild(a)}))};var o,a;n(r.playerBoard.board,m),n(e.playerBoard.board,g),o=e.playerBoard,(a=g).addEventListener("click",(e=>{if(e.target.classList.contains("cell")){const i=[...e.target.parentNode.parentNode.children].indexOf(e.target.parentNode),c=[...e.target.parentNode.children].indexOf(e.target);if(o.receiveAttack(i,c),n(o.board,a),o.allSunk()){alert("You win!");const r=g.cloneNode(!0);g.parentNode.replaceChild(r,g)}else((r,e)=>{const o=t[Math.floor(Math.random()*t.length)],a=o[0],i=o[1];if(r.receiveAttack(a,i),n(r.board,e),t.splice(t.indexOf(o),1),r.allSunk()){alert("Computer wins!");const r=g.cloneNode(!0);g.parentNode.replaceChild(r,g)}})(r.playerBoard,m)}}))})()})()})();