import React from 'react';

import { useLocation } from 'react-router-dom';
import { MovieItem, MovieLink } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ title, id }) => (
        <MovieItem key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            <p>{title}</p>
          </MovieLink>
        </MovieItem>
      ))}
    </ul>
  );
};

export default MoviesList;
