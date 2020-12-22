import React from 'react'
import { useHistory } from 'react-router-dom';
import useForm from './hook';



const RATINGS = ['g', 'pg', 'pg-23', 'r'];
function SearchForm({initialKeyword = '', initialRating = 'g'}) {
    
    const {keyword, rating,times, updateKeyword, updateRating} = useForm({ initialKeyword, initialRating })
    
    const history = useHistory()

    const handleChange = e => {
        updateKeyword( e.target.value )
        //dispatch( {type:ACTIONS.UPDATE_KEYWORD, payload: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        history.push(`/search/${keyword}/${rating}`);
    }
    const handleChangeRating = (e) =>{
        //dispatch( {type:ACTIONS.UPDATE_RATING, payload: e.target.value})
        updateRating( e.target.value );
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button>Buscar</button>
                <input type="text" placeholder="Search a gif here ..." onChange={handleChange} value={keyword} />
                <select onChange={handleChangeRating} value={rating}>
                    {
                        RATINGS.map(val => <option key={val}>{val}</option>)
                    }
                </select>
                {times}
            </form>
        </div>
    )
}

export default React.memo(SearchForm);