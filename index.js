import{a as f,S as p,i as n}from"./assets/vendor-CNqCr-V-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="53582990-021f86ccd386d56203414afea",d="https://pixabay.com/api/",y={key:m,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40};async function g(s){if(typeof s!="string")throw new Error("Query must be a string");const o={...y,q:s.trim()};return(await f.get(d,{params:o})).data}const c=document.querySelector(".gallery"),a=document.querySelector(".loader"),h=new p(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function b(s){if(!Array.isArray(s)||s.length===0)return;const o=s.map(t=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${t.largeImageURL}">
        <img
          class="gallery-image"
          src="${t.webformatURL}"
          alt="${t.tags}"
          loading="lazy"
        />
      </a>
      <div class="info">
        <p class="info-item"><b>Likes:</b> ${t.likes}</p>
        <p class="info-item"><b>Views:</b> ${t.views}</p>
        <p class="info-item"><b>Comments:</b> ${t.comments}</p>
        <p class="info-item"><b>Downloads:</b> ${t.downloads}</p>
      </div>
    </li>`).join("");c.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){c&&(c.innerHTML="")}function w(){a&&a.classList.add("is-visible")}function v(){a&&a.classList.remove("is-visible")}const u=document.querySelector(".form"),S=u.querySelector('input[name="search-text"]');document.querySelector(".gallery");u.addEventListener("submit",s=>{s.preventDefault();const o=S.value.trim();if(o===""){n.warning({title:"Warning",message:"Please enter a search query",position:"topRight"});return}L(),w(),g(o).then(t=>{const i=t.hits??[];if(!Array.isArray(i)||i.length===0){n.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(i),n.success({title:"Done",message:`Found ${i.length} images`,position:"topRight"})}).catch(t=>{console.error(t),n.error({title:"Error",message:"Something went wrong while fetching images.",position:"topRight"})}).finally(()=>{v()})});
//# sourceMappingURL=index.js.map
