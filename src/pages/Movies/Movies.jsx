import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import { Container } from './Movies.styled';
import { MovieLink, MovieItem } from 'components/MoviesList/MoviesList.styled';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTAwNGI3MzMyYjVhNzZiNTI1YTZjNzAxZDAyNGM5OCIsInN1YiI6IjY1MTNmNmY3Y2FkYjZiMDJiZTU0YTE5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1B34jIpLrGSf868XAK4YgQ7VfiryosAPQmkD2oWkaMk',
  },
};

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState(null);

  const location = useLocation();

  const getSearchMovies = async query => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
      const { data } = await axios(url, options);
      setSearchMovies(data.results);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main>
      <Container>
        <SearchForm getSearchMovies={getSearchMovies} />
        {searchMovies && (
          <div>
            <ul>
              {searchMovies.map(({ id, title }) => (
                <MovieItem key={id}>
                  <MovieLink to={`/movies/${id}`} state={{ from: location }}>
                    <p>{title}</p>
                  </MovieLink>
                </MovieItem>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </main>
  );
};

Movies.propTypes = {};

export default Movies;
