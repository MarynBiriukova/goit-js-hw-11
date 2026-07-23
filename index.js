import{a as m,S as p,i as u}from"./assets/vendor-DQ7_booQ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g="56805878-027de20508c9ad327df537561";async function y(i){return(await m.get(`https://pixabay.com/api/?key=${g}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true&per_page=9`)).data}const a=document.querySelector(".gallery"),f=new p(".gallery a",{captionsData:"alt",captionDelay:10});function h(i){a&&(a.insertAdjacentHTML("beforeend",S(i)),f.refresh())}function b(){a&&(a.innerHTML=""),f.refresh()}const c=document.querySelector(".loader");function L(){c&&c.classList.remove("is-hidden")}function $(){c&&c.classList.add("is-hidden")}function S(i){return i.map(({webformatURL:r,largeImageURL:o,tags:s,likes:e,views:t,comments:n,downloads:d})=>` <li class="gallery-item">
            <a class="gallery-link" href="${o}">
                <img class="gallery-image" src="${r}" alt="${s}" loading="lazy" />
            </a>
            <div class="inf">
                <p class="inf-item"><b>Likes</b><br>${e}</p>
                <p class="inf-item"><b>Views</b><br>${t}</p>
                <p class="inf-item"><b>Comments</b><br>${n}</p>
                <p class="inf-item"><b>Downloads</b><br>${d}</p>
            </div>
        </li>

    `).join("")}const l=document.querySelector(".form");l.addEventListener("submit",v);function v(i){i.preventDefault();const r=l.elements["search-text"].value.trim();if(console.log(`|${r}|`),r===""){console.log("Будь ласка, введіть слово для пошуку!");return}L(),b(),y(r).then(o=>{console.log(o.hits),o.hits.length===0?u.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:3e3}):h(o.hits)}).catch(o=>{console.log(o),u.error({title:"Error",message:"Something went wrong. Check your internet connection or try again later!",position:"topRight",timeout:3e3})}).finally(()=>{$()}),l.reset()}
//# sourceMappingURL=index.js.map
