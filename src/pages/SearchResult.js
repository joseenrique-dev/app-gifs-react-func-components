import React from 'react'
import ListOfGifs from '../components/ListOfGifs/ListOfGifs';
import Spinner from '../components/Spinner/Spinner';
import { useGifs } from '../hooks/useGifs';

export default function SearchResult({match}) {
    
    const { keyword } = match.params;
    const { loading, gifs, setPage } = useGifs({keyword});
    const handleNextPage = () =>{
        setPage(prevPage => prevPage + 1)
    }
    return (
        <div>
            {
                loading 
                ? <Spinner /> 
                : 
                <>
                    <h3 className="App-title">{ decodeURI(keyword) }</h3>
                    <ListOfGifs gifs={gifs} />
                </>
            }      
            <br />
            <button onClick={handleNextPage} >Get to Next Page</button>
        </div>
    )
}
