export const ActionType = {
  CHANGE_CITY: `city/change`,
  CHANGE_SORTING: `sorting/change`,
  LOAD_OFFERS: `data/loadOffers`,
  LOAD_OFFER: `data/loadOffer`,
  REQUIRED_AUTHORIZATION: `user/requiredAuthorization`,
  SET_AUTHORIZATION: `user/authInfo`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeSorting: (sortingType) => ({
    type: ActionType.CHANGE_SORTING,
    payload: sortingType,
  }),
  loadOffers: (offers) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offers,
  }),
  loadOffer: (offer) => ({
    type: ActionType.LOAD_OFFER,
    payload: offer,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  setAuthorization: (info) => ({
    type: ActionType.SET_AUTHORIZATION,
    payload: info,
  }),
};
