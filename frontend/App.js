import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/WelcomeScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import Header from './assets/components/header';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const MainNav = createStackNavigator(
  { Welcome: WelcomeScreen, Home: HomeScreen, Profile: ProfileScreen },
  {
    initialRouteName: 'Home'
  }
);

const App = createAppContainer(MainNav);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});

export default App;
