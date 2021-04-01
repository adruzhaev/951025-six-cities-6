import {APIRoutes} from '../../const';
import {loadReviews} from './action';
import {adaptReviewToClient} from '../../services/adapter';

export const fetchReviewsList = (id) => (dispatch, _getState, api) => {
  return api.get(APIRoutes.REVIEWS + `/` + id)
    .then(({data}) => dispatch(loadReviews(data.map((item) => adaptReviewToClient(item)))))
    .catch();
};

export const sendReviewForm = ({id, review}) => (dispatch, _getState, api) => {
  return api.post(APIRoutes.REVIEWS + `/` + id, review)
    .then(({data}) => dispatch(loadReviews(data.map((item) => adaptReviewToClient(item)))))
    .catch();
};
