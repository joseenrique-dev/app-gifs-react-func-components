import React from "react";
import { Link } from 'react-router-dom';

import "./Category.css";

export default function Category({ name, options = [] }) {
  return (
    <div className='Category'>
      <h3 className="Category-title">{name}</h3>
      <ul className="Category-list" style={{listStyle:'none'}}>
        {options.map((singleOption) => (
          <li key={singleOption} style={{listStyle:'none'}}>
            <Link className="Category-link" to={`/search/${singleOption}`}>
              {singleOption}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}