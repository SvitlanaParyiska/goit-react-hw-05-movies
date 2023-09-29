import React, { useState, useRef, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import { Container } from './Movies.styled';
import MoviesList from 'components/MoviesList/MoviesList';

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
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search') ?? '';
  const ref = useRef(query);

  const getSearchMovies = useCallback(async query => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
      const { data } = await axios(url, options);
      setSearchMovies(data.results);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    ref.current && getSearchMovies(ref.current);
  }, [getSearchMovies]);

  return (
    <main>
      <Container>
        <SearchForm getSearchMovies={getSearchMovies} />
        {searchMovies && (
          <div>
            <MoviesList movies={searchMovies} />
          </div>
        )}
      </Container>
    </main>
  );
};

export default Movies;
