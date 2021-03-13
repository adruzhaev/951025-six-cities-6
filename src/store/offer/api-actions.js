import {APIRoutes} from '../../const';
import {ActionCreator} from './action';
import {adaptOfferToClient} from '../../services/adapter';

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data.map((item) => adaptOfferToClient(item)))))
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(APIRoutes.OFFERS + `/` + id)
    .then(({data}) => dispatch(ActionCreator.loadOffer(adaptOfferToClient(data))))
    .catch((error) => {
      if (error.request.status === 404) {
        dispatch(ActionCreator.notFoundOffer());
      }
    })
);
