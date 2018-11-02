import React from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  TouchableHighlight,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { updateCourse } from '../actions';

export class ViewCourse extends React.Component {
  editCourse(id) {
    this.props.navigation.push('EditCourse', id);
  }

  render() {
    const { course } = this.props;
    console.log(course);
    return (
      <View>
        <Text>Course Details</Text>
        <TouchableHighlight onPress={() => this.editCourse(course.id)}>
          <MaterialIcon
            name="edit"
            color="black"
            size={15}
          />
        </TouchableHighlight>
        <Text>{`Title: ${course.title}`}</Text>
        <Text>{`Category: ${course.category}`}</Text>
        <Text>{`Author: ${course.authorId}`}</Text>
        <Text>{`Length: ${course.length}`}</Text>
        <Text>{`watchHref: ${course.watchHref}`}</Text>
      </View>
    );
  }
}

ViewCourse.propTypes = {
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

export default connect(mapStateToProps, ({ updateCourse }))(ViewCourse);
