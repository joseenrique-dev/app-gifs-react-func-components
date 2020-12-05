import React, { useContext } from 'react'
import GifsContext from '../context/GifsContext';
import Gif from '../components/Gif';

export default function Detail({ match }) {
    const { id } = match.params;
    const { gifs } = useContext(GifsContext)
    console.log('CONTEXT IN DETAILS-->', gifs); 
    const gif =  gifs.find(value => value.id === id );
    
    return <>
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
    </>
}
