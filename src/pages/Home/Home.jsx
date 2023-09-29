import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect, useCallback } from 'react';
import { Title, Container } from './Home.styled';

const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';
const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTAwNGI3MzMyYjVhNzZiNTI1YTZjNzAxZDAyNGM5OCIsInN1YiI6IjY1MTNmNmY3Y2FkYjZiMDJiZTU0YTE5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1B34jIpLrGSf868XAK4YgQ7VfiryosAPQmkD2oWkaMk',
    accept: 'application / json',
  },
  method: 'get',
};

const Home = props => {
  const [moviesArr, setMovies] = useState([]);

  const getTrendingList = useCallback(async () => {
    try {
      const { data } = await axios(url, options);
      setMovies(data.results);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    getTrendingList();
  }, [getTrendingList]);


  return (
    <Container>
      <Title>Trending today</Title>
      <MoviesList movies={moviesArr} />
    </Container>
  );
};

Home.propTypes = {};

export default Home;
