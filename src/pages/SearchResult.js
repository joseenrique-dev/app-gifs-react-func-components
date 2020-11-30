import React, { useEffect, useState } from 'react'
import ListOfGifs from '../components/ListOfGifs';
import { useGifs } from '../hooks/useGifs';

import getGifs from '../services/getGifs'

export default function SearchResult({match}) {
    
    const { keyword } = match.params;
    const { loading, gifs } = useGifs({keyword});
    
    return (
        <div>
            {
                loading 
                ? 'Cargando...' 
                : <ListOfGifs gifs={gifs} />
            }            
        </div>
    )
}
