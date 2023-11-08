import React from 'react';
import defaultFilmPicture from '../../components/images/placeholderFilm.png';
import { useLocation } from 'react-router-dom';
import {
  MovieItem,
  MovieLink,
  MovieList,
  MovieThumb,
} from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  console.log(movies);
  const location = useLocation();
  return (
    <MovieList>
      {movies.map(({ poster_path, title, id }) => (
        <MovieItem key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            <MovieThumb>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : defaultFilmPicture
                }
                alt={title}
              />
              <h4>{title}</h4>
            </MovieThumb>
          </MovieLink>
        </MovieItem>
      ))}
    </MovieList>
  );
};

export default MoviesList;
