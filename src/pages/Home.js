import React, { useState } from 'react'
import { BrowserRouter, Link, useHistory } from 'react-router-dom';

const POPULAR_GIFS = ["Matrix", "Chile", "Colombia","Ecuador"]
export default function Home() {
    const [ keyword, setKeyword ] = useState('');
    const history = useHistory()
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
                <input type="text" placeholder="Search a gif here ..." onChange={handleChange} />
                <input type="submit" value="Buscar" />
            </form>

            <h3 className="App-title">Los Gif más Populares</h3>
            <ul>
                
                {
                    POPULAR_GIFS.map((popularGif) =>(
                        <li key={popularGif}>
                            <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                        </li>
                    ))
                }
                    
                
            </ul>
        </div>
    )
}
