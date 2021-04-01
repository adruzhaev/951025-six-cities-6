import {NameSpace} from '../reducer';

export const getFavoriteOffers = (state) => state[NameSpace.FAVORITES].offers.reduce((acc, currentCity) => {
  const city = currentCity.city.name;
  acc[city] = acc[city] ? [...acc[city], currentCity] : [currentCity];

  return acc;
}, {});

export const getDataLoadedStatus = (state) => state[NameSpace.FAVORITES].isDataLoaded;
