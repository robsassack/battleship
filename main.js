(()=>{var e={426:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});var n=t(81),o=t.n(n),a=t(645),i=t.n(a)()(o());i.push([e.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n}\r\n\r\nh3 {\r\n  text-align: center;\r\n}\r\n\r\n#gameBoardsContainer {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n  gap: 50px;\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n}\r\n\r\n.cell {\r\n  width: 35px;\r\n  height: 35px;\r\n  outline: 1px solid black;\r\n  background-color: rgb(162, 212, 231);\r\n}\r\n\r\n.ship {\r\n  background-color: rgb(148, 148, 148);\r\n}\r\n\r\n.miss {\r\n  background-color: rgb(255, 255, 255);\r\n}\r\n\r\n.hit {\r\n  background-color: rgb(255, 0, 0);\r\n}\r\n",""]);const s=i},645:e=>{"use strict";e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t="",n=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),n&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=e(r),n&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(e,t,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);n&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var r=[];function t(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function n(e,n){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=n.base?c[0]+n.base:c[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)r[u].references++,r[u].updater(f);else{var h=o(f,n);n.byIndex=s,r.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap&&r.supports===e.supports&&r.layer===e.layer)return;t.update(e=r)}else t.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);r[s].references--}for(var c=n(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}a=c}}},569:e=>{"use strict";var r={};e.exports=function(e,t){var n=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r,e.options),r}},565:(e,r,t)=>{"use strict";e.exports=function(e){var r=t.nc;r&&e.setAttribute("nonce",r)}},795:e=>{"use strict";e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var n="";t.supports&&(n+="@supports (".concat(t.supports,") {")),t.media&&(n+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(n+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),n+=t.css,o&&(n+="}"),t.media&&(n+="}"),t.supports&&(n+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(n,e,r.options)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}},589:e=>{"use strict";e.exports=function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}}},498:e=>{e.exports=()=>{const e=Array(10).fill().map((()=>Array(10).fill(0))),r=[];return{board:e,ships:r,placeShip:(t,n,o,a)=>{if(((r,t,n,o)=>{if("horizontal"===o){for(let o=0;o<r.length;o+=1)if(0!==e[t][n+o])return!0}else for(let o=0;o<r.length;o+=1)if(0!==e[t+o][n])return!0;return!1})(t,n,o,a))throw new Error("Ships cannot overlap");if("horizontal"===a)for(let r=0;r<t.length;r+=1)e[n][o+r]=[t,r];else for(let r=0;r<t.length;r+=1)e[n+r][o]=[t,r];r.push(t)},receiveAttack:(r,t)=>{if(0===e[r][t])e[r][t]=1;else{if(1===e[r][t])throw new Error("Space already attacked");e[r][t][0].hit(e[r][t][1]),e[r][t]="X"}},allSunk:()=>!!r.every((e=>e.isSunk()))}}},507:(e,r,t)=>{const n=t(498);e.exports=()=>({playerBoard:n()})},643:e=>{e.exports=e=>{const r=Array(e).fill(!1);return{length:e,hit:t=>{if(t>=e||t<0)throw new Error("Invalid hit index");r[t]=!0},hits:r,isSunk:()=>!r.includes(!1)}}}},r={};function t(n){var o=r[n];if(void 0!==o)return o.exports;var a=r[n]={id:n,exports:{}};return e[n](a,a.exports,t),a.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.nc=void 0,(()=>{"use strict";var e=t(379),r=t.n(e),n=t(795),o=t.n(n),a=t(569),i=t.n(a),s=t(565),c=t.n(s),l=t(216),d=t.n(l),p=t(589),u=t.n(p),f=t(426),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),r()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const v=t(643),m=t(507),y=document.querySelector("#playerBoard"),g=document.querySelector("#computerBoard");(()=>{const e=m(),r=m();e.playerBoard.placeShip(v(4),3,3,"horizontal"),r.playerBoard.placeShip(v(4),4,5,"vertical");const t=[];for(let e=0;e<10;e+=1)for(let r=0;r<10;r+=1)t.push([e,r]);const n=(r,t)=>{t.textContent="",r.forEach(((n,o)=>{const a=document.createElement("div");a.classList.add("row"),n.forEach(((t,n)=>{const i=document.createElement("div");i.classList.add("cell"),a.appendChild(i),0!==r[o][n]&&"X"!==e.playerBoard.board[o][n]&&i.classList.add("ship"),1===r[o][n]&&i.classList.add("miss"),"X"===r[o][n]&&(i.classList.remove("ship"),i.classList.add("hit"))})),t.appendChild(a)}))};var o,a;n(e.playerBoard.board,y),n(r.playerBoard.board,g),o=r.playerBoard,(a=g).addEventListener("click",(r=>{if(r.target.classList.contains("cell")){const i=[...r.target.parentNode.parentNode.children].indexOf(r.target.parentNode),s=[...r.target.parentNode.children].indexOf(r.target);if(o.receiveAttack(i,s),n(o.board,a),o.allSunk()){alert("You win!");const e=g.cloneNode(!0);g.parentNode.replaceChild(e,g)}else((e,r)=>{const o=t[Math.floor(Math.random()*t.length)],a=o[0],i=o[1];if(e.receiveAttack(a,i),n(e.board,r),t.splice(t.indexOf(o),1),e.allSunk()){alert("Computer wins!");const e=g.cloneNode(!0);g.parentNode.replaceChild(e,g)}})(e.playerBoard,y)}}))})()})()})();