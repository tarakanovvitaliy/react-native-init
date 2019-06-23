import React, {Component} from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'

import FormInput from './FormInput'

export default class Form extends Component {
  handleSubmit = () => {
    console.log('submit')
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.closeButton}>×</Text>
        <Text style={styles.title}>Sign Up</Text>

        <FormInput placeholder="First Name" />
        <FormInput placeholder="Last Name" />
        <FormInput placeholder="Email" />
        <FormInput placeholder="Phone" />
        <FormInput placeholder="Create Password" />

        <Text style={styles.caption}>
          By clicking Sign up agreed to our <Text style={{textDecorationLine:'underline'}}>Terms and Conditions</Text>
        </Text>

        <Button
          onPress={this.handleSubmit}
          title="Accept"
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 22,
    paddingTop: 0
  },
  closeButton: {
    fontSize: 44,
    color: 'grey',
    marginBottom: 22,
  },
  title: {
    paddingBottom: 22,
    fontWeight: 'bold',
    fontSize: 33,
  },
  caption: {
    fontSize: 14,
    color: 'grey',
    textAlign: 'center',
    marginBottom: 22,
  },
})