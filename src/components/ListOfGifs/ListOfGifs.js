import React from 'react';
import Gif from '../Gif/Gif';
import './ListOfGifs.css';



export default function ListOfGifs({gifs}) {    
    
    return <div className="ListOfGifs">
        {
            gifs.map( singleGift =>
                    <Gif 
                        key={singleGift.id}
                        title={singleGift.title} 
                        url={singleGift.url} 
                        id={singleGift.id} 
                    />)
        }
    </div>
        
}
