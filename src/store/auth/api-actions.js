import {ActionCreator} from './action';
import {ActionCreator as RedirectActionCreator} from '../middlewares/action';
import {AuthorizationStatus, APIRoutes, AppRoutes} from '../../const';

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
    .then(() => dispatch(RedirectActionCreator.redirectToRoute(AppRoutes.MAIN)))
    .catch(() => {})
);

export const logout = () => (dispatch, _getState, api) => {
  api.get(APIRoutes.logout)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .then(() => dispatch(ActionCreator.setAuthorization({})))
    .catch(() => {});
};
