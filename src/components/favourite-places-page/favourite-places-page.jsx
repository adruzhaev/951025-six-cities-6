import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {offerPropTypes} from '../../prop-types';
import Header from '../header';
import Footer from '../footer';
import PlaceCardComponent from '../place-card';

const getFavoriteOffers = (offers) => {
  return offers.filter((offer) => offer.isFavorite);
};

const FavouritePlacesPage = ({offers}) => {

  const citiesOffers = offers.reduce((acc, currentCity) => {
    const city = currentCity.city.name;
    acc[city] = acc[city] ? [...acc[city], currentCity] : [currentCity];

    return acc;
  }, {});

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.entries(citiesOffers).map(([city, offersCity]) => {
                return (
                  <li className="favorites__locations-items" key={city}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {offersCity.map((offer) => {
                        return (
                          <PlaceCardComponent key={offer.id} offer={offer} isFavorite />
                        );
                      })}
                    </div>
                  </li>);
              })}

            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

FavouritePlacesPage.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes)
};

const mapStateToProps = (state) => ({
  offers: getFavoriteOffers(state.offers)
});

export {FavouritePlacesPage};
export default connect(mapStateToProps)(FavouritePlacesPage);
