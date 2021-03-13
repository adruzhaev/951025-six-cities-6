import React from 'react';
import PropTypes from 'prop-types';

const OfferGallery = ({images}) => {
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {images.slice(0, 6).map((image, index) => (
          <div className="property__image-wrapper" key={image + index}>
            <img className="property__image" src={image} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div>
  );
};

OfferGallery.propTypes = {
  images: PropTypes.array
};

export default OfferGallery;
