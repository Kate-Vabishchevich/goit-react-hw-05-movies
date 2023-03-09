import React from 'react';
import noPoster from 'images/noPoster.png';
import css from './MovieCard.module.css';
import PropTypes from 'prop-types';

const MovieCard = ({
    movie: {
    poster_path,
    original_title,
    release_date,
    genres,
    vote_average,
    overview,
    },
}) => {
    const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w500/';
    const noPosterImg = noPoster;
    return(
        <div className={css.movie_container}>
            <div className={css.img_container}>
                <img
                    src={poster_path !== undefined ? BASE_IMG_URL + poster_path : noPosterImg}
                    className={css.movie_img}
                    alt={original_title}
                />
            </div>
            <div className={css.movie_description}>
                <h1 className={css.movie_title}>{original_title}
                    <span>({parseInt(release_date)})</span>
                </h1>
                <p>
                    User Score: {Math.round(vote_average * 10)}%
                </p>
                <h2 className={css.description_name}>Overview</h2>
                <p className={css.description}>{overview}</p>
                <h2 className={css.description_name}>Genres</h2>
                <p className={css.description_name}>
                    {genres.map(genre => genre.name).join(' | ')}
                </p>
            </div>
        </div>
    );

}

export default MovieCard;

MovieCard.propTypes = {
    poster_path: PropTypes.string,
    original_title: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
}