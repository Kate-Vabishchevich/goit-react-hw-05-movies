import React from 'react';
import css from './ReviewsList.module.css';
import PropTypes from 'prop-types';

const ReviewsList = ({ review }) => {
  return (
    <>
      <div className={css.review_title}>Reviews</div>
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

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};
