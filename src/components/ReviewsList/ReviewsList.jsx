import React from 'react';
import css from './ReviewsList.module.css';
import PropTypes from 'prop-types';

const ReviewsList = ({ review }) => {
  return (
    <>
      <div className={css.review_name}>Review</div>
      <ul className={css.review_container}>
        {review.map(({ author, id, content }) => {
          return (
            <li key={id}>
              <p className={css.review_author}>Autror: {author}</p>
              <p className={css.review_text}>{content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ReviewsList;
