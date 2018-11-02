import {
  call, fork, put, take, takeEvery,
} from 'redux-saga/effects';

import { fetchCourses, fetchAuthors } from './actions';

import { RSF } from '../../../config/firebase';
import { UPDATE_COURSE } from './constants';

export function* fetchListOfCourses() {
  const channel = yield call(RSF.database.channel, '/courses');
  while (true) {
    const { value: courses } = yield take(channel);
    yield put(fetchCourses(courses));
  }
}

export function* fetchListOfAuthors() {
  const channel = yield call(RSF.database.channel, '/authors');
  while (true) {
    const { value: authors } = yield take(channel);
    yield put(fetchAuthors(authors));
  }
}

export function* updateCurrentCourse(action) {
  yield call(RSF.database.patch, `/courses/${action.course.id}`, action.course);
}

export default function* rootSaga() {
  yield [
    fork(fetchListOfCourses),
    fork(fetchListOfAuthors),
    takeEvery(UPDATE_COURSE, updateCurrentCourse),
  ];
}
