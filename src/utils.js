import {SortingTypes} from './const';

export const capitalize = (str) => {
  return str.slice(0, 1).toUpperCase() + str.slice(1, str.length);
};

export const sortOffers = (offers, sortingType) => {
  switch (sortingType) {
    case SortingTypes.PRICE_DESCENDING:
      return [...offers].sort((a, b) => a.price - b.price);
    case SortingTypes.PRICE_ASCENDING:
      return [...offers].sort((a, b) => b.price - a.price);
    case SortingTypes.TOP_FIRST:
      return [...offers].sort((a, b) => b.rating - a.rating);
    default:
      return offers;
  }
};
