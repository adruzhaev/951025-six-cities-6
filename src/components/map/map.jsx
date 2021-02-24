import React, {useEffect} from 'react';
import leaflet from 'leaflet';
import PropTypes from 'prop-types';
import {offerPropTypes} from '../../prop-types';

import 'leaflet/dist/leaflet.css';

const Map = ({offers}) => {

  const city = offers[0].city;

  const customIcon = leaflet.icon({
    iconUrl: `img/pin.svg`,
    iconSize: [30, 30]
  });

  useEffect(() => {

    const map = leaflet.map(`map`, {
      center: [city.location.latitude, city.location.longitude],
      zoom: city.location.zoom,
      zoomControl: false,
      marker: true
    });
    map.setView([city.location.latitude, city.location.longitude], city.location.zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    offers.forEach((offer) => {

      leaflet.marker([offer.location.latitude, offer.location.longitude],
          {
            icon: customIcon
          })
      .addTo(map);

      return () => {
        map.remove();
      };
    });
  }, [offers]);

  return (
    <div id="map" style={{height: `100%`}}></div>
  );
};

Map.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired
};

export default Map;
