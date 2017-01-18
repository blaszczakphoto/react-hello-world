/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView
} from 'react-native';

class LoversName extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', HelloVisibility:0};
  };

  displayGreetings = () => {
    this.setState({HelloVisibility: 1});
  };

  render() {
    return (
      <ScrollView style={{padding: 10, flex: 1}}>
        <TextInput
          style={{height:40, flex:1}}
          placeholder='Jak się nazywa Twoje Kochanie?'
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={() => this.displayGreetings()}
        />
        <Hello name={this.state.text} style={{opacity: this.state.HelloVisibility,flex: 5, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center'}}/>
      </ScrollView>
    );
  }
}

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = {showText: true};

    // Toggle the state every second
    setInterval(() => {
      this.setState({ showText: !this.state.showText });
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text style={this.props.style}>{display}</Text>
    );
  }
}


class Greeting extends Component {
  render() {
    return (
      <Text style={styles.welcome}>
          Witaj Kochana {this.props.name}!
      </Text>
    );
  }
}

class Hello extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let pic = {
      uri: 'https://image.freepik.com/free-vector/declaration-of-love_23-2147517078.jpg'
    };
    return (
      <View style={this.props.style}>
        <View style={{}}>
          <View style={styles.container}>
            <Greeting name={this.props.name} />
            <Blink text='Kocham Cię' style={{color: 'red'}} />
            <Image source={pic} style={{width: 193, height: 200}}/>
            <Image source={pic} style={{width: 193, height: 200}}/>
            <Image source={pic} style={{width: 193, height: 200}}/>
            <Image source={pic} style={{width: 193, height: 200}}/>
          </View>
        </View>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    width: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'powderblue'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('HelloWorld', () => LoversName);


