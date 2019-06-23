import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'

import HelloComputer from './componets/HelloComputer'
import HelloText from './componets/HelloText'
import HelloButton from './componets/HelloButton'
import Form from './componets/Form'

export default class App extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        marginTop: 44,
        marginBottom: 44,
      }}>
        <Form />
      </View>
    )
  }
}