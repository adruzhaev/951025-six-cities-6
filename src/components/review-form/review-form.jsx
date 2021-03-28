import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {RATING, MIN_COMMENTS_CHARS, MAX_COMMENTS_CHARS} from '../../const';
import {sendReviewForm} from '../../store/reviews/api-actions.js';

const ReviewForm = ({id, onSubmit}) => {

  const [disabled, setDisabled] = useState(true);
  const initialComment = {
    'rating': 0,
    'comment': ``,
  };
  const [commentForm, setCommentForm] = useState(initialComment);

  useEffect(() => {
    setDisabled(!commentForm.rating
      || commentForm.comment.length < MIN_COMMENTS_CHARS
      || commentForm.comment.length > MAX_COMMENTS_CHARS
    );
  });

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setCommentForm({...commentForm, [name]: value});
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({id, review: commentForm});
    setCommentForm({...commentForm, ...initialComment});
    evt.target.reset();
    setDisabled(true);
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING.map(({value, title}) => (
          <React.Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              onChange={handleFieldChange}
            />
            <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star" />
              </svg>
            </label>
          </React.Fragment>
        ))}
      </div>

      <textarea
        className="reviews__textarea form__textarea"
        id="comment"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={handleFieldChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
                    To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={disabled}>Submit</button>
      </div>
    </form>
  );
};

ReviewForm.propTypes = {
  id: PropTypes.number.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit({id, review, element}) {
    dispatch(sendReviewForm({id, review, element}));
  }
});

export {ReviewForm};
export default connect(null, mapDispatchToProps)(ReviewForm);
