import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => (
        <div>
          <h3>{director.name}</h3>
          <p>Movies:</p>
          {director.movies.map(movie => (
              <li>{movie}</li>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Directors
