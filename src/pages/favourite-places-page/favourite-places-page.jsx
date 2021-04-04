import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getFavoriteOffers, getDataLoadedStatus} from '../../store/favorites/selectors.js';
import Header from '../../components/header';
import Footer from '../../components/footer';
import PlaceCardComponent from '../../components/place-card';
import {fetchFavoriteOffersList} from '../../store/favorites/api-actions.js';
import LoadingPage from '../loading-page/loading-page.jsx';
import FavoritesEmpty from '../../components/favorites-empty';

const FavouritePlacesPage = ({offers, onLoadFavorites, isDataLoaded}) => {

  useEffect(() => {
    onLoadFavorites();
  }, []);

  return (
    !isDataLoaded ?
      <LoadingPage />
      :
      <div className="page">
        <Header />
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            {offers.length === 0 ? <FavoritesEmpty /> :
              <section className="favorites">
                <h1 className="favorites__title">Saved listing</h1>
                <ul className="favorites__list">
                  {Object.entries(offers).map(([city, offersCity]) => {
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
                              <PlaceCardComponent key={offer.id} offer={offer} isFavoriteCard width={150} height={110}/>
                            );
                          })}
                        </div>
                      </li>);
                  })}
                </ul>
              </section>
            }
          </div>
        </main>
        <Footer />
      </div>
  );
};

FavouritePlacesPage.propTypes = {
  offers: PropTypes.object,
  onLoadFavorites: PropTypes.func,
  isDataLoaded: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  offers: getFavoriteOffers(state),
  isDataLoaded: getDataLoadedStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavorites() {
    dispatch(fetchFavoriteOffersList());
  }
});

export {FavouritePlacesPage};
export default connect(mapStateToProps, mapDispatchToProps)(FavouritePlacesPage);
