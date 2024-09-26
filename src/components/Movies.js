import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map (movie=>{return (<div><p>Title:{movie.title};</p><p>Time:{movie.time};</p><p>Genres:
        {movie.genres.map(genre=>{return (<ul>{genre}</ul>)})}</p></div>)} )}
    </div>
  );
};

export default Movies;
