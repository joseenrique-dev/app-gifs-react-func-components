import { API_KEY, API_URL } from './settings';

const INITIAL_PAGE = 0;
export default function getGifs( {keyword, limit =25, page = INITIAL_PAGE}={} ){
    
    const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${limit * page}&rating=g&lang=en`;

    return fetch( apiUrl )
      .then(res => res.json())
      .then(response=>{
        const { data } = response;

        if(Array.isArray(data)){
          const gifs = data.map( image =>{
              const { images, title, id } = image;
              const { url } = images.downsized_medium
              return {title, id, url};
               })
          return gifs;
        }
      });
}