import { API_KEY, API_URL } from './settings';

const fromApiResponseToGifs = apiResponse => {
  const { data } = apiResponse
  const {images, title, id} = data
  const { url } = images.downsized_medium
  return { title, id, url }  
}

export default function getSingleGifs( { id } ){
    
    const apiUrl = `${API_URL}/gifs/${id}?api_key=${API_KEY}`;
    return fetch( apiUrl )
      .then(res => res.json())
      .then(fromApiResponseToGifs);
}