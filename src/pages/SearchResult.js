import React from 'react'
import ListOfGifs from '../components/ListOfGifs';
import { useGifs } from '../hooks/useGifs';

export default function SearchResult({match}) {
    
    const { keyword } = match.params;
    const { loading, gifs } = useGifs({keyword});
    
    return (
        <div>
            {
                loading 
                ? 'Cargando...' 
                : 
                <>
                    <h3 className="App-title">{ decodeURI(keyword) }</h3>
                    <ListOfGifs gifs={gifs} />
                </>
            }            
        </div>
    )
}
