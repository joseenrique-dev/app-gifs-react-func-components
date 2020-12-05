import React, { useState } from 'react'
import { BrowserRouter, Link, useHistory } from 'react-router-dom';
import ListOfGifs from '../components/ListOfGifs';
import TrendingSearches from '../components/TrendingSearches';
import { useGifs } from '../hooks/useGifs';

const POPULAR_GIFS = ["Matrix", "Chile", "Colombia","Ecuador"]
export default function Home() {
    const [ keyword, setKeyword ] = useState('');
    const history = useHistory()
    const { loading, gifs } = useGifs();
    const handleSubmit = e =>{
        e.preventDefault();
        history.push(`/search/${keyword}`);
    }
    const handleChange = e =>{
        setKeyword(e.target.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button>Buscar</button>
                <input type="text" placeholder="Search a gif here ..." onChange={handleChange} value={keyword} />
            </form>            
            <div className="App-main">
                <div className="App-results">
                    <h3 className="App-title">Última búsqueda</h3>
                    <ListOfGifs gifs={gifs} />
                </div>
                <div className="App-category">
                    <TrendingSearches />
                </div>
            </div>
        </div>
    )
}
