import React from 'react';
import { actors } from '../data';

const Actors = () => {

  const mapped = actors.map(actor => {
    return (
    <div key={actor.name} className="actor">
      <strong><p>Name: {actor.name}</p></strong>
      <h4>Movies:</h4>
      <ul>
        {actor.movies.map((movie, idx) => {return(<li key={idx}>{movie}</li>)})}
      </ul>
    </div>)
  })

  return (
    <div>
      <h1>Actors Page</h1>
      {mapped}
    </div>
  );
};

export default Actors;
