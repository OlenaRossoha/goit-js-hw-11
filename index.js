import{a as f,S as m,i}from"./assets/vendor-frHSA4Lh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const p="YOUR_PIXABAY_API_KEY",y="https://pixabay.com/api/";async function g(s){const t={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await f.get(y,{params:t})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new m(".gallery a");function L(s){const t=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:r,views:n,comments:u,downloads:d})=>`
    <li>
      <a href="${a}">
        <img src="${o}" alt="${e}" />
      </a>
      <div>
        <p>Likes: ${r}</p>
        <p>Views: ${n}</p>
        <p>Comments: ${u}</p>
        <p>Downloads: ${d}</p>
      </div>
    </li>`).join("");c.insertAdjacentHTML("beforeend",t),h.refresh()}function w(){c.innerHTML=""}function P(){l.classList.remove("is-hidden")}function S(){l.classList.add("is-hidden")}const b=document.querySelector(".form");b.addEventListener("submit",async s=>{s.preventDefault();const t=s.target.elements["search-text"].value.trim();if(!t){i.error({message:"Please enter a search term!"});return}w(),P();try{const o=await g(t);o.hits.length===0?i.warning({message:"Sorry, there are no images matching your search query. Please try again!"}):L(o.hits)}catch{i.error({message:"Something went wrong. Please try again later."})}finally{S()}});
//# sourceMappingURL=index.js.map
