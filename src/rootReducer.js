import { combineReducers } from 'redux';
import CourseReducer from './modules/Courses/reducer';

const rootReducer = combineReducers({
  courses: CourseReducer,
  authors: CourseReducer,
});

export default rootReducer;
