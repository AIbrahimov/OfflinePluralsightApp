import { all } from 'redux-saga/effects';
import coursesSaga from './modules/Courses/sagas';

export default function* rootSaga() {
  yield all([coursesSaga()]);
}
