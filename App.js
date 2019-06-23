import React, {Component} from 'react'
import {StyleSheet, ScrollView} from 'react-native'

import Form from './componets/Form'

export default class App extends Component {
  render() {
    return (
      <ScrollView style={{
        flex: 1,
        paddingTop: 44,
        paddingBottom: 44,
      }}>
        <Form />
      </ScrollView>
    )
  }
}