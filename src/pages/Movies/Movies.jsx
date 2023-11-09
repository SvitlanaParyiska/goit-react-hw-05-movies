import React, { useState, useRef, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import { Container } from './Movies.styled';
import MoviesList from 'components/MoviesList/MoviesList';
import { ColorRing } from 'react-loader-spinner';

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
  const [loading, setLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const query = searchParams.get('search') ?? '';
  const ref = useRef(query);

  const getSearchMovies = useCallback(async query => {
    try {
      setLoading(true);
      const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
      const { data } = await axios(url, options);
      setSearchMovies(data.results);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    ref.current && getSearchMovies(ref.current);
  }, [getSearchMovies]);

  return (
    <main>
      <Container>
        <SearchForm getSearchMovies={getSearchMovies} />
        {loading ? (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{
              display: 'block',
              marginRight: 'auto',
              marginLeft: 'auto',
            }}
            wrapperClass="blocks-wrapper"
            colors={['#26fff2', '#326cff', '#849b87', '#26fff2', '#326cff']}
          />
        ) : (
          <div>
            <MoviesList movies={searchMovies} />
          </div>
        )}
      </Container>
    </main>
  );
};

export default Movies;
