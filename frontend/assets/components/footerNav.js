import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const navItems = [
  {
    icon: '',
    name: 'Home'
  },
  {
    icon: '',
    name: 'People'
  },
  {
    icon: '',
    name: 'Chat'
  },
  {
    icon: '',
    name: 'Settings'
  }
];

export default function footer() {
  return (
    <View style={styles.container}>
      {navItems.map((item, index) => {
        return (
          <Text key={index} style={styles.items}>
            {item.name}
          </Text>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#25ceff',
    color: 'white',
    height: 50,
    position: 'absolute',
    bottom: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignSelf: 'stretch'
  }
  // items: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center'
  // }
});
