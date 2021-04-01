import {NameSpace} from '../reducer';
import {SortingTypes} from '../../const';
import {createSelector} from 'reselect';

export const getActiveCity = (state) => state[NameSpace.OFFER].activeCity;

export const getActiveSorting = (state) => state[NameSpace.OFFER].activeSorting;

export const getOffers = (state) => state[NameSpace.OFFER].offers;

export const getOffersNearby = (state) => state[NameSpace.OFFER].offersNearby;

export const getOffer = (state) => state[NameSpace.OFFER].offer;

export const getLoadDataStatus = (state) => state[NameSpace.OFFER].isDataLoaded;

export const getNotFoundOffer = (state) => state[NameSpace.OFFER].notFoundOffer;

export const getSortedOffers = createSelector(
    [getOffers, getActiveCity, getActiveSorting],
    (offers, city, sortingType) => {
      const cityOffers = offers.filter((offer) => offer.city.name === city);

      switch (sortingType) {
        case SortingTypes.PRICE_DESCENDING:
          return [...cityOffers].sort((a, b) => a.price - b.price);
        case SortingTypes.PRICE_ASCENDING:
          return [...cityOffers].sort((a, b) => b.price - a.price);
        case SortingTypes.TOP_FIRST:
          return [...cityOffers].sort((a, b) => b.rating - a.rating);
        default:
          return [...cityOffers];
      }
    }
);
