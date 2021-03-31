import React from 'react';
import PropTypes from 'prop-types';
import {reviewPropType} from '../../prop-types.js';
import ReviewItem from '../review-item';
import {REVIEWS_TO_SHOW} from '../../const';

const ReviewsList = ({reviews}) => {
  return (

    <>
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.slice(REVIEWS_TO_SHOW.MIN, REVIEWS_TO_SHOW.MAX).length}</span></h2>
      <ul className="reviews__list">
        {reviews.slice(REVIEWS_TO_SHOW.MIN, REVIEWS_TO_SHOW.MAX).map((review) => (
          <ReviewItem key={review.id} review={review}/>
        ))}
      </ul>
    </>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropType),
};

export default ReviewsList;
