import {reducer} from './reducer';
import {ActionType} from './action';
import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../services/api';
import {CITIES, SortingTypes, OfferStatus, APIRoutes} from '../../const';
import {offerServer, offersServer} from './test-mocks';
import {fetchOffersList, fetchOffer, fetchOffersNearby} from './api-actions';
import {adaptOfferToClient} from '../../services/adapter';

const api = createAPI(() => {});
describe(`Reducers work correctly`, () => {
  it(`Reducer without parameters should return initial state`, () => {
    expect(reducer(undefined, {}))
      .toEqual({
        activeCity: CITIES[0].city,
        activeSorting: SortingTypes.POPULAR,
        offers: [],
        offer: null,
        offersNearby: [],
        isDataLoaded: false,
        notFoundOffer: OfferStatus.FOUND,
      });
  });
});

const offerAdapted = adaptOfferToClient(offerServer);
const offersAdapted = offersServer.map((item) => adaptOfferToClient(item));

describe(`Async operation work correctly`, () => {
  it(`Should make a correct API call to fetch offer`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = `1`;
    const offerDetailsLoader = fetchOffer(id);
    const url = APIRoutes.OFFERS + `/` + id;

    apiMock
      .onGet(url)
      .reply(200, offerServer);

    return offerDetailsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFER,
          payload: offerAdapted
        });
      });
  });

  it(`Should make a correct API call to fetch offers list`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = `1`;
    const offersListLoader = fetchOffersList(id);

    const url = APIRoutes.OFFERS;

    apiMock
      .onGet(url)
      .reply(200, offersServer);

    return offersListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: offersAdapted
        });
      });
  });

  it(`Should make a correct API call to fetch nearby offers`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = `1`;
    const nearbyOffersLoader = fetchOffersNearby(id);

    const url = APIRoutes.OFFERS + `/` + id + `/nearby`;

    apiMock
      .onGet(url)
      .reply(200, offersServer);

    return nearbyOffersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS_NEARBY,
          payload: offersAdapted
        });
      });
  });
});
