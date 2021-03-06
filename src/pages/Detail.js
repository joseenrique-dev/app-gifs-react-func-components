import Spinner from '../components/Spinner/Spinner';
import useSingleGif from 'hooks/useSingleGif';
import React, { useContext } from 'react'
import { Redirect } from 'react-router-dom';
import Gif from '../components/Gif/Gif';
import GifsContext from '../context/GifsContext';
import useTitle from 'hooks/useSEO';


export default function Detail({ match }) {
    const { id } = match.params;
    
    const { gif,isLoading, isError } = useSingleGif({ id })
    const title  = gif ? gif.title : ''
    useTitle({description:`Details: ${title}`,title});
    if(isLoading) return <Spinner />
    if(isError) return <Redirect to='/404' /> 
    if( !gif ) return null
    
    return <>
      <h3 className="App-title">{gif.title}</h3>
      <Gif {...gif} />
    </>
}
