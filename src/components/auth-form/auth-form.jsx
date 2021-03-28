import React from 'react';
import PropTypes from 'prop-types';
import {login} from '../../store/auth/api-actions';
import {connect} from 'react-redux';

const AuthForm = ({onSubmit}) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const data = {};
    const fields = new FormData(evt.target);

    for (let [name, value] of fields.entries()) {
      data[name] = value;
    }

    onSubmit(data);
  };

  return (
    <form className="login__form form" action="#" method="post" onSubmit={handleSubmit}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden" htmlFor="email">E-mail</label>
        <input
          className="login__input form__input"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          required
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden" htmlFor="password">Password</label>
        <input
          className="login__input form__input"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
        />
      </div>
      <button
        className="login__submit form__submit button"
        type="submit"
      >
                Sign in
      </button>
    </form>
  );
};

AuthForm.propTypes = {
  onSubmit: PropTypes.func
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit(authData) {
    dispatch(login(authData));
  }
});

export {AuthForm};
export default connect(null, mapDispatchToProps)(AuthForm);
