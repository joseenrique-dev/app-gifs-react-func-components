import React, { useEffect, useState } from 'react'
import getGifs from '../services/getGifs'
import Gif from './Gif'



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
