import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { MovieItem, MovieList } from './MovieGallery.styled';

export const MovieGallery = ({ movies }) => {
  const location = useLocation();
  const renderGallery = () =>
    movies.map(({ id, title }) => (
      <li key={id}>
        <MovieItem
          to={`/movies/${id}`}
          state={{ from: `${location.pathname}${location.search}` }}
        >
          {title}
        </MovieItem>
      </li>
    ));

  return <MovieList>{movies ? renderGallery() : null}</MovieList>;
};

MovieGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
};
