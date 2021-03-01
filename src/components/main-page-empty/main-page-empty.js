import React from 'react';
import PropTypes from 'prop-types';
import {CITIES} from '../../const';

const MainPageEmpty = ({activeCity}) => {
  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">No places to stay available</b>
          <p className="cities__status-description">We could not find any property available at the moment in {activeCity}</p>
        </div>
      </section>
      <div className="cities__right-section" />
    </div>
  );
};

MainPageEmpty.propTypes = {
  activeCity: PropTypes.oneOf(CITIES).isRequired
};

export default MainPageEmpty;
