import PropTypes from 'prop-types';

const locationPropType = PropTypes.shape({
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  zoom: PropTypes.number.isRequired
});

const hostPropType = PropTypes.shape({
  avatarUrl: PropTypes.string,
  id: PropTypes.number.isRequired,
  isPro: PropTypes.bool,
  name: PropTypes.string.isRequired
});

export const offerPropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  type: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]),
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  bedrooms: PropTypes.number.isRequired,
  maxAdults: PropTypes.number,
  goods: PropTypes.arrayOf(PropTypes.string).isRequired,
  host: hostPropType.isRequired,
  city: PropTypes.shape({
    location: locationPropType.isRequired,
    name: PropTypes.string.isRequired
  }),
  location: locationPropType.isRequired
});

export const reviewPropType = PropTypes.shape({
  comment: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  user: hostPropType.isRequired,
});

export const authPropType = PropTypes.shape({
  email: PropTypes.string,
  password: PropTypes.string,
});
