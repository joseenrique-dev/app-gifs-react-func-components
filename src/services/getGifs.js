import { API_KEY, API_URL } from './settings';


export default function getGifs( {keyword}={} ){
    
    const apiUrl = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

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