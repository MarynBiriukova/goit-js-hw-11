const API_KEY = "56805878-027de20508c9ad327df537561";
import axios from 'axios';

export function getImagesByQuery(query) {
   return axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&per_page=9`);
}        
  
    



