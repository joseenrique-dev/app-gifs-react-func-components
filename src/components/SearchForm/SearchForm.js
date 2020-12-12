import React from 'react'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

function SearchForm({ onSubmit }) {
    const [ keyword, setKeyword ] = useState('');
    const history = useHistory()
    
    const handleChange = e =>{
        setKeyword(e.target.value);
    } 
    const handleSubmit = e =>{
        e.preventDefault();
        //navegar a otra ruta
        onSubmit({keyword}) //llamo a la funcion q esta en home y allá se redirecciona
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button>Buscar</button>
                <input type="text" placeholder="Search a gif here ..." onChange={handleChange} value={keyword} />
            </form> 
        </div>
    )
}

export default React.memo(SearchForm);