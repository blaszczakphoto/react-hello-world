import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';

export default class MyScene extends Component {
  static get defaultProps() {
    return {
      title: 'Mariusz'
    };
  }

  render() {
    return (
      <View>
        <Text>Hi! My name is {this.props.title}.</Text>
        <Text>I wanna show you a simle hello world app</Text>
      </View>
    )
  }
}