import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {capitalize} from '../../utils';

const PlaceCard = ({isFavoriteCard = false, isNearest = false, offer, handleOnCardMouseOver, handleCardMouseOut}) => {

  const {isPremium, previewImage, price, isFavorite, rating, title, type, id} = offer;

  const getPlaceCardClass = () => {

    if (isFavoriteCard) {
      return `favorites__card`;
    }

    if (isNearest) {
      return `near-places__card`;
    }

    return `cities__place-card`;
  };

  return (
    <article className={`place-card ${getPlaceCardClass()}`} data-id={id} onMouseEnter={handleOnCardMouseOver} onMouseLeave={handleCardMouseOut}>

      {isPremium && <div className="place-card__mark">
        <span>Premium</span>
      </div>}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width={260} height={200} alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button className={`button place-card__bookmark-button ${isFavorite ? `place-card__bookmark-button--active` : ``}`} type="button">
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(rating * 20)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalize(type)}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  isFavoriteCard: PropTypes.bool,
  isNearest: PropTypes.bool,
  offer: PropTypes.object.isRequired,
  id: PropTypes.string,
  handleOnCardMouseOver: PropTypes.func.isRequired,
  handleCardMouseOut: PropTypes.func.isRequired
};

export default PlaceCard;
