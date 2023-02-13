import { useEffect, useState } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from '../../fetchMovies';
import { Loader } from '../../components/Loader/Loader';
import {
  Container,
  MainContainer,
  InfoContainer,
  Image,
  Description,
  MovieTitle,
  UserVote,
  Characteristics,
  CharacteristicsDescription,
  Addition,
  AdditionTitle,
  AdditionItem,
  AdditionLink,
  StyledLink,
} from './MovieDetails.styled';
import { IoArrowBack } from 'react-icons/io5';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [backLink, setBackLink] = useState('');
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (backLink !== '') {
      return;
    }
    setBackLink(location.state?.from ?? '/Home');
  }, [backLink, location]);

  useEffect(() => {
    const controller = new AbortController();
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const response = await fetchMovieDetails(movieId);
        setMovie(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  function getRelizeYear(date) {
    const year = new Date(date);
    return year.getFullYear();
  }

  return (
    <Container>
      <StyledLink to={backLink}>
        <IoArrowBack size="24" />
        <span>Go back</span>
      </StyledLink>
      {error && alert(`Sorry, but something happened wrong: ${error.message}`)}
      {movie && (
        <div>
          <MainContainer>
            {movie.poster_path ? (
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            ) : (
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/c/c2/No_image_poster.png"
                alt={movie.title}
              />
            )}
            <Description>
              <MovieTitle>
                {movie.title} ({getRelizeYear(movie.release_date)})
              </MovieTitle>
              <UserVote>
                User Score: {Math.round(movie.vote_average * 10)}%
              </UserVote>
              <Characteristics>Overview</Characteristics>
              <CharacteristicsDescription>{movie.overview}</CharacteristicsDescription>
              <Characteristics>Genres</Characteristics>
              <CharacteristicsDescription>{movie.genres.map(genre => genre.name).join(' ')}</CharacteristicsDescription>
            </Description>
          </MainContainer>
          <InfoContainer>
            <AdditionTitle>Additional information</AdditionTitle>
            <Addition>
              <AdditionItem>
                <AdditionLink to="cast" state={{ id: movieId }}>
                  Cast
                </AdditionLink>
              </AdditionItem>
              <AdditionItem>
                <AdditionLink to="reviews" state={{ id: movieId }}>
                  Reviews
                </AdditionLink>
              </AdditionItem>
            </Addition>
          </InfoContainer>
        </div>
      )}
      {isLoading && <Loader />}
      <Outlet />
    </Container>
  );
};

export default MovieDetails;
