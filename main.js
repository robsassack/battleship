(()=>{var e={426:(e,n,t)=>{"use strict";t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background-color: rgb(121, 193, 221);\n}\n\nh1 {\n  text-align: center;\n}\n\nh3 {\n  text-align: center;\n}\n\n#gameBoardsContainer {\n  display: flex;\n  flex-wrap: wrap;\n  flex-direction: row;\n  justify-content: center;\n  gap: 50px;\n}\n\n.row {\n  display: flex;\n}\n\n.cell {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  overflow: hidden;\n  width: 35px;\n  height: 35px;\n  outline: 1px solid black;\n  background-color: rgb(162, 212, 231);\n  font-size: 5em;\n  user-select: none;\n}\n\n.ship {\n  background-color: rgb(148, 148, 148);\n}\n\n.miss {\n  color: rgb(255, 255, 255);\n  background-color: rgb(162, 212, 231);\n}\n\n.hit {\n  color: rgb(255, 0, 0);\n  background-color: rgb(148, 148, 148);\n}\n\n.winner-screen {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  border: 1px solid black;\n  border-radius: 10px;\n  background-color: rgb(255, 255, 255, 0.8);\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  top: 25%;\n  width: 200px;\n  text-align: center;\n  padding: 20px;\n}\n\n.winner-screen p {\n  font-size: 2em;\n  font-weight: 1000;\n}\n\n.winner-screen button {\n  font-size: 1em;\n  padding: 5px;\n}\n\n.computer-message, .player-message {\n  margin: 10px;\n  background-color: red;\n  text-align: center;\n  font-size: 1.25em;\n  border: 2px solid black;\n  border-radius: 5px;\n  width: auto;\n  padding: 5px;\n  visibility: hidden;\n}\n",""]);const s=i},645:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var h=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var d=t(a[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=c}}},569:e=>{"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{"use strict";e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},498:e=>{e.exports=()=>{const e=Array(10).fill().map((()=>Array(10).fill(0))),n=[];return{board:e,ships:n,placeShip:(t,r,o,a)=>{if(((n,t,r,o)=>{if("horizontal"===o){for(let o=0;o<n.length;o+=1)if(0!==e[t][r+o])return!0}else for(let o=0;o<n.length;o+=1)if(0!==e[t+o][r])return!0;return!1})(t,r,o,a))throw new Error("Ships cannot overlap");if("horizontal"===a)for(let n=0;n<t.length;n+=1)e[r][o+n]=[t,n];else for(let n=0;n<t.length;n+=1)e[r+n][o]=[t,n];n.push(t)},receiveAttack:(n,t)=>{if(0===e[n][t])e[n][t]=1;else{if(1===e[n][t])throw new Error("Space already attacked");e[n][t][0].hit(e[n][t][1]),e[n][t]=["X",e[n][t][0]]}},allSunk:()=>!!n.every((e=>e.isSunk()))}}},507:(e,n,t)=>{const r=t(498);e.exports=()=>({playerBoard:r()})},643:e=>{e.exports=e=>{const n=Array(e).fill(!1);return{length:e,hit:t=>{if(t>=e||t<0)throw new Error("Invalid hit index");n[t]=!0},hits:n,isSunk:()=>!n.includes(!1)}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{"use strict";var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),c=t.n(s),l=t(216),d=t.n(l),p=t(589),u=t.n(p),f=t(426),h={};h.styleTagTransform=u(),h.setAttributes=c(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),n()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const m=t(643),y=t(507),g=()=>{const e=document.querySelector("#playerBoard"),n=document.querySelector("#computerBoard"),t=document.querySelector(".player-message");t.innerText="",t.style.visibility="hidden";const r=document.querySelector(".computer-message");r.innerText="",r.style.visibility="hidden";const o=y(),a=y(),i=(e,n)=>{let t=Math.floor(2*Math.random());t=0===t?"horizontal":"vertical";let r=0,o=0;"horizontal"===t?(r=Math.floor(Math.random()*(10-n)),o=Math.floor(10*Math.random())):(r=Math.floor(10*Math.random()),o=Math.floor(Math.random()*(10-n)));try{e.placeShip(m(n),r,o,t)}catch(t){i(e,n)}};i(o.playerBoard,5),i(o.playerBoard,4),i(o.playerBoard,3),i(o.playerBoard,3),i(o.playerBoard,2),i(a.playerBoard,5),i(a.playerBoard,4),i(a.playerBoard,3),i(a.playerBoard,3),i(a.playerBoard,2);const s=[];for(let e=0;e<10;e+=1)for(let n=0;n<10;n+=1)s.push([e,n]);const c=(e,n)=>{n.textContent="",e.forEach(((t,r)=>{const o=document.createElement("div");o.classList.add("row"),t.forEach(((n,t)=>{const a=document.createElement("div");a.classList.add("cell"),o.appendChild(a),0!==e[r][t]&&"X"!==e[r][t]&&a.classList.add("ship"),1===e[r][t]&&(a.classList.add("miss"),a.innerText="•"),"X"===e[r][t][0]&&(a.classList.add("hit"),a.innerText="•")})),n.appendChild(o)}))};c(o.playerBoard.board,e),c(a.playerBoard.board,n);const l=e=>{const n=document.createElement("div");n.classList.add("winner-screen"),"human"===e?(n.appendChild(document.createElement("p")),n.querySelector("p").innerText="You win!"):"computer"===e&&(n.appendChild(document.createElement("p")),n.querySelector("p").innerText="Computer wins!");const t=document.createElement("button");t.innerText="Play again?",t.addEventListener("click",(()=>{n.remove(),g()})),n.appendChild(t),document.querySelector("body").appendChild(n)};var d,p;d=a.playerBoard,(p=n).addEventListener("click",(t=>{if(t.target.classList.contains("cell")){const r=[...t.target.parentNode.parentNode.children].indexOf(t.target.parentNode),a=[...t.target.parentNode.children].indexOf(t.target);d.receiveAttack(r,a);const i=document.querySelector(".computer-message");if(i.innerText="",i.style.visibility="hidden","X"===d.board[r][a][0]&&d.board[r][a][1].isSunk()&&(i.innerText=`You sunk a ${d.board[r][a][1].length} length ship!`,i.style.visibility="visible"),c(d.board,p),d.allSunk()){const e=n.cloneNode(!0);n.parentNode.replaceChild(e,n),l("human")}else((e,t)=>{const r=s[Math.floor(Math.random()*s.length)],o=r[0],a=r[1];e.receiveAttack(o,a);const i=document.querySelector(".player-message");if(i.innerText="",i.style.visibility="hidden","X"===e.board[o][a][0]&&e.board[o][a][1].isSunk()&&(i.innerText=`Computer sunk a ${e.board[o][a][1].length} length ship!`,i.style.visibility="visible"),c(e.board,t),s.splice(s.indexOf(r),1),e.allSunk()){const e=n.cloneNode(!0);n.parentNode.replaceChild(e,n),l("computer")}})(o.playerBoard,e)}}))};g()})()})();