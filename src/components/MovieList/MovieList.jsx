import React from 'react';
import noPoster from 'images/noPoster.png';
import { Link } from 'react-router-dom';
import css from './MovieList.module.css';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
    console.log(movies);
    const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';
    const noPosterImg = noPoster;

    return (
        <ul className={css.movie_container}>
            {movies.map(({ poster_path, name, title, id }) => {
                return (
                    <li key={id}>
                        <img
                            className={css.movie_img}
                            src={poster_path !== undefined ? BASE_IMG_URL + poster_path : noPosterImg}
                            alt={title}
                        />
                        <h2>{title || name}</h2>
                    </li>
                );
            }
            )}
    </ul>
    )
}

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