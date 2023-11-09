import React from 'react';
import axios from 'axios';
import MoviesList from 'components/MoviesList/MoviesList';
import { useState, useEffect, useCallback } from 'react';
import { Title, Container } from './Home.styled';
import { ColorRing } from 'react-loader-spinner';

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
  const [loading, setLoading] = useState(false);

  const getTrendingList = useCallback(async () => {
    try {
      setLoading(true);
      const { data } = await axios(url, options);
      setMovies(data.results);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getTrendingList();
  }, [getTrendingList]);

  return (
    <Container>
      <Title>Trending today</Title>
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
        <MoviesList movies={moviesArr} />
      )}
    </Container>
  );
};

export default Home;
