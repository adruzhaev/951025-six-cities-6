import React from 'react';
import MainPage from '../main-page/main-page';
import PropTypes from 'prop-types';

const App = (props) => {

  const {count} = props;

  return (
    <MainPage count={count}/>
  );
};

App.propTypes = {
  count: PropTypes.number.isRequired
};

export default App;
