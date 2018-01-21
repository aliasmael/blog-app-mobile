import * as React from 'react'
import { Component } from 'react'
import {
  ActivityIndicator,
  View
} from 'react-native'
import style from './style'

export class Loader extends Component {
  render() {
    return (
      <View style={[style.container, style.horizontal]}>
        <ActivityIndicator size="large" color="#944a8e" />
      </View>
    )
  }
}
