import"./assets/modulepreload-polyfill-3cfb730f.js";import{f as h,i as u}from"./assets/vendor-77e16229.js";const i=document.querySelector("#datetime-picker"),s=document.querySelector(".timer"),o=document.querySelector("[data-start]");let c;o.disabled=!0;const S={enableTime:!0,time_24hr:!0,defaultDate:Date.now(),minuteIncrement:1,onClose(t){if(c=t[0],c<Date.now()){b(),o.disabled=!0;return}o.disabled=!1}};h(i,S);o.addEventListener("click",y);function y(){o.disabled=!0,i.disabled=!0;const t=setInterval(()=>{const e=c-Date.now(),{days:n,hours:r,minutes:d,seconds:a}=g(e);p(n,r,d,a),e<900&&(clearInterval(t),i.disabled=!1,q())},1e3)}function p(t,e,n,r){s.querySelector("[data-days]").textContent=String(t).padStart(2,"0"),s.querySelector("[data-hours]").textContent=String(e).padStart(2,"0"),s.querySelector("[data-minutes]").textContent=String(n).padStart(2,"0"),s.querySelector("[data-seconds]").textContent=String(r).padStart(2,"0")}function g(t){const a=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),f=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:l,minutes:m,seconds:f}}function b(){return u.error({title:"Error",message:"Please choose a date in future",position:"topRight"})}function q(){return u.success({title:"Ok",message:"Success",position:"topRight"})}
//# sourceMappingURL=commonHelpers.js.map
