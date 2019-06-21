import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import * as types from '../../actions/auth/authTypes'
import * as api from '../../../utils/api'

const headerParams = {
    'Content-Type': 'application/json'

}

export function* asyncLogin(action) {
  console.log('in async login');
  try {
    const response = yield call(axios.post, api.login, action.user, {headers: headerParams})
    console.log(response)
    yield put({ type: types.LOGIN_SUCCESS, response: response.data})
  } catch(err) {
    yield put({ type: types.LOGIN_FAILURE, error: err.message })
  }
}

export function* asyncSignup(action) {
  try {
    const response = yield call(axios.post, api.signup, action.data)
    yield put({ type: types.SIGNUP_SUCCESS, response: response.data})
  } catch(err) {
    yield put({ type: types.SIGNUP_FAILURE, error: err.message })
  }
}
