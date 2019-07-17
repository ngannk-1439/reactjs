import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';

let LoginForm = props => {
  const {onHandleLogin} = props
  return (
    <form onSubmit={onHandleLogin}>
      <div>
        <label htmlFor='email'>Email</label>
        <Field name='email' component='input' type='text' />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <Field name='password' component='input' type='password' />
      </div>
      <button type='Submit'>Submit</button>
    </form>
  )
}

LoginForm = reduxForm({
  form: 'login'
})(LoginForm)

export default LoginForm;