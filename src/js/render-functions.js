import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import '@fontsource/montserrat/400.css';

const container = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 10,
});


export function createGallery(images){
    
    container.insertAdjacentHTML("beforeend", createMarkup(images));
    lightbox.refresh();
}

export function clearGallery() {
    //lightbox.refresh();
    container.innerHTML = '';
}

const loader = document.querySelector('.loader');

export function showLoader() {
    loader.classList.remove('is-hidden');
}

export function hideLoader() {
    loader.classList.add('is-hidden');
}

function createMarkup(arr) {
    return arr.map(({ webformatURL, largeImageURL, tags,
        likes, views, comments, downloads }) =>
       ` <li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
                <img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy" />
            </a>
            <div class="inf">
                <p class="inf-item"><b>Likes</b><br>${likes}</p>
                <p class="inf-item"><b>Views</b><br>${views}</p>
                <p class="inf-item"><b>Comments</b><br>${comments}</p>
                <p class="inf-item"><b>Downloads</b><br>${downloads}</p>
            </div>
        </li>

    `).join("")
}