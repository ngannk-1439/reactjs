import {put, call, takeLatest, fork} from 'redux-saga/effects';
import {registerUserService, loginUserService} from '../services/index';
import * as types from '../constants/index';

export function* registerSaga(payload) {
  try {
    const response = yield call(registerUserService, payload);
    yield [
      put({
        type: types.REGISTER_USER_SUCCESS,
        response
      })
    ]
  } catch(error) {
    yield put({
      type: types.REGISTER_USER_ERROR,
      error
    })
  }
}

export function* loginSaga(payload) {
  try {
    const response = yield call(loginUserService, payload);
    yield [
      put({
        type: types.LOGIN_USER_SUCCESS,
        response
      })
    ]
  } catch(error) {
    yield put({
      type: types.LOGIN_USER_ERROR,
      error
    })
  }
}

export function* watchUserAuthentication() {
  yield takeLatest(types.REGISTER_USER, registerSaga);
  yield takeLatest(types.LOGIN_USER, loginSaga);
}

export default function* startForman() {
  yield fork(watchUserAuthentication);
}

