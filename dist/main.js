!function(e){var t={};function n(l){if(t[l])return t[l].exports;var o=t[l]={i:l,l:!1,exports:{}};return e[l].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,l){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:l})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var l=Object.create(null);if(n.r(l),Object.defineProperty(l,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(l,o,function(t){return e[t]}.bind(null,o));return l},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var l=()=>{document.querySelectorAll(".collapsed"),document.querySelectorAll(".panel-body"),document.querySelectorAll(".panel-heading");document.querySelectorAll(".pannel-collapse")};var o=()=>{let e=document.querySelectorAll("#accordion-two"),t=document.querySelectorAll(".panel-heading"),n=document.querySelectorAll(".collapse");e.forEach(e=>{e.addEventListener("click",e=>{let l=e.target;l=l.closest(".panel-heading"),l&&t.forEach((e,t)=>{e===l&&(e=>{for(let t=0;t<n.length;t++)n[t].style.display=e===t?"block":"none"})(t)}),e.preventDefault()})})};var r=()=>{const e=document.querySelectorAll("[name=user_name]"),t=document.querySelectorAll("[name=user_phone]"),n=document.querySelector("[name=user_quest]"),l=document.querySelectorAll("form");e.forEach(e=>e.addEventListener("input",e=>{let t=e.target;t.value=t.value.replace(/[^а-яА-ЯЁё ]$/gi,"")})),t.forEach(e=>e.addEventListener("input",e=>{let t=e.target;t.value=t.value.replace(/[^+\d]/g,"")})),n.addEventListener("input",e=>{let t=e.target;t.value=t.value.replace(/[^а-яА-ЯЁё.,\?\!\+\-;:() ]$/gi,"")});const o=document.createElement("div");o.style.cssText="font-size: 18px";l.forEach(e=>{e.addEventListener("submit",t=>{t.target;t.preventDefault(),e.appendChild(o),o.textContent="Идёт отправка...";const n=new FormData(e);let l={};n.forEach((e,t)=>{l[t]=e}),o&&setTimeout(()=>o.textContent="",5e3),(e=>fetch("./server.php",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(e)}))(l).then(t=>{if(400===t.status)throw new Error("Data is not found");if(200!==t.status)throw new Error("Status network not 200");o.textContent="Отправлено!",e.reset()}).catch(e=>{o.textContent="Ошибка!",console.error(e)})})})};var c=()=>{let e=document.querySelector(".add-sentence-btn"),t=document.querySelector(".visible-sm-block"),n=document.querySelectorAll(".hidden");e.addEventListener("click",l=>{l.target.matches(".add-sentence-btn")&&(t.classList.toggle("visible-sm-block"),n.forEach(e=>{e.classList.toggle("hidden")}),e.style.display="none")})};(()=>{const e=document.querySelectorAll(".call-btn"),t=document.querySelector(".popup-call"),n=document.querySelector(".popup-discount"),l=document.querySelector(".popup-check"),o=document.querySelector(".popup-consultation"),r=document.querySelectorAll(".popup"),c=document.querySelectorAll(".button");e.forEach(e=>{e.addEventListener("click",e=>{e.target&&(t.style.display="block"),e.preventDefault()})});for(let e=0;e<c.length;e++)c[e].addEventListener("click",e=>{let r=e.target;r.matches(".call-btn")&&(t.style.display="block"),r.matches(".discount-btn")&&(n.style.display="block"),r.matches(".gauging-button")&&(l.style.display="block"),r.matches(".consultation-btn")&&(o.style.display="block")});for(let e=0;e<r.length;e++)r[e].addEventListener("click",t=>{let n=t.target;(n.matches(".popup-close")||n.matches(".popup"))&&(r[e].style.display="none")})})(),l(),o(),r(),c()}]);