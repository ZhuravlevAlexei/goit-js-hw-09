function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("eWCmQ");function l(t,n){const o=Math.random()>.3;new Promise(((e,r)=>{setTimeout((()=>{o?e(t,n):r(t,n)}),n)})).then((({position:t,delay:n})=>{e(i).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`)}))}document.querySelector(".form").addEventListener("submit",(function(e){e.preventDefault();const{elements:{delay:t,step:n,amount:o}}=e.currentTarget;for(let e=0;e<o.value;e+=1)setTimeout((()=>{let o=Number(t.value)+Number(n.value*e);l(e,o)}),n.value)}));
//# sourceMappingURL=03-promises.4b111708.js.map