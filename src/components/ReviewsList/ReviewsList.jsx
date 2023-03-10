import React from 'react';
import css from './ReviewsList.module.css';
import PropTypes from 'prop-types';

const ReviewsList = ({ review }) => {
  return (
    <ul className={css.reviev}>
      {review.map(({ author, id, content }) => {
        return (
          <li key={id}>
            <p>Autror: {author}</p>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ReviewsList;
