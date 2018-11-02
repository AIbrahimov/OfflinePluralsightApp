import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

class Details extends Component {
  static navigationOptions = {
    title: 'Details',
    tabBarIcon: ({ focused }) => (
      <MaterialIcon
        name="details"
        color="#ccc"
        size={25}
        style={!focused ? { color: '#3e2465' } : ''}
      />
    ),
  };

  render() {
    return (
      <View>
        <Text>Details</Text>
        <Text>
          This Application uses React, Redux-Saga,
          React Native Navigation and a variety of other helpful libraries
        </Text>
      </View>
    );
  }
}

export default Details;
