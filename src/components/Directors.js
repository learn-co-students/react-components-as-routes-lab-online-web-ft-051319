import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(d => (
        <div key={d.name} >
          <h3>{d.name}</h3>
          <ul><strong>Movies: </strong>{d.movies.join(', ')}</ul>
        </div>
      ))}
    </div>
  );
}

export default Directors
