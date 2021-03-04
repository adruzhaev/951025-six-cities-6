import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from '../header';
import OffersList from '../offers-list';
import Map from '../map';
import CitiesList from '../cities-list';
import MainPageEmpty from '../main-page-empty';
import SortTypes from '../sort-types';
import {sortOffers} from '../../utils';
import {offerPropTypes} from '../../prop-types';

const getOffers = (offers, city) => {
  return offers.filter((offer) => offer.city.name === city);
};

const MainPage = ({activeCity, offers}) => {

  const [isMouseOverCard, setMouseOverCard] = useState(null);

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
  offers: PropTypes.arrayOf(offerPropTypes)
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
  offers: sortOffers(getOffers(state.offers, state.activeCity), state.activeSorting)
});

export {MainPage};
export default connect(mapStateToProps)(MainPage);
