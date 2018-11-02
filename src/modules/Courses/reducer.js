import { FETCH_COURSES, FETCH_AUTHORS } from './constants';

const initialState = {
  authors: [],
  courses: [],
};

function CourseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_COURSES:
      return {
        ...state,
        courses: Object.keys(action.courses).map(i => action.courses[i]),
      };
    case FETCH_AUTHORS:
      return {
        ...state,
        authors: Object.keys(action.authors).map(i => action.authors[i]),
      };
    default:
      return state;
  }
}

export default CourseReducer;
