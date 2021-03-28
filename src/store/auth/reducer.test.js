import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {checkAuth, login} from './api-actions';
import {APIRoutes, AppRoutes, AuthorizationStatus} from '../../const';
import {ActionType} from './action';
import {redirectToRoute} from '../middlewares/action';
import {reducer} from './reducer';

const api = createAPI(() => {});

describe(`Reducer should work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {}))
      .toEqual({authorizationStatus: AuthorizationStatus.NO_AUTH, authorizationInfo: {}});
  });

  it(`Reducer should update AuthorizationStatus to 'auth',`, () => {
    const state = {authorizationStatus: AuthorizationStatus.NO_AUTH};
    const requiredAuthorizationAction = {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    };

    expect(reducer(state, requiredAuthorizationAction))
      .toEqual({authorizationStatus: AuthorizationStatus.AUTH});
  });

  it(`Reducer should update authorizationInfo`, () => {
    const state = {authorizationStatus: AuthorizationStatus.AUTH, authorizationInfo: {}};
    const setAuthorizationAction = {
      type: ActionType.SET_AUTHORIZATION,
      payload: {
        "avatarUrl": `img/1.png`,
        "email": `andrewd@gmail.com`,
        "id": 1,
        "isPro": false,
        "name": `andrewdr`
      }
    };

    expect(reducer(state, setAuthorizationAction))
      .toEqual({
        authorizationStatus: AuthorizationStatus.AUTH,
        authorizationInfo: {
          "avatarUrl": `img/1.png`,
          "email": `andrewd@gmail.com`,
          "id": 1,
          "isPro": false,
          "name": `andrewdr`
        }
      });
  });
});

describe(`Async operations work correctly`, () => {
  it(`Should make a correct API call to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoutes.LOGIN)
      .reply(200, {email: `some@gmail.com`, name: `andrew`});

    return checkAuthLoader(dispatch, () => {}, api)
        .then(() => {
          expect(dispatch).toHaveBeenCalledTimes(2);
          expect(dispatch).toHaveBeenNthCalledWith(2, {
            type: ActionType.REQUIRED_AUTHORIZATION,
            payload: AuthorizationStatus.AUTH,
          });
          expect(dispatch).toHaveBeenNthCalledWith(1, {
            type: ActionType.SET_AUTHORIZATION,
            payload: {email: `some@gmail.com`, name: `andrew`},
          });
        });
  });

  it(`Should make a correct API call post to /login`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {email: `test@mail.ru`, password: `123`};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(APIRoutes.LOGIN)
      .reply(200, {email: `test@mail.ru`, name: `test`});

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTHORIZATION,
          payload: {email: `test@mail.ru`, name: `test`},
        });
        expect(dispatch).toHaveBeenNthCalledWith(3,
            redirectToRoute(AppRoutes.MAIN)
        );
      });
  });
});
