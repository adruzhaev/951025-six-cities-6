import {APIRoutes} from '../../const';
import {ActionCreator} from './action';
import {adaptReviewToClient} from '../../services/adapter';

export const fetchReviewsList = (id) => (dispatch, _getState, api) => {
  api.get(APIRoutes.REVIEWS + `/` + id)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data.map((item) => adaptReviewToClient(item)))))
    .catch(({error}) => error);
};

export const sendReviewForm = ({id, review}) => (dispatch, _getState, api) => {
  api.post(APIRoutes.REVIEWS + `/` + id, review)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data.map((item) => adaptReviewToClient(item)))))
    .catch(({error}) => error);
};
