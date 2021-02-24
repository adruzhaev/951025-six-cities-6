import React from 'react';
import PropTypes from 'prop-types';
import {reviewPropType} from '../../prop-types.js';
import ReviewForm from '../review-form';
import ReviewItem from '../review-item';

const ReviewsList = (props) => {

  const {reviews} = props;

  return (

    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <ReviewItem review={review} key={review.id}/>
        ))}
      </ul>

      <ReviewForm />

    </section>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(reviewPropType),
};

export default ReviewsList;
