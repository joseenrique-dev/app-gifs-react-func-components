const API_KEY = 'QWggCM1TOk6DJiwY3SNgZt4ToU2kpe1j'

export default function getGifs( {keyword}={} ){
    
    const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`;

    return fetch( API_URL )
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