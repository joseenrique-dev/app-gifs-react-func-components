import { useState,useEffect } from 'react';
import getSingleGifs from 'services/getSingleGifs';

import { useGifs } from './useGifs';

export default function useSingleGif( {id} ){
    const {gifs} = useGifs();   
    
    const gifFromCache = gifs.find(gif => gif.id === id);

    const [ gif, setGif ] = useState(gifFromCache);
    const [isLoading, setIsLoading] = useState(false);
    const [isError,setIsError] = useState(false)

    useEffect(() => {
        if( !gif ){
            setIsLoading(true)
            getSingleGifs({ id })
                .then(gif => {
                setGif(gif)
                setIsLoading(false)
                setIsError(false)
                }).catch(err => {
                setIsLoading(false)
                setIsError(true)
                })

        }
    }, [gif, id])
    
    return {gif,isLoading, isError}
}
