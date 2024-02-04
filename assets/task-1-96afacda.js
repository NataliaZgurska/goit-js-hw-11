import{S as l}from"./vendor-c9def49e.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c=document.querySelector(".form-search"),a=document.querySelector(".gallery");c.addEventListener("submit",m);function m(n){n.preventDefault();const i=n.target.elements.text.value;console.log(i),i!==""&&(a.innerHTML="",u(i).then(r=>{f(r)}),n.target.reset())}function u(n){const i="https://pixabay.com/api",r="/?key=42190673-143cbde4cd6a94de75e31d0a4",o=`&q=${n}`,e="&image_type=photo&orientation=horizontal&safesearch=true",t=i+r+o+e;return fetch(t).then(s=>s.json())}function f(n){const i=n.hits.map(d).join("");a.innerHTML=i,new l(".gallery a")}function d({webformatURL:n,largeImageURL:i,tags:r,likes:o,views:e,comments:t,downloads:s}){return` 
  <a href="${i}" class="gallery-link">
     <figure>
      <img src="${n}" alt="${r}" class="gallery-image">
      <figcaption class="gallery-figcaption">
        <div class="image-item">Likes <span class="image-elem">${o}</span></div>
        <div class="image-item">Views <span class="image-elem">${e}</span></div>
        <div class="image-item">Comments <span class="image-elem">${t}</span></div>
        <div class="image-item">Downloads <span class="image-elem">${s}</span></div>
  </figcaption>
  </figure>
</a >`}
//# sourceMappingURL=task-1-96afacda.js.map
