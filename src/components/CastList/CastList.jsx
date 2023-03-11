import React from 'react';
import noPoster from 'images/noPoster.png';
import css from './CastList.module.css';
import PropTypes from 'prop-types';

const CastList = ({ cast }) => {
  const BASE_IMG_URL = 'https://image.tmdb.org/t/p/w200';
  return (
    <>
      <div className={css.cast_name}>Cast</div>
      <ul className={css.cast_list}>
        {cast.map(({ profile_path, cast_id, name, character }) => {
          return (
            <li key={cast_id} className={css.cast_item}>
              <img
                src={
                  profile_path !== null ? BASE_IMG_URL + profile_path : noPoster
                }
                alt={name}
                width="200"
              />
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CastList;

// Cast.propTypes = {
// cast: PropTypes.arrayOf(
//     PropTypes.shape({
//       profile_path: PropTypes.string,
//       id: PropTypes.number.isRequired,
//       name: PropTypes.string.isRequired,
//       character: PropTypes.string.isRequired,
//     })
//   ),
// }
