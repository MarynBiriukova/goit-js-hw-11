import{a as d,S as f,i as m}from"./assets/vendor-CFy_D_Sh.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const p="56805878-027de20508c9ad327df537561";function y(o){return d.get(`https://pixabay.com/api/?key=${p}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true&per_page=9`)}const g=document.querySelector(".gallery"),h=new f(".gallery a",{captionsData:"alt",captionDelay:10});function b(o){g.insertAdjacentHTML("beforeend",S(o)),h.refresh()}const l=document.querySelector(".loader");function L(){l.classList.remove("is-hidden")}function c(){l.classList.add("is-hidden")}function S(o){return o.map(({webformatURL:i,largeImageURL:r,tags:n,likes:e,views:t,comments:s,downloads:u})=>` <li class="gallery-item">
            <a class="gallery-link" href="${r}">
                <img class="gallery-image" src="${i}" alt="${n}" loading="lazy" />
            </a>
            <div class="inf">
                <p class="inf-item"><b>Likes</b><br>${e}</p>
                <p class="inf-item"><b>Views</b><br>${t}</p>
                <p class="inf-item"><b>Comments</b><br>${s}</p>
                <p class="inf-item"><b>Downloads</b><br>${u}</p>
            </div>
        </li>

    `).join("")}const a=document.querySelector(".form"),$=document.querySelector(".gallery");c();a.addEventListener("submit",q);function q(o){o.preventDefault();const i=a.elements["search-text"].value.trim();if(i===""){console.log("Будь ласка, введіть слово для пошуку!");return}L(),y(i).then(r=>{$.innerHTML="",console.log(r.data.hits),r.data.hits.length===0?m.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3}):b(r.data.hits)}).catch(r=>{console.log(r)}).finally(()=>{c()}),a.reset()}
//# sourceMappingURL=index.js.map
