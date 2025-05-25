import{a as p,S as f,i}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="50483105-27f5d2c3ecd49e5e7204371e4",y="https://pixabay.com/api/";async function g(a){const r={key:m,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await p.get(y,{params:r})).data}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function b(a){const r=a.map(({webformatURL:s,largeImageURL:n,tags:e,likes:t,views:o,comments:u,downloads:d})=>`
    <li class="gallery-item">
      <a href="${n}">
        <img src="${s}" alt="${e}" />
      </a>
      <div class="gallery-info">
        <p><b>Likes:</b> <span>${t}</span></p>
        <p><b>Views:</b> <span>${o}</span></p>
        <p><b>Comments:</b> <span>${u}</span></p>
        <p><b>Downloads:</b> <span>${d}</span></p>
      </div>
    </li>`).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c.innerHTML=""}function w(){l.classList.remove("is-hidden")}function S(){l.classList.add("is-hidden")}const P=document.querySelector(".form");P.addEventListener("submit",async a=>{a.preventDefault();const r=a.target.elements["search-text"].value.trim();if(!r){i.error({message:"Please enter a search term!"});return}L(),w();try{const s=await g(r);s.hits.length===0?i.warning({message:"Sorry, there are no images matching your search query. Please try again!"}):b(s.hits)}catch{i.error({message:"Something went wrong. Please try again later."})}finally{S()}});
//# sourceMappingURL=index.js.map
