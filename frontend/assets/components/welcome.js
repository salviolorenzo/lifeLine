import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import { Image, Button } from 'react-native-elements';
import logo from '../images/noname.png';
const console = require('console');

const onPress = event => {
  alert(event.target.value);
};

export default function welcome() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../images/noname.png')}
        style={{ width: 200, height: 200 }}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Text style={styles.welcomeText}>Welcome to LifeLine.</Text>
      <Text style={styles.subText}>
        The social app centered around connection and wellbeing
      </Text>
      <View style={styles.buttonContainer}>
        <Button
          onPress={event => {
            onPress(event);
          }}
          buttonStyle={styles.buttons}
          type="solid"
          title="Log In"
          raised={true}
        />
        <Button
          onPress={event => {
            onPress(event);
          }}
          buttonStyle={styles.buttons}
          type="solid"
          title="Register"
          raised={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },

  img: {},
  welcomeText: {
    margin: 5,
    fontSize: 36,
    color: '#25ceff'
  },
  subText: {
    margin: 5,
    fontSize: 12
  },

  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },

  buttons: {
    backgroundColor: '#25ceff',
    borderRadius: 10,
    width: 100,
    height: 50
  }
});
