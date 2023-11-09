import React from 'react';
import axios from 'axios';
import { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';

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
  const [loading, setLoading] = useState(false);

  const getCastMovie = useCallback(async movieId => {
    try {
      setLoading(true);
      const numberId = Number(movieId);
      const url = `https://api.themoviedb.org/3/movie/${numberId}/reviews?language=en-US&page=1`;
      const { data } = await axios(url, options);
      setReviewsMovie(data.results);
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
      {loading && (
        <ColorRing
          visible={true}
          height="50"
          width="50"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#26fff2', '#326cff', '#849b87', '#26fff2', '#326cff']}
        />
      )}
      {reviewsMovie.length > 0 && !loading && (
        <ul>
          {reviewsMovie.map(({ id, author, content }) => (
            <li key={id}>
              <h4>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
      {reviewsMovie.length === 0 && !loading && (
        <p>We don't have ani reviews for this movie.</p>
      )}
    </>
  );
};

export default Reviews;
