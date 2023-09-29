import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
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

MoviesList.propTypes = {};

export default MoviesList;
