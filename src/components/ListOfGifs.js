import React, { useEffect, useState } from 'react'
import getGifs from '../services/getGifs'
import Gif from './Gif'



export default function ListOfGifs({match}) {
    const [ gifs, setGifs ] = useState([]);
    const [loading, setLoading] = useState(false);
    const { keyword } = match.params;

  useEffect(() => {
      setLoading(true);
    getGifs(keyword).then(gifs => {
        setGifs(gifs)
        setLoading(false);
    })
    console.log('GIFTSSSS', gifs)
  }, [keyword])

    if(loading){
        return <h1>Cargando...</h1>
    } 
    return gifs.map( singleGift =>
                    <Gif 
                        key={singleGift.id}
                        title={singleGift.title} 
                        url={singleGift.url} 
                        id={singleGift.id} 
                    />)
}
