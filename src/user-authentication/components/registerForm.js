import React, { Component } from 'react';
import {Field, reduxForm} from 'redux-form';

let RegisterForm = props => {
  const {onHandleRegister} = props
  return (
    <form onSubmit={onHandleRegister}>
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

RegisterForm = reduxForm({
  form: 'login'
})(RegisterForm)

export default RegisterForm;