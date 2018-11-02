import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, StyleSheet, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

class Courses extends Component {
  static navigationOptions = {
    title: 'Courses',
    tabBarIcon: ({ focused }) => (
      <MaterialIcon
        name="subject"
        color="#ccc"
        size={25}
        style={!focused ? { color: '#3e2465' } : ''}
      />
    ),
  };

  render() {
    console.log(this.props.courses);
    return (
      <View styles={styles}>
        <Text>Courses</Text>
        {this.props.courses.length > 0 && this.props.courses.map(course => (
          <Text key={course.title}>{course.title}</Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

const mapStateToProps = state => ({
  courses: state.courses.courses,
});

Courses.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Courses);
