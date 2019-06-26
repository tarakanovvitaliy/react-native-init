import React, {Component} from 'react'
import {StyleSheet, View, Text, Button} from 'react-native'

import FormInput from './FormInput'

export default class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  handleSubmit = () => {
    console.log(this.state)
  }
  handleChange = (val, name) => {
    this.setState({[name]:val})
  }
  formInputWrapper = (placeholder, name) => {
    return (
      <FormInput 
        onChange={this.handleChange}
        placeholder={placeholder}
        name={name}
      />
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.closeButton}>×</Text>
        <Text style={styles.title}>Sign Up</Text>

        {this.formInputWrapper('First Name', 'firstName')}
        {this.formInputWrapper('Last Name', 'lastName')}
        {this.formInputWrapper('Email', 'email')}
        {this.formInputWrapper('Phone', 'phone')}
        {this.formInputWrapper('Create Password', 'password')}
        
        <Text style={styles.caption}>
          By clicking Sign up agreed to our <Text style={{textDecorationLine:'underline'}}>Terms and Conditions</Text>
        </Text>

        <Button
          onPress={this.handleSubmit}
          title="Accept"
          color="grey"
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 22,
    paddingTop: 0,
    paddingBottom: 77,
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