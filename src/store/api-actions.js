import {AuthorizationStatus, APIRoutes, AppRoutes} from '../const';
import {ActionCreator} from './action';
// import browserHistory from '../browser-history';

const adaptToClient = (item) => {
  const adaptedOffer = Object.assign(
      {},
      item,
      {
        isPremium: item.is_premium,
        isFavorite: item.is_favorite,
        previewImage: item.preview_image,
        maxAdults: item.max_adults,
        host: {
          ...item.host,
          avatarUrl: item.host.avatar_url
        }
      }
  );

  delete adaptedOffer.preview_image;
  delete adaptedOffer.is_favorite;
  delete adaptedOffer.is_premium;
  delete adaptedOffer.max_adults;
  delete adaptedOffer.host.avatar_url;

  return adaptedOffer;
};

export const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.OFFERS)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data.map((item) => adaptToClient(item)))))
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(APIRoutes.OFFERS + `/` + id)
    .then(({data}) => dispatch(ActionCreator.loadOffer(adaptToClient(data))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.LOGIN)
    .then(({data}) => dispatch(ActionCreator.setAuthorization(data)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoutes.LOGIN, {email, password})
    .then(({data}) => dispatch(ActionCreator.setAuthorization(data)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoutes.MAIN)))
    .catch((error) => error)
);
