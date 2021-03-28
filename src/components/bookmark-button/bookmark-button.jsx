import React from 'react';
import PropTypes from 'prop-types';
import {offerPropTypes} from '../../prop-types';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeFavoriteOfferStatus} from '../../store/favorites/api-actions';
import {getAuthorizationStatus} from '../../store/auth/selectors';
import {AuthorizationStatus, AppRoutes} from '../../const';

const BookmarkButton = ({offer, authorizationStatus, onBookmarkButtonClick, width, height, className}) => {

  const history = useHistory();

  const Status = {
    REMOVE: 0,
    ADD: 1,
  };

  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;

  const handleBookmarkClick = () => {
    if (isAuthorized) {
      onBookmarkButtonClick(offer.id, offer.isFavorite ? Status.REMOVE : Status.ADD);
    } else {
      history.push(AppRoutes.LOGIN);
    }
  };

  return (
    <button className={`button ${className}bookmark-button ${offer.isFavorite ? `${className}bookmark-button--active` : ``}`} type="button" onClick={handleBookmarkClick}>
      <svg className={`${className}bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
};

BookmarkButton.propTypes = {
  offer: offerPropTypes,
  authorizationStatus: PropTypes.string,
  onBookmarkButtonClick: PropTypes.func,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state)
});

const mapDispatchToProps = (dispatch) => ({
  onBookmarkButtonClick(id, status) {
    dispatch(changeFavoriteOfferStatus(id, status));
  }
});

export {BookmarkButton};
export default connect(mapStateToProps, mapDispatchToProps)(BookmarkButton);
