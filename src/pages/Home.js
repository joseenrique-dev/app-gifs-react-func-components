import SearchForm from 'components/SearchForm/SearchForm';
import React, { useCallback, useState } from 'react'
import {  useHistory } from 'react-router-dom';
import ListOfGifs from '../components/ListOfGifs/ListOfGifs';
import LazyTrading from '../components/TrendingSearches';

//import TrendingSearches from '../components/TrendingSearches/TrendingSearches';
import { useGifs } from '../hooks/useGifs';

const POPULAR_GIFS = ["Matrix", "Chile", "Colombia","Ecuador"]
export default function Home() {
    
    const history = useHistory()
    const { loading, gifs } = useGifs();

    
    return (
        <div>
            <header className="o-header">
                <SearchForm />          
            </header>
            <div className="App-main">
                <div className="App-results">
                    <h3 className="App-title">Última búsqueda</h3>
                    <ListOfGifs gifs={gifs} />
                </div>
                <div className="App-category">
                    <LazyTrading />
                </div>
            </div>
        </div>
    )
}


