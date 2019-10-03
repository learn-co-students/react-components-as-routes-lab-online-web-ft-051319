import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie, index) =>
        <div className="movie" key={index}>
          <p>{movie.title}</p>
          <p>{movie.genres}</p>
          <p>{movie.time}</p>
        </div>
        )}
    </div>
  );
};

export default Movies;
