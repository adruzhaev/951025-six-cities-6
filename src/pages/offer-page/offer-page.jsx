import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from '../../components/header';
import ReviewsList from '../../components/reviews-list';
import PlaceCardComponent from '../../components/place-card';
import Map from '../../components/map';
import LoadingPage from '../loading-page';
import NotFoundPage from '../not-found-page';
import ReviewForm from '../../components/review-form';
import OfferGallery from '../../components/offer-gallery';
import OfferParts from '../../components/offer-parts';
import {fetchOffer, fetchOffersNearby} from '../../store/offer/api-actions';
import {fetchReviewsList} from '../../store/reviews/api-actions';
import {offerPropTypes, reviewPropType} from '../../prop-types';
import {AuthorizationStatus, OfferStatus} from '../../const';
import {cleanState} from '../../store/offer/action';
import {getAuthorizationStatus} from '../../store/auth/selectors';
import {getReviews} from '../../store/reviews/selectors';
import {getOffers, getOffer, getNotFoundOffer, getOffersNearby} from '../../store/offer/selectors';

const OfferPage = ({offers, offersNearby, offer, reviews, onLoadOffer, notFoundOffer, authorizationStatus, unmount}) => {

  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  const {id} = useParams();

  useEffect(() => {
    onLoadOffer(id);

    return unmount;
  }, [id]);

  if (notFoundOffer === OfferStatus.NOT_FOUND) {
    return <NotFoundPage />;
  }

  return (
    !offer ? <LoadingPage /> :
      <div className="page">

        <Header />

        <main className="page__main page__main--property">
          <section className="property">

            <OfferGallery images={offer.images}/>

            <OfferParts offer={offer}>
              <section className="property__reviews reviews">
                <ReviewsList reviews={reviews}/>
                {isAuthorized && <ReviewForm id={offer.id}/>}
              </section>
            </OfferParts>

            <section className="property__map map">
              <Map offers={offers}/>
            </section>
          </section>

          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <div className="near-places__list places__list">
                {offersNearby.map((item) => (
                  <PlaceCardComponent
                    key={item.id}
                    isNearest
                    offer={item}
                  />
                ))}

              </div>
            </section>
          </div>
        </main>

      </div>
  );
};

OfferPage.propTypes = {
  offers: PropTypes.arrayOf(offerPropTypes).isRequired,
  offersNearby: PropTypes.arrayOf(offerPropTypes).isRequired,
  reviews: PropTypes.arrayOf(reviewPropType).isRequired,
  onLoadOffer: PropTypes.func.isRequired,
  offer: PropTypes.object,
  notFoundOffer: PropTypes.string,
  authorizationStatus: PropTypes.string.isRequired,
  unmount: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
  offersNearby: getOffersNearby(state),
  offer: getOffer(state),
  reviews: getReviews(state),
  notFoundOffer: getNotFoundOffer(state),
  authorizationStatus: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadOffer(id) {
    dispatch(fetchOffer(id));
    dispatch(fetchReviewsList(id));
    dispatch(fetchOffersNearby(id));
  },
  unmount() {
    dispatch(cleanState());
  }
});

export {OfferPage};
export default connect(mapStateToProps, mapDispatchToProps)(OfferPage);
