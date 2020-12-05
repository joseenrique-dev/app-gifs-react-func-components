import React, { useState, useEffect } from 'react'
import getTrendingTerms from '../services/getTredingTermsService'
import Category from './Category';
export default function TrendingSearches() {
    const [ trends, setTrends ] = useState([]);

    useEffect(() => {
        getTrendingTerms()
            .then(setTrends)    
    }, [])
    return (
        <Category name='Tendencias' options={trends} />
    )
}
