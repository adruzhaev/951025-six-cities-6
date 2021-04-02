import {APIRoutes} from '../../const';
import {loadFavorites, addFavorite, removeFavorite} from './action';
import {adaptOfferToClient} from '../../services/adapter';

export const fetchFavoriteOffersList = () => (dispatch, _getState, api) => {
  return api.get(APIRoutes.FAVORITES)
    .then(({data}) => dispatch(loadFavorites(data.map((item) => adaptOfferToClient(item)))))
    .catch(() => {});
};

export const changeFavoriteOfferStatus = (id, status) => (dispatch, _getState, api) => {
  return api.post(APIRoutes.FAVORITES + `/` + id + `/` + status)
    .then(({data}) => dispatch(data[`is_favorite`] ? addFavorite(adaptOfferToClient(data)) : removeFavorite((data))))
    .catch(() => {});
};
