import {requireAuthorization, setAuthorization} from './action';
import {redirectToRoute} from '../middlewares/action';
import {AuthorizationStatus, APIRoutes, AppRoutes} from '../../const';

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoutes.LOGIN)
    .then(({data}) => dispatch(setAuthorization(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoutes.LOGIN, {email, password})
    .then(({data}) => dispatch(setAuthorization(data)))
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoutes.MAIN)))
    .catch(() => {})
);

export const logout = () => (dispatch, _getState, api) => {
  api.get(APIRoutes.logout)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
    .then(() => dispatch(setAuthorization({})))
    .catch(() => {});
};
