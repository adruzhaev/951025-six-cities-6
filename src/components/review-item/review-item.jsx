import React from 'react';
import {reviewPropType} from '../../prop-types';
import dayjs from 'dayjs';

const ReviewItem = ({review}) => {
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" width={54} height={54} alt="Reviews avatar" src={review.user.avatarUrl} />
        </div>
        <span className="reviews__user-name">
          {review.user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${Math.round(review.rating * 20)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.comment}
        </p>
        <time className="reviews__time" dateTime={dayjs(review.date).format(`YYYY-MM-DD`)}>{dayjs(review.date).format(`MMMM YYYY`)}</time>
      </div>
    </li>
  );
};

ReviewItem.propTypes = {
  review: reviewPropType
};

export default ReviewItem;
