import React from 'react';
import { movies } from '../data';

class Movies extends React.Component {

  // generateMovies(){
  //   const movieComps = movies.map((movieObj) => {
  //     return <div>
  //       <h1>
  //         Name:{movieObj.title}
  //       </h1>
  //       <p>
  //         Time: {movieObj.time}
  //       </p>
  //         Genres: 
  //             {movieObj.genres.forEach(movieGenre => { 
  //             return <li>{movieGenre}</li>
  //         })}
  //     </div>
  //   })
  //   return movieComps
  // }
  render(){
    return(
      <div>
        <h1>Movies Page</h1>
        {movies.map((movie) =>  <div>
          <h3>Name: {movie.title}</h3> 
          <p> Time: {movie.time}</p>
          <p>Genres: {movie.genres.map((genre) => <ul><li>{genre}</li></ul>)}</p>
          </div>)}
      </div>
    );
  }
}
        /* {this.generateMovies()} */  


export default Movies;
