import React from 'react'
import { Link } from 'react-router-dom';
import './Gif.css';

function Gif({ title, url, id}) {
    //const history = useHistory();
    // const handleGif = () =>{
    //     history.push(`/gif/${id}`);
    // }
    return (
        <div className="Gif">
            <Link  to={`/gif/${id}`} className='Gif-link'>
                <h4>{title}</h4>
                <img alt={title} src={url} />
            </Link>
        </div>
    )
}

export default React.memo(Gif,(prevProps,nextProps) =>{
    return prevProps.id === nextProps.id;
});