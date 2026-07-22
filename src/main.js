import { getImagesByQuery }  from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');
const list = document.querySelector('.gallery')

hideLoader();
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();
    
  const  query = form.elements['search-text'].value.trim();

  if (query === '') {
    console.log('Будь ласка, введіть слово для пошуку!');
    return;
  }
    showLoader(); 
  getImagesByQuery(query)
      .then(response => {
      
        list.innerHTML = ``;   
       console.log(response.data.hits);
          if (response.data.hits.length === 0)
              iziToast.error({
                  message: 'Sorry, there are no images matching your search query. Please try again!',
                  position: 'topRight',
                  timeout: 3000
              });
          else {
             
              createGallery(response.data.hits);
              //clearGallery();
          }
  })
  .catch(error => {
    console.log(error);
  })
      
      .finally(() => {
          hideLoader(); 
      });

  form.reset();

}