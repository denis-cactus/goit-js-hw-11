import{a as f,i as a,S as g}from"./assets/vendor-BG8zX51N.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const h="48901919-31fb8722d9302fb6f0fb2505f",p="https://pixabay.com/api/",y=o=>f.get(p,{params:{key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data.hits).catch(r=>(console.error(r),a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),[])),b=o=>{const r=document.querySelector(".gallery"),s=o.map(({webformatURL:e,largeImageURL:t,tags:i,likes:c,views:m,comments:u,downloads:d})=>`<a class="gallery-item" href="${t}">
        <div class="image-card">
          <img src="${e}" alt="${i}" loading="lazy" />
          <div class="image-info">
            <ul class="list">
                <li class="list_item">
                <h3 class="item_title">Likes</h3>
                <p class="item_text">${c}</p></li>
                <li class="list_item">
                <h3 class="item_title">Views</h3>
                <p class="item_text">${m}</p></li>
                <li class="list_item">
                <h3 class="item_title">Comments</h3>
                <p class="item_text">${u}</p></li>
                <li class="list_item">
                <h3 class="item_title">Downloads</h3>
                <p class="item_text">${d}</p></li>
            </ul>
          </div>
        </div>
      </a>`).join("");r.insertAdjacentHTML("beforeend",s),new g(".gallery-item").refresh()},_=document.querySelector(".search-form"),S=document.querySelector(".search-input"),L=document.querySelector(".gallery"),n=document.querySelector(".loader");_.addEventListener("submit",o=>{o.preventDefault();const r=S.value.trim();if(!r){a.error({title:"Error",message:"Please enter a search term!"});return}L.innerHTML="",n.style.display="block",y(r).then(s=>{s.length===0?a.warning({title:"",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"#fafafb",position:"topRight",iconUrl:"../img/error.svg"}):b(s)}).catch(s=>{a.error({title:"Error",message:"Something went wrong, please try again later!"}),console.error("Error:",s)}).finally(()=>{n.style.display="none"})});
//# sourceMappingURL=index.js.map
