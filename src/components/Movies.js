import React from 'react';
import { movies } from '../data';

class Movies extends React.Component {

  generateMovies(){
    const movieComps = movies.map((movieObj) => {
      return <div>
        <h1>
          Name:{movieObj.title}
        </h1>
        <p>
          Time: {movieObj.time}
        </p>
          Genres: 
              {movieObj.genres.forEach(movieGenre => { 
              return <li>{movieGenre}</li>
          })}
      </div>
    })
    return movieComps
  }
  render(){
    return(
      <div>
        <h1>Movies Page</h1>
        {this.generateMovies()}
      </div>
    )
  }
}

export default Movies;
