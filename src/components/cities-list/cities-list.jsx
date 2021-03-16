import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {changeCity} from '../../store/offer/action';
import {CITIES} from '../../const.js';
import {getActiveCity} from '../../store/offer/selectors';

const CitiesList = ({activeCity, onCityChangeHandler}) => {

  const handleCityClick = (evt) => {
    onCityChangeHandler(evt.target.innerText);
  };

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <li className="locations__item" key={city.id} onClick={handleCityClick}>
          <span className={`locations__item-link tabs__item ${activeCity === city.city ? `tabs__item--active` : ``}`}>{city.city}</span>
        </li>
      ))}
    </ul>
  );
};

CitiesList.propTypes = {
  onCityChangeHandler: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  activeCity: getActiveCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCityChangeHandler(city) {
    dispatch(changeCity(city));
  }
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
