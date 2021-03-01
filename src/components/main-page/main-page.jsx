import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Header from '../header';
import OffersList from '../offers-list';
import Map from '../map';
import CitiesList from '../cities-list';
import MainPageEmpty from '../main-page-empty';
import {offerPropTypes} from '../../prop-types';

const getOffers = (offers, city) => {
  return offers.filter((offer) => offer.city.name === city);
};

const MainPage = ({activeCity, offers}) => {

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
                <form className="places__sorting" action="#" method="get">
                  <span className="places__sorting-caption">Sort by </span>
                  <span className="places__sorting-type" tabIndex={0}>
                    Popular
                    <svg className="places__sorting-arrow" width={7} height={4}>
                      <use xlinkHref="#icon-arrow-select" />
                    </svg>
                  </span>
                  <ul className="places__options places__options--custom ">
                    {/* places__options--opened */}
                    <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                    <li className="places__option" tabIndex={0}>Price: low to high</li>
                    <li className="places__option" tabIndex={0}>Price: high to low</li>
                    <li className="places__option" tabIndex={0}>Top rated first</li>
                  </ul>
                </form>

                <OffersList offers={offers} />

              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map offers={offers}/>
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
  offers: getOffers(state.offers, state.activeCity)
});

export {MainPage};
export default connect(mapStateToProps)(MainPage);
