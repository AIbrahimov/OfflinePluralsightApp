import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import { connect } from 'react-redux';
import { updateCourse } from '../actions';

export class EditCourse extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, this.props.course),
      errors: {},
      saving: false,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.course.id !== nextProps.course.id) {
      this.setState({ course: Object.assign({}, nextProps.course) });
    }
  }

  handleTitle = (text) => {
    const course = { ...this.state.course };
    course.title = text;
    this.setState({ course });
  }

  handleCategory = (text) => {
    const course = { ...this.state.course };
    course.category = text;
    this.setState({ course });
  }

  saveCourse = () => {
    if (!this.courseFormIsValid()) {
      return;
    }

    this.props.updateCourse(this.state.course);
    this.redirect();
  }

  courseFormIsValid = () => {
    let formIsValid = true;
    const errors = {};

    if (this.state.course.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({ errors });
    return formIsValid;
  }

  redirect = () => {
    this.props.navigation.push('Home');
  }

  render() {
    const { course } = this.state;
    console.log(course);
    return (
      <View style={styles.container}>
        <Text style={styles.courseTitle}>Edit {course.title}</Text>
        <TextInput
          style={styles.input}
          name="title"
          placeholder="Title"
          onChangeText={this.handleTitle}
          value={course.title}
        />
        <TextInput
          style={styles.input}
          name="category"
          placeholder="Category"
          onChangeText={this.handleCategory}
          value={course.category}
        />

        <TouchableOpacity
          style={styles.submitButton}
          onPress={this.saveCourse}
        >
          <Text style={styles.submitButtonText}> Submit </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

EditCourse.propTypes = {
  course: PropTypes.objectOf(PropTypes.any).isRequired,
  authors: PropTypes.arrayOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  updateCourse: PropTypes.func.isRequired,
};

function getCourseId(courses, id) {
  console.log(courses);
  const course = courses.filter(c => c.id == id); // eslint-disable-line
  if (course) return course[0];
  return null;
}

const mapStateToProps = (state, ownProps) => {
  console.log(ownProps);
  const courseId = ownProps.navigation.state.params;
  let course = {
    id: '',
    watchHref: '',
    title: '',
    authorId: '',
    length: '',
    category: '',
  };

  const courses = state.courses.courses;

  if (courseId && courses.length > 0) {
    course = getCourseId(courses, courseId);
  }

  return {
    course,
    authors: state.authors.authors,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    margin: 15,
    height: 40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  submitButton: {
    backgroundColor: '#7a42f4',
    padding: 10,
    margin: 15,
    height: 40,
  },
  submitButtonText: {
    color: 'white',
  },
  courseTitle: {
    marginLeft: 160,
  },
});

export default connect(mapStateToProps, ({ updateCourse }))(EditCourse);
