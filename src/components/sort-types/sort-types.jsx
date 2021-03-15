import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {SortingTypes} from '../../const';
import {changeSorting} from '../../store/offer/action';
import {v4 as uuidv4} from 'uuid';
import {getActiveSorting} from '../../store/offer/selectors';

const SortTypes = ({activeSorting, onSortTypeChangeHandler}) => {

  const [isOpenFilter, setOpenFilter] = useState(false);

  const handleTypeToOpenClick = () => {
    setOpenFilter(!isOpenFilter);
  };

  const handleSortTypeClick = (evt) => {
    onSortTypeChangeHandler(evt.target.innerText);
    setOpenFilter(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleTypeToOpenClick}>
        {activeSorting}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpenFilter && `places__options--opened `}`} >
        {Object.values(SortingTypes).map((value) => {
          return (
            <li className={`places__option ${activeSorting === value ? `places__option--active` : ``}`} tabIndex={0} key={uuidv4()} onClick={handleSortTypeClick}>{value}</li>
          );
        })}
      </ul>
    </form>
  );
};

SortTypes.propTypes = {
  activeSorting: PropTypes.string.isRequired,
  onSortTypeChangeHandler: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeSorting: getActiveSorting(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSortTypeChangeHandler(sortType) {
    dispatch(changeSorting(sortType));
  }
});

export {SortTypes};
export default connect(mapStateToProps, mapDispatchToProps)(SortTypes);
