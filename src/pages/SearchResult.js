import React from 'react'

export default function SearchResult({match}) {
    
    const { keyword } = match.params;
    const [loading, setLoading] = useState(false);
    const [ gifs, setGifs ] = useState([]);

  useEffect(() => {
    setLoading(true);
    getGifs(keyword).then(gifs => {
        setGifs(gifs)
        setLoading(false);
    })
  }, [keyword])

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
