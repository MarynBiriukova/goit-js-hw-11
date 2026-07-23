import { getImagesByQuery }  from './js/pixabay-api';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions';

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(evt) {
    evt.preventDefault();
    
  const  query = form.elements['search-text'].value.trim();
  console.log(`|${query}|`);
  if (query === "") {
    console.log("Будь ласка, введіть слово для пошуку!");
    return;
  }
  showLoader();
  clearGallery();
  getImagesByQuery(query)
      .then(response => {
      
       console.log(response.hits);
          if (response.hits.length === 0)
              iziToast.error({
                  message: 'Sorry, there are no images matching your search query. Please try again!',
                  position: 'topRight',
                  timeout: 3000
              });
          else {
             
              createGallery(response.hits);
          }
  })
  .catch(error => {
    console.log(error);
    iziToast.error({
           title: 'Error',
           message: 'Something went wrong. Check your internet connection or try again later!',
           position: 'topRight',
           timeout: 3000
       });
  })
      
      .finally(() => {
          hideLoader(); 
      });

  form.reset();

}