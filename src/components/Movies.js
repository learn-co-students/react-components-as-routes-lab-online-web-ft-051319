import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(m => (
          <div key={m.title} >
            <h3>{m.title}</h3>
            <p><strong>Runtime: </strong>{m.time}</p>
            <ul><strong>Genres: </strong>{m.genres.join(', ')}</ul>
          </div>
        ))}
    </div>
  );
};

export default Movies;
