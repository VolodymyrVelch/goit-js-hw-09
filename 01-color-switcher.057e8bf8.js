const e=document.querySelector("body"),t=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");t.addEventListener("click",(function(a){t&&(t.disabled=!0,o.disabled=!1);intervalChangeColor=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),o.addEventListener("click",(()=>{o&&(o.disabled=!0,t.disabled=!1),clearInterval(intervalChangeColor)}));
//# sourceMappingURL=01-color-switcher.057e8bf8.js.map
