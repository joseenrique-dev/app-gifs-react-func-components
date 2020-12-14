import { API_KEY, API_URL } from './settings';


const fromApiResponseToGifs = apiResponse =>{
  const { data = [] } = apiResponse;
  return data;
}
export default function getTredingTerms(){
    
    const apiUrl = `${API_URL}/trending/searches?api_key=${API_KEY}`;

    return fetch( apiUrl )
      .then(res => res.json())
      .then(fromApiResponseToGifs);
}