import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../assets/components/header';
import Main from '../assets/components/main';
import Welcome from '../assets/components/welcome';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Main />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
