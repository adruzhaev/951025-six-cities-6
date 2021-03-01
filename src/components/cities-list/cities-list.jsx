import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../store/action';
import {CITIES} from '../../const.js';

const CitiesList = ({activeCity, onCityChangeHandler}) => {

  const handleCityClick = (evt) => {
    evt.preventDefault();
    onCityChangeHandler(evt.target.innerText);
  };

  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city, index) => (
        <li className="locations__item" key={city + index}>
          <a className={`locations__item-link tabs__item ${activeCity === city ? `tabs__item--active` : ``}`} href="#" onClick={handleCityClick}>
            <span>{city}</span>
          </a>
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
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  onCityChangeHandler(city) {
    dispatch(ActionCreator.changeCity(city));
  }
});

export {CitiesList};
export default connect(mapStateToProps, mapDispatchToProps)(CitiesList);
