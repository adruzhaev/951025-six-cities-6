import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PlaceCardComponent from '../place-card';
import {offerPropTypes} from '../../prop-types';

const OffersList = ({offers}) => {

  const [activeCard, setActiveCard] = useState({});

  const handleMouseEnter = (evt) => {
    offers.forEach((offer) => {
      if (evt.target.dataset.id === activeCard.id) {
        setActiveCard(offer);
      }
    });
  };

  const handleMouseLeave = () => {
    setActiveCard({});
  };

  return (<div className="cities__places-list places__list tabs__content" onMouseMove={handleMouseEnter} onMouseLeave={handleMouseLeave}>
    {offers.map((offer, i) => (
      <PlaceCardComponent
        id={offer.id}
        key={offer + i}
        offer={offer}
      />
    ))}
  </div>);
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes)
};

export default OffersList;
