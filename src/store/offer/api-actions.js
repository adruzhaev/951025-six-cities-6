import {APIRoutes} from '../../const';
import {loadOffers, loadOffer, notFoundOffer, loadOffersNearby} from './action';
import {adaptOfferToClient} from '../../services/adapter';

export const fetchOffersList = () => (dispatch, _getState, api) => {
  return api.get(APIRoutes.OFFERS)
    .then(({data}) => dispatch(loadOffers(data.map((item) => adaptOfferToClient(item)))));
};

export const fetchOffer = (id) => (dispatch, _getState, api) => {
  return api.get(APIRoutes.OFFERS + `/` + id)
    .then(({data}) => dispatch(loadOffer(adaptOfferToClient(data))))
    .catch((error) => {
      if (error.request.status === 404) {
        dispatch(notFoundOffer());
      }
    });
};

export const fetchOffersNearby = (id) => (dispatch, _getState, api) => {
  return api.get(APIRoutes.OFFERS + `/` + id + `/nearby`)
    .then(({data}) => dispatch(loadOffersNearby(data.map((item) => adaptOfferToClient(item)))));
};
