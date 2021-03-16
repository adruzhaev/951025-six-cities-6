import React from 'react';
import PropTypes from 'prop-types';
import {offerPropTypes} from '../../prop-types';
import {capitalize} from '../../utils';

const OfferParts = ({offer, children}) => {
  return (
    <div className="property__container container">
      <div className="property__wrapper">
        {offer.isPremium ?
          <div className="property__mark">
            <span>Premium</span>
          </div> : ``}
        <div className="property__name-wrapper">
          <h1 className="property__name">
            {offer.title}
          </h1>
          <button className={`property__bookmark-button button ${offer.isFavorite ? `property__bookmark-button--active` : ``}`} type="button">
            <svg className="property__bookmark-icon" width={31} height={33}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="property__rating rating">
          <div className="property__stars rating__stars">
            <span style={{width: `${Math.round(offer.rating * 20)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
          <span className="property__rating-value rating__value">{offer.rating}</span>
        </div>
        <ul className="property__features">
          <li className="property__feature property__feature--entire">
            {capitalize(offer.type)}
          </li>
          <li className="property__feature property__feature--bedrooms">
            {offer.bedrooms} {offer.bedrooms > 1 ? `Bedrooms` : `Bedroom`}
          </li>
          <li className="property__feature property__feature--adults">
            {offer.maxAdults > 1 ? `Max ${offer.maxAdults} adults` : `Max ${offer.maxAdults} adult`}
          </li>
        </ul>
        <div className="property__price">
          <b className="property__price-value">&euro;{offer.price}</b>
          <span className="property__price-text">&nbsp;night</span>
        </div>
        <div className="property__inside">
          <h2 className="property__inside-title">What&apos;s inside</h2>
          <ul className="property__inside-list">
            {offer.goods.map((item) => (
              <li className="property__inside-item" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="property__host">
          <h2 className="property__host-title">Meet the host</h2>
          <div className="property__host-user user">
            <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
              <img className="property__avatar user__avatar" src={offer.host.avatarUrl} width={74} height={74} alt="Host avatar" />
            </div>
            <span className="property__user-name">
              {offer.host.name}
            </span>
          </div>
          <div className="property__description">
            <p className="property__text">
              {offer.description}
            </p>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
};

OfferParts.propTypes = {
  offer: offerPropTypes,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ])
};

export default OfferParts;
