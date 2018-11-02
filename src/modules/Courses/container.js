import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Octicons';

class Courses extends Component {
  static navigationOptions = {
    title: 'Courses',
    tabBarIcon: ({ focused }) => (
      <MaterialIcon
        name="view-list"
        color="#ccc"
        size={25}
        style={!focused ? styles.icon : null}
      />
    ),
  };

  viewCourse = (id) => {
    this.props.navigation.push('ViewCourse', id);
  }

  editCourse = (id) => {
    this.props.navigation.push('EditCourse', id);
  }

  addCourse = () => {
    this.props.navigation.push('AddCourse');
  }

  render() {
    const { courses } = this.props;

    const addIcon = (
      <TouchableHighlight onPress={this.addCourse}>
        <MaterialIcon
          name="add"
          color="black"
          size={25}
        />
      </TouchableHighlight>
    );

    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Courses</Text>
        {addIcon}
        {
          courses.length > 0 && (
            <FlatList
              data={courses}
              renderItem={({ item }) => (
                <View>
                  <Text style={styles.item} key={item.title}>
                    {item.title}
                  </Text>
                  <TouchableHighlight onPress={() => this.viewCourse(item.id)}>
                    <Icon
                      name="eye"
                      color="black"
                      size={15}
                    />
                  </TouchableHighlight>
                  <TouchableHighlight onPress={() => this.editCourse(item.id)}>
                    <MaterialIcon
                      name="edit"
                      color="black"
                      size={15}
                    />
                  </TouchableHighlight>
                </View>
              )
              }
            />
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  icon: { color: '#3e2465' },
  titleText: { fontSize: 30, fontFamily: 'Cochin', textAlign: 'center' },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const mapStateToProps = state => ({
  courses: state.courses.courses,
});

Courses.propTypes = {
  courses: PropTypes.arrayOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Courses);
