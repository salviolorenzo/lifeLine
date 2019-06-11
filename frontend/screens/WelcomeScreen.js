import React, { Component } from 'react';
import Form from 'react-native-form';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TextInput,
  Input
} from 'react-native';
import {
  Image,
  Button,
  FormLabel,
  FormInput,
  FormValidationMessage
} from 'react-native-elements';

export default class WelcomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome',
    headerStyle: {
      backgroundColor: '#25ceff',
      color: 'white'
    }
  };

  state = {
    isLoggingIn: false,
    isRegister: false,
    forms: {
      logUserName: '',
      logPass: '',
      name: '',
      email: '',
      regUserName: '',
      regPass: '',
      regPassConfirm: ''
    }
  };

  setDisplay() {
    if (!this.state.isLoggingIn && !this.state.isRegister) {
      return (
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              this.setState({
                isLoggingIn: true,
                isRegister: false
              });
            }}
            buttonStyle={styles.buttons}
            type="solid"
            title="Log In"
            raised={true}
          />
          <Button
            onPress={() => {
              this.setState({
                isLoggingIn: false,
                isRegister: true
              });
            }}
            buttonStyle={styles.buttons}
            type="solid"
            title="Register"
            raised={true}
          />
        </View>
      );
    } else if (this.state.isLoggingIn) {
      return (
        <Form ref="form" style={styles.forms}>
          <TextInput
            style={styles.textInputs}
            placeholder="Username"
            onChangeText={text =>
              this.setState({
                forms: { ...this.state.forms, logUserName: text }
              })
            }
          />
          <TextInput
            style={styles.textInputs}
            placeholder="Password"
            onChangeText={text =>
              this.setState({ forms: { ...this.state.forms, logPass: text } })
            }
          />
          <Button
            onPress={() => {
              alert(
                `${this.state.forms.logUserName} ${this.state.forms.logPass}`
              );
            }}
            buttonStyle={{
              backgroundColor: '#25ceff',
              borderRadius: 10,
              width: 200,
              height: 40
            }}
            type="solid"
            title="Log In"
            raised={true}
          />
        </Form>
      );
    } else if (this.state.isRegister) {
      return (
        <Form ref="form" style={styles.forms}>
          <TextInput
            style={styles.textInputs}
            placeholder="Name"
            onChangeText={text =>
              this.setState({
                forms: { ...this.state.forms, name: text }
              })
            }
          />
          <TextInput
            style={styles.textInputs}
            placeholder="Email"
            onChangeText={text =>
              this.setState({
                forms: { ...this.state.forms, email: text }
              })
            }
          />
          <TextInput
            style={styles.textInputs}
            placeholder="Username"
            onChangeText={text =>
              this.setState({
                forms: { ...this.state.forms, regUserName: text }
              })
            }
          />
          <TextInput
            style={styles.textInputs}
            placeholder="Password"
            onChangeText={text =>
              this.setState({ forms: { ...this.state.forms, regPass: text } })
            }
          />
          <TextInput
            style={styles.textInputs}
            placeholder="Confirm Password"
            onChangeText={text =>
              this.setState({
                forms: { ...this.state.forms, regConfirmPass: text }
              })
            }
          />
          <Button
            onPress={() => {
              alert(
                `${this.state.forms.logUserName} ${this.state.forms.logPass}`
              );
            }}
            buttonStyle={{
              backgroundColor: '#25ceff',
              borderRadius: 10,
              width: 200,
              height: 40
            }}
            type="solid"
            title="Log In"
            raised={true}
          />
        </Form>
      );
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/images/noname.png')}
          style={styles.img}
          PlaceholderContent={<ActivityIndicator />}
        />
        <Text style={styles.welcomeText}>Welcome to LifeLine.</Text>
        <Text style={styles.subText}>
          The social app centered around connection and wellbeing
        </Text>
        {this.setDisplay()}
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
  },

  img: {
    marginTop: 75,
    width: 300,
    height: 200
  },

  welcomeText: {
    marginBottom: 5,
    marginTop: 40,
    fontSize: 36,
    color: '#25ceff'
  },
  subText: {
    margin: 5,
    fontSize: 12
  },

  buttonContainer: {
    flex: 1,
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: 50,
    alignItems: 'flex-start'
  },

  buttons: {
    backgroundColor: '#25ceff',
    borderRadius: 10,
    width: 100,
    height: 50
  },

  forms: {
    flex: 1,
    width: 300,
    justifyContent: 'flex-start',
    paddingTop: 30,
    alignItems: 'center'
  },

  textInputs: {
    padding: 5,
    height: 40,
    width: 200,
    borderColor: '#25ceff',
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRadius: 10,
    borderTopWidth: 0,
    borderRightWidth: 0,
    marginBottom: 10
  }
});
