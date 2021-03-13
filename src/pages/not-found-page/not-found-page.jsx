import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../components/header';

const NotFoundPage = () => {
  return (
    <section>
      <Header />

      <section style={{display: `flex`, flexDirection: `column`, alignItems: `center`}}>
        <h1>404. Page not found</h1>
        <Link to="/">Вернуться на главную</Link>
      </section>
    </section>
  );
};

export default NotFoundPage;
