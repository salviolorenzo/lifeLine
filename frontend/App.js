import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './assets/components/header';
import Welcome from './assets/components/welcome';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Welcome />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
