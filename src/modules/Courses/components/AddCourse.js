
import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { updateCourse } from '../actions';

export class AddCourse extends React.Component {
  constructor(props, context) {
    super(props, context);
    const key = Math.floor(Math.random() * Math.floor(100));
    this.state = {
      course: {
        key,
        id: key,
      },
      errors: {},
      saving: false,
    };
    this.saveCourse = this.saveCourse.bind(this);
    this.updateCourseState = this.updateCourseState.bind(this);
  }

  updateCourseState(event) {
    const field = event.target.name;
    const { course } = this.state;
    course[field] = event.target.value;
    return this.setState({ course });
  }

  courseFormIsValid() {
    let formIsValid = true;
    const errors = {};

    if (this.state.course.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({ errors });
    return formIsValid;
  }

  saveCourse(event) {
    event.preventDefault();

    if (!this.courseFormIsValid()) {
      return;
    }

    this.setState({ saving: true });
    this.props.updateCourse(this.state.course);
    this.redirect();
  }

  redirect() {
    this.setState({ saving: false });
    this.props.navigation.push('/Courses');
  }

  render() {
    // const { authors } = this.props;

    return (
      <View>
        <Text>Add new Course</Text>
      </View>
    );
  }
}

AddCourse.propTypes = {
  // course: PropTypes.objectOf(PropTypes.any).isRequired,
  authors: PropTypes.arrayOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  updateCourse: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
  authors: state.authors.authors,
});

export default connect(mapStateToProps, ({ updateCourse }))(AddCourse);
