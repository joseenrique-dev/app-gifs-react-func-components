import React, { useContext, useEffect, useState } from 'react'
import getGifs from '../services/getGifs';
import GifsContext from '../context/GifsContext';

const INITIAL_PAGE = 0;
export function useGifs({ keyword, rating } = {keyword: null}) {

    const [loading, setLoading] = useState(false);
    const [loadingNextPage, setLoadingNextPage] = useState(false);
    const { gifs, setGifs }  = useContext(GifsContext);
    const [ page, setPage ] = useState(INITIAL_PAGE);
    const keywordToUse = keyword || 
        localStorage.getItem('lastKeyword') ||
        'random';

  useEffect(() => {
    setLoading(true);

    console.log('KEYWORD TO USE -->', keywordToUse);
    getGifs({keyword: keywordToUse, rating}).then(gifs => {
    
        setGifs(gifs)
        setLoading(false);
        localStorage.setItem('lastKeyword', keyword);
    })
  }, [keyword, keywordToUse, setGifs, rating])


  
  useEffect(()=>{
    if(page === INITIAL_PAGE ) return

    setLoadingNextPage(false);
    getGifs({keyword: keywordToUse,rating, page})
      .then(nextGifs => {
      setLoadingNextPage(true);
      setGifs(prevGifs => prevGifs.concat(nextGifs));
    })  
  },[keywordToUse, page, setGifs, rating])

  return {loading,loadingNextPage ,gifs, page, setPage};
}
