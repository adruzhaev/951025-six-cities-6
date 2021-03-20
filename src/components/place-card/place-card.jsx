import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import BookmarkButton from '../bookmark-button';
import {capitalize} from '../../utils';
import {BOOK_MARK_ICON, BOOK_MARK_CLASSES} from '../../const';

const PlaceCard = ({isFavoriteCard = false, isNearest = false, offer, handleOnCardMouseOver, handleCardMouseOut}) => {

  const {isPremium, previewImage, price, rating, title, type, id} = offer;

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

          <BookmarkButton offer={offer} width={BOOK_MARK_ICON.MAIN.WIDTH} height={BOOK_MARK_ICON.MAIN.HEIGHT} className={BOOK_MARK_CLASSES.MAIN}/>

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
  handleOnCardMouseOver: PropTypes.func,
  handleCardMouseOut: PropTypes.func
};

export default PlaceCard;
