import React, {useState} from 'react';
import PropTypes from 'prop-types';
import PlaceCardComponent from '../place-card';
import {offerPropTypes} from '../../prop-types';

const OffersList = ({offers, handleOnCardMouseOver, handleCardMouseOut}) => {

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
    {offers.map((offer) => (
      <PlaceCardComponent
        key={offer.id}
        offer={offer}
        handleOnCardMouseOver={handleOnCardMouseOver}
        handleCardMouseOut={handleCardMouseOut}
      />
    ))}
  </div>);
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes),
  handleOnCardMouseOver: PropTypes.func.isRequired,
  handleCardMouseOut: PropTypes.func.isRequired
};

export default React.memo(OffersList, (prev, next) => {
  return prev.offers === next.offers;
});
