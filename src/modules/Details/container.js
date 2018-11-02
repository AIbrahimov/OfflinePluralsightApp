import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

class Details extends Component {
  static navigationOptions = {
    title: 'Details',
    tabBarIcon: ({ focused }) => (
      <MaterialIcon
        name="details"
        color="#ccc"
        size={25}
        style={!focused ? styles.icon : null}
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Details</Text>
        <Text style={styles.content}>
          This Application uses React, Redux-Saga,
          React Native Navigation and a variety of other helpful libraries
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    color: '#3e2465',
  },
  titleText: { fontSize: 30, fontFamily: 'Cochin', textAlign: 'center' },
  content: { fontSize: 15, fontFamily: 'Cochin' },
});

export default Details;
