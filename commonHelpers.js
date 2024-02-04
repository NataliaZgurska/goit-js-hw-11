import{S as m,i as f}from"./assets/vendor-9310f15c.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const u=document.querySelector(".form-search"),l=document.querySelector(".gallery"),a=document.querySelector(".loader-container");a.style.display="none";u.addEventListener("submit",d);function d(s){s.preventDefault();const o=s.target.elements.text.value;o!==""&&(l.innerHTML="",a.style.display="flex",g(o).then(function({hits:r}){if(r.length>0){const n=r.map(p).join("");l.innerHTML=n,new m(".gallery a",{captionDelay:250,captionsData:"alt",showCounter:!1}).refresh()}else c()}).catch(function(r){c()}).finally(function(){u.reset(),a.style.display="none"}))}function g(s){const o="https://pixabay.com/api",r="/?key=42190673-143cbde4cd6a94de75e31d0a4",n=`&q=${s}`,e="&image_type=photo&orientation=horizontal&safesearch=true",t=o+r+n+e;return fetch(t).then(i=>i.json())}function p({webformatURL:s,largeImageURL:o,tags:r,likes:n,views:e,comments:t,downloads:i}){return` 
  <a href="${o}" class="gallery-link">
     <figure>
      <img src="${s}" alt="${r}" class="gallery-image">
      <figcaption class="gallery-figcaption">
        <div class="image-item">Likes <span class="image-elem">${n}</span></div>
        <div class="image-item">Views <span class="image-elem">${e}</span></div>
        <div class="image-item">Comments <span class="image-elem">${t}</span></div>
        <div class="image-item">Downloads <span class="image-elem">${i}</span></div>
  </figcaption>
  </figure>
</a >`}function c(){f.show({close:!0,message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",messageSize:"10px",backgroundColor:"#B51B1B",position:"topLeft",close:!0,timeout:1e4,progressBarColor:"#FFFFFF",maxWidth:"380px"})}
//# sourceMappingURL=commonHelpers.js.map
