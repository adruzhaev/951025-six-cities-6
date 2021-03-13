import React from 'react';
import './loading-page.css';

const LoadingPage = () => {

  return (
    <div style={{
      display: `flex`,
      flexDirection: `column`,
      justifyContent: `center`,
      alignItems: `center`,
      width: `100%`,
      height: `100vh`,
    }}>
      <h1>Loading</h1>
      <div className="spinner"/>
    </div>
  );
};

export default LoadingPage;
