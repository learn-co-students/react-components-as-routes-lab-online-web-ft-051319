import React from 'react';
import { movies } from '../data';

const Movies = () => {


  const mapped = movies.map(movie => {
    return (
    <div key={movie.title} className="movie">
      <strong><p>Name: {movie.title}</p></strong>
      <h4>Time: {movie.time}</h4>
      <h4>Genres:</h4>
      <ul>
        {movie.genres.map((genre, idx) => {return(<li key={idx}>{genre}</li>)})}
      </ul>
    </div>)
  })

  return (
    <div>
      <h1>Movies Page</h1>
      {mapped}
    </div>
  );
};

export default Movies;
