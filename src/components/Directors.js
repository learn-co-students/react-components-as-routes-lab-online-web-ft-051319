import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director, index) =>
        <div className="director" key={index}>
          <p>{director.name}</p>
          <p>{director.movies}</p>
        </div>
      )}
    </div>
  );
}

export default Directors
