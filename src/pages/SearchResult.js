import useNearScreen from '../hooks/useNearScreen';
import debounce from 'just-debounce-it';
import React,{ useEffect, useCallback, useRef } from 'react'
import ListOfGifs from '../components/ListOfGifs/ListOfGifs';
import Spinner from '../components/Spinner/Spinner';
import { useGifs } from '../hooks/useGifs';
import useTitle from 'hooks/useSEO';

export default function SearchResult({match}) {
    
    const { keyword } = match.params;
    const { loading, gifs, setPage } = useGifs({keyword});
    const visorRef  = useRef();
    const { isNearScreen } = useNearScreen({externalRef: !loading && visorRef, once:false});
    const title = gifs ? `${gifs.length} resultados de ${keyword}` : '';
    useTitle({title });
    const debounceHanldeNextPage = useCallback(debounce(
        () =>setPage(prevPage => prevPage + 1),2000
    ),[])

    useEffect(() => {
        console.log('DEBOUNCE', isNearScreen)
        if( isNearScreen ){
            debounceHanldeNextPage()
        }        
    })

    return (
        <div>
            {
                loading 
                ? <Spinner /> 
                : 
                <>
                    <h3 className="App-title">
                        { decodeURI(keyword) }
                    </h3>
                    <ListOfGifs gifs={gifs} />
                    <div id="visor" ref={visorRef }></div>
                </>
            }      
        </div>
    )
}
