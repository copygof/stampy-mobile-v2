import React, { Component } from 'react'
import t from 'tcomb-form-native'
import { AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native'

const Form = t.form.Form
// defind form login
const formLogin = t.struct({
  username: t.String,
  password: t.String
})
const options = {

  // auto: 'none', // placeholders, none
  fields: {
    username: {
      // label: 'Username',
      placeholder: 'Enter you username',
      help: '',
      error: 'Insert a valid username'
    },
    password: {
      // label: 'Username',
      placeholder: 'Enter you password',
      error: 'Insert a valid password'
    },
  }
}

class LoginForm extends Component {

  onPress = () => {
    var value = this.refs.form.getValue()
    if (value) {

    }
  }
  render() {
    return (
      <View style={styles.container}>
        {/* display */}
        <Form
          ref="form"
          type={formLogin}
          options={options}
        />
        <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})

export default LoginForm
