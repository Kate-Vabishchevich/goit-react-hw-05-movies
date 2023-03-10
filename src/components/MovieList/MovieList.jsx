import React from 'react';
import noPoster from 'images/noPoster.png';
import { Link, useLocation } from 'react-router-dom';
import css from './MovieList.module.css';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';
  const noPosterImg = noPoster;
  const location = useLocation();

  return (
    <ul className={css.movie_container}>
      {movies.map(({ poster_path, name, title, id }) => {
        return (
          <div key={id} className={css.card_wrapper}>
            <Link
              to={`/movies/${id}`}
              state={{ from: location }}
              className={css.movie_link}
            >
              <li className={css.movie_item}>
                <img
                  className={css.movie_img}
                  src={
                    poster_path !== undefined
                      ? BASE_IMG_URL + poster_path
                      : noPosterImg
                  }
                  alt={title}
                />
                <p className={css.movie_title}>{title || name}</p>
              </li>
            </Link>
          </div>
        );
      })}
    </ul>
  );
};

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      poster_path: PropTypes.string,
      title: PropTypes.string,
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
    })
  ).isRequired,
};
