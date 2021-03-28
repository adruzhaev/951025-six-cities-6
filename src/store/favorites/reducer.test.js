import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {ActionType} from './action';
import {fetchFavoriteOffersList} from './api-actions';
import {APIRoutes} from '../../const';
import {reducer} from './reducer';
import {offersServer} from '../offer/test-mocks';
import {adaptOfferToClient} from '../../services/adapter';

const api = createAPI(() => {});

const favoriteOffer = {
  "city": {
    "name": `Paris`,
    "location": {
      "latitude": 48.85661,
      "longitude": 2.351499,
      "zoom": 13
    }
  },
  "images": [
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/7.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/8.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/5.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/9.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/19.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/18.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/10.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/4.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/20.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/6.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/13.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/11.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/2.jpg`,
    `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/12.jpg`
  ],
  "title": `The house among olive `,
  "rating": 3,
  "type": `room`,
  "bedrooms": 1,
  "price": 169,
  "goods": [
    `Breakfast`,
    `Air conditioning`,
    `Laptop friendly workspace`,
    `Washer`
  ],
  "host": {
    "id": 25,
    "name": `Angelina`,
    "is_pro": true,
    "avatarUrl": `img/avatar-angelina.jpg`
  },
  "description": `Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.`,
  "location": {
    "latitude": 48.83861,
    "longitude": 2.350499,
    "zoom": 16
  },
  "id": 1,
  "isPremium": true,
  "isFavorite": true,
  "previewImage": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
  "maxAdults": 1
};

const offersAdapted = offersServer.map((item) => adaptOfferToClient(item));

describe(`Reducer should work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(undefined, {}))
      .toEqual({offers: [], isDataLoaded: false});
  });

  it(`Reducer should add favorite offer`, () => {
    const state = {
      offers: [],
      isDataLoaded: true,
    };

    const addFavoriteAction = {
      type: ActionType.ADD_FAVORITE,
      payload: favoriteOffer,
    };

    expect(reducer(state, addFavoriteAction))
      .toEqual({
        offers: [favoriteOffer],
        isDataLoaded: true,
      });
  });

  it(`Reducer should remove favorite offer`, () => {
    const state = {
      offers: [
        {
          id: 1,
          isFavorite: true,
        },
        {
          id: 2,
          isFavorite: true,
        },
        {
          id: 3,
          isFavorite: true,
        },
      ],
      isDataLoaded: true,
    };

    const removeFavoriteAction = {
      type: ActionType.REMOVE_FAVORITE,
      payload: {"id": 3, "is_favorite": false}
    };

    expect(reducer(state, removeFavoriteAction))
      .toEqual({
        offers: [
          {
            id: 1,
            isFavorite: true,
          },
          {
            id: 2,
            isFavorite: true,
          },
        ],
        isDataLoaded: true
      });
  });
});

describe(`Async operation should work correctly`, () => {
  it(`Should make a correct API call to /favorites`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoritesLoader = fetchFavoriteOffersList();

    apiMock
      .onGet(APIRoutes.FAVORITES)
      .reply(200, offersServer);

    return favoritesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITES,
          payload: offersAdapted,
        });
      });
  });
});
