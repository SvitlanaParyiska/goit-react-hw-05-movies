import React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { useEffect, useCallback } from 'react';
import Placeholder from '../images/placholder.jpg';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTAwNGI3MzMyYjVhNzZiNTI1YTZjNzAxZDAyNGM5OCIsInN1YiI6IjY1MTNmNmY3Y2FkYjZiMDJiZTU0YTE5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1B34jIpLrGSf868XAK4YgQ7VfiryosAPQmkD2oWkaMk',
  },
};

const Cast = props => {
  const { movieId } = useParams();
  const [castMovie, setCastMovie] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCastMovie = useCallback(async movieId => {
    try {
      setLoading(true);
      const numberId = Number(movieId);
      const url = `https://api.themoviedb.org/3/movie/${numberId}/credits?language=en-US`;
      const { data } = await axios(url, options);
      setCastMovie(data.cast);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getCastMovie(movieId);
  }, [getCastMovie, movieId]);

  return (
    <>
      {loading && <div>Loading...</div>}
      {castMovie.length > 0 && (
        <ul>
          {castMovie.map(({ id, name, character, profile_path }) => (
            <li key={id}>
              <img
                width="100px"
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/w500${profile_path}`
                    : Placeholder
                }
                alt={name}
              ></img>
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          ))}
        </ul>
      )}
      {castMovie.length === 0 && !loading && (
        <p>There is no information yet.</p>
      )}
    </>
  );
};

export default Cast;
