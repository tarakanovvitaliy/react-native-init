import React, {Component} from 'react'
import {StyleSheet, View, TextInput} from 'react-native'

export default class FormInput extends Component {
  constructor(props) {
    super(props)
    this.state = {isFocus:false}
  }
  handleFocus = () => {
    this.setState({isFocus:true})
  }
  handleBlur = () => {
    this.setState({isFocus:false})
  }
  render() {
    return (
      <TextInput
        style={[styles.input, this.state.isFocus ? styles.inputFocus : null]}
        placeholder={this.props.placeholder}
        onChangeText={text => this.props.onChange(text, this.props.name)}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
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