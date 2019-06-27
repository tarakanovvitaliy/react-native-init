import React, {Component} from 'react'
import {StyleSheet, View, TextInput} from 'react-native'

export default class FormInput extends Component {
  constructor(props) {
    super(props)
    this.state = {isFocus:false}
  }
  handleContentType = name => {
    switch (name) {
      case 'password' : return 'password'
      case 'email'    : return 'emailAddress'
    }
    return 'none'
  }
  handleKeyboardType = name => {
    switch (name) {
      case 'email' : return 'email-address'
      case 'phone' : return 'phone-pad'
    }
    return 'default'
  }
  render() {
    const {name, placeholder, onChange} = this.props
    const inputType = this.handleContentType(name)
    const keyboardType = this.handleKeyboardType(name)

    return (
      <TextInput
        style={[styles.input, this.state.isFocus ? styles.inputFocus : null]}

        placeholder={placeholder}
        textContentType={inputType}
        keyboardType={keyboardType}
        
        onChangeText={text => onChange(text, name)}
        onFocus={() => this.setState({isFocus:true})}
        onBlur={() => this.setState({isFocus:false})}
      />
    )
  }
}
const styles = StyleSheet.create({
  input: {
    height: 55,
    padding: 11,
    borderWidth: 1,
    borderRadius: 4,
    fontSize: 16,
    borderColor: 'darkgrey',
    marginBottom: 22,
  },
  inputFocus: {
    borderColor: 'orange',
  }
})