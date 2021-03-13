import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from '../../components/header';
import OffersList from '../../components/offers-list';
import Map from '../../components/map';
import CitiesList from '../../components/cities-list';
import MainPageEmpty from '../main-page-empty';
import LoadingPage from '../loading-page';
import SortTypes from '../../components/sort-types';
import {sortOffers} from '../../utils';
import {offerPropTypes} from '../../prop-types';
import {fetchOffersList} from '../../store/offer/api-actions';

const getOffers = (offers, city) => {
  return offers.filter((offer) => offer.city.name === city);
};

const MainPage = ({activeCity, offers, isDataLoaded, onLoadData}) => {

  const [isMouseOverCard, setMouseOverCard] = useState(null);

  useEffect(() => {
    onLoadData();
  }, [isDataLoaded]);

  if (!isDataLoaded) {
    return (
      <LoadingPage />
    );
  }

  const handleMouseOver = (hoveredCard) => {
    setMouseOverCard(hoveredCard.currentTarget.dataset.id);
  };

  const handleMouseLeave = () => {
    setMouseOverCard(null);
  };

  return (
    <div className="page page--gray page--main">

      <Header />

      <main className={`page__main page__main--index ${offers.length > 0 ? `page__main--index-empty` : ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList />
          </section>
        </div>
        <div className="cities">
          {offers.length > 0 ?
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length} places to stay in {activeCity}</b>

                <SortTypes />

                <OffersList
                  offers={offers}
                  handleOnCardMouseOver={handleMouseOver}
                  handleCardMouseOut={handleMouseLeave}
                />

              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offers={offers} activeOffer={isMouseOverCard}/>
                </section>
              </div>
            </div> :
            <MainPageEmpty activeCity={activeCity}/>}
        </div>
      </main>
    </div>
  );
};

MainPage.propTypes = {
  activeCity: PropTypes.string,
  offers: PropTypes.arrayOf(offerPropTypes),
  isDataLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: state.offerReducer.activeCity,
  offers: sortOffers(getOffers(state.offerReducer.offers, state.offerReducer.activeCity), state.offerReducer.activeSorting),
  isDataLoaded: state.offerReducer.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchOffersList());
  }
});

export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
