import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../assets/components/header';
import Welcome from '../assets/components/welcome';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Main />
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
