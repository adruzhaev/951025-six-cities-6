import {ActionCreator} from './action';

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
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data.map((item) => adaptToClient(item)))))
);

export const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/` + id)
    .then(({data}) => dispatch(ActionCreator.loadOffer(adaptToClient(data))))
);
