import {
  FETCH_COURSES,
  FETCH_AUTHORS,
  UPDATE_COURSE,
} from './constants';

export const fetchCourses = courses => ({
  type: FETCH_COURSES,
  courses,
});

export const fetchAuthors = authors => ({
  type: FETCH_AUTHORS,
  authors,
});

export const updateCourse = course => ({
  type: UPDATE_COURSE,
  course,
});
