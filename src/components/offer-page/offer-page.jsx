import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from '../header';
import ReviewsList from '../reviews-list';
import PlaceCardComponent from '../place-card';
import Map from '../map';
import {capitalize} from '../../utils';
import {offerPropTypes, reviewPropType} from '../../prop-types';

const OfferPage = ({offers, reviews}) => {

  const {id} = useParams();

  const offer = offers.find((item) => item.id === id);


  const {images, isPremium, isFavorite, title, rating, type, bedrooms, maxAdults, price, goods, host, description} = offer;
  const {avatarUrl, name} = host;

  if (!offer) {
    return <Redirect to="/" />;
  }

  return (
    <div className="page">

      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.slice(0, 6).map((image, index) => (
                <div className="property__image-wrapper" key={image + index}>
                  <img className="property__image" src={image} alt="Photo studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> : ``}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button button ${isFavorite ? `property__bookmark-button--active` : ``}`} type="button">
                  <svg className="property__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${Math.round(rating * 20)}%`}} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {capitalize(type)}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} {bedrooms > 1 ? `Bedrooms` : `Bedroom`}
                </li>
                <li className="property__feature property__feature--adults">
                  {maxAdults > 1 ? `Max ${maxAdults} adults` : `Max ${maxAdults} adult`}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((item, i) => (
                    <li className="property__inside-item" key={item + i}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={avatarUrl} width={74} height={74} alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>

              <ReviewsList reviews={reviews}/>

            </div>
          </div>
          <section className="property__map map">
            <Map offers={offers.slice(0, 3)}/>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {offers.slice(0, 3).map((item) => (
                <PlaceCardComponent
                  key={item.id}
                  isNearest
                  offer={item}
                />
              ))}

            </div>
          </section>
        </div>
      </main>

    </div>
  );
};

OfferPage.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  reviews: PropTypes.arrayOf(reviewPropType).isRequired
};

const mapStateToProps = (state) => ({
  offers: state.offers
});

export {OfferPage};
export default connect(mapStateToProps)(OfferPage);

