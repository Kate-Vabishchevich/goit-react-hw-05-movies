import React from 'react';
import noPoster from 'images/noPoster.png';
import css from './CastList.module.css';
import PropTypes from 'prop-types';

const Cast = ({ cast }) => {
    const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';
    return (
        cast.map(({ profile_path, cast_id, name, character }) => {
            return (
                <div>
                    <li key={cast_id}>
                        <img
                            src={profile_path !== null ? BASE_IMG_URL + profile_path : noPoster}
                            alt={name} />
                    </li>
                    <p>{name}</p>
                    <p>{character}</p>
                </div>
                
            );
        })
    );

}

export default Cast;

Cast.propTypes = {
cast: PropTypes.arrayOf(
    PropTypes.shape({
      profile_path: PropTypes.string,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ),
}