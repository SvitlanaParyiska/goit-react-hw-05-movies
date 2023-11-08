import React from 'react';
import axios from 'axios';
import { useLocation, useParams, Outlet } from 'react-router-dom';
import { Suspense, useState, useEffect, useCallback, useRef } from 'react';
import {
  LinkBack,
  Container,
  Wrapper,
  GenresList,
  AdditionalBox,
  InfoLink,
  Img,
} from './MovieDetails.styled';
import { BiArrowBack } from 'react-icons/bi';
import defaultFilmPicture from '../../components/images/placeholderFilm.png';

const options = {
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4OTAwNGI3MzMyYjVhNzZiNTI1YTZjNzAxZDAyNGM5OCIsInN1YiI6IjY1MTNmNmY3Y2FkYjZiMDJiZTU0YTE5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1B34jIpLrGSf868XAK4YgQ7VfiryosAPQmkD2oWkaMk',
    accept: 'application / json',
  },
  method: 'get',
};

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState(null);

  const { movieId } = useParams();
  const numberId = Number(movieId);
  const url = `https://api.themoviedb.org/3/movie/${numberId}`;

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/products';
  const ref = useRef(backLinkHref);

  const getMovieDetails = useCallback(async () => {
    try {
      const { data } = await axios(url, options);
      setMovieDetails(data);
    } catch (error) {
      console.log(error.message);
    }
  }, [url]);

  useEffect(() => {
    getMovieDetails();
  }, [getMovieDetails]);

  return (
    <main>
      <Container>
        <LinkBack to={ref.current}>
          <BiArrowBack /> Go back
        </LinkBack>

        {movieDetails && (
          <Wrapper>
            <Img
              width="200px"
              src={
                movieDetails.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                  : defaultFilmPicture
              }
              alt={movieDetails.title}
            />
            <div>
              <h1>{movieDetails.title}</h1>
              <p>User Score: {Math.ceil(movieDetails.popularity / 10)}%</p>
              <h2>Overview</h2>
              <p>{movieDetails.overview}</p>
              <h3>Genres</h3>
              <GenresList>
                {movieDetails.genres.map(genre => (
                  <li key={genre.id}>{genre.name}</li>
                ))}
              </GenresList>
            </div>
          </Wrapper>
        )}
      </Container>
      <AdditionalBox>
        <h3>Additional information</h3>
        <ul>
          <li>
            <InfoLink to="cast">Cast</InfoLink>
          </li>
          <li>
            <InfoLink to="reviews">Reviews</InfoLink>
          </li>
        </ul>
      </AdditionalBox>
      <Container>
        <Suspense fallback={<div>Loading subpage...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
};

export default MovieDetails;
