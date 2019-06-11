import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Footer } from 'react-native-elements';

export default function footer() {
  return (
    <Footer
      style={styles.container}
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'LifeLine', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25ceff'
  }
});
