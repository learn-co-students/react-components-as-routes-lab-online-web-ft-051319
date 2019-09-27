import React from 'react';
import { directors } from '../data';

const Directors = () => {

  const mapped = directors.map(director => {
    return (
    <div key={director.name} className="director">
      <strong><p>Name: {director.name}</p></strong>
      <h4>Movies:</h4>
      <ul>
        {director.movies.map((movie, idx) => {return(<li key={idx}>{movie}</li>)})}
      </ul>
    </div>)
  })

  return (
    <div>
      <h1>Directors Page</h1>
      {mapped}
    </div>
  );
}

export default Directors
