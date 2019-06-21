import authSaga from './auth/watcher';
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  console.log('in root saga');
  yield all([
    authSaga()
  ])
};
