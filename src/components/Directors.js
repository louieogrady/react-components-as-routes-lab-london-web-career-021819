import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
    <h1>Directors Page</h1>
      {directors.map(director => <div><h3>{director.name} {director.movies}</h3></div>)}
    </div>
  );
}

export default Directors
