import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTAwNGI3MzMyYjVhNzZiNTI1YTZjNzAxZDAyNGM5OCIsInN1YiI6IjY1MTNmNmY3Y2FkYjZiMDJiZTU0YTE5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1B34jIpLrGSf868XAK4YgQ7VfiryosAPQmkD2oWkaMk',
  },
};

const Reviews = props => {
  const { movieId } = useParams();
  const [reviewsMovie, setReviewsMovie] = useState([]);

  const getCastMovie = useCallback(async movieId => {
    try {
      const numberId = Number(movieId);
      const url = `https://api.themoviedb.org/3/movie/${numberId}/reviews?language=en-US&page=1`;
      const { data } = await axios(url, options);
      setReviewsMovie(data.results);
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  useEffect(() => {
    getCastMovie(movieId);
  }, [getCastMovie, movieId]);

  return (
    <>
      {reviewsMovie.length > 0 && (
        <ul>
          {reviewsMovie.map(({ id, author, content }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {reviewsMovie.length === 0 && (
        <div>We don't have ani reviews for this movie.</div>
      )}
    </>
  );
};

Reviews.propTypes = {};

export default Reviews;
