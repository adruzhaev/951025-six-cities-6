import {
  changeCity,
  changeSorting,
  loadOffers,
  loadOffer,
  notFoundOffer,
  ActionType,
} from './action';
import {offerServer, offersServer} from './test-mocks';
import {adaptOfferToClient} from '../../services/adapter';

const offersAdapted = offersServer.map((item) => adaptOfferToClient(item));

describe(`Action creators work correctly`, () => {
  it(`Action creator for change city returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: `Amsterdam`
    };

    const city = `Amsterdam`;
    expect(changeCity(city)).toEqual(expectedAction);
  });

  it(`Action creator for change sorting type returns correct action`, () => {
    const expectedAction = {
      type: ActionType.CHANGE_SORTING,
      payload: `Price: low to high`
    };

    const sortType = `Price: low to high`;
    expect(changeSorting(sortType)).toEqual(expectedAction);
  });

  it(`Action creator for load offers returns offers`, () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: offersAdapted,
    };

    expect(loadOffers(offersAdapted)).toEqual(expectedAction);
  });

  it(`Action creator for load offer returns correct offer`, () => {
    const expectedAction = {
      type: ActionType.LOAD_OFFER,
      payload: {
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
        "title": `The house among olive`,
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
          "isPro": true,
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
        "isFavorite": false,
        "previewImage": `https://assets.htmlacademy.ru/intensives/javascript-3/hotel/16.jpg`,
        "maxAdults": 1
      }
    };

    expect(loadOffer(adaptOfferToClient(offerServer))).toEqual(expectedAction);
  });

  it(`Action creator for not found offer returns undefined payload`, () => {
    const expectedAction = {
      type: ActionType.NOT_FOUND_OFFER,
    };

    expect(notFoundOffer()).toEqual(expectedAction);
  });
});
