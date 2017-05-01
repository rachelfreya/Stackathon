import React, { Component } from 'react'
import {
  WebView
} from 'react-native'

import styles from '../styles'

export default class FullRecipe extends Component {
  render() {
    return (
      <WebView source={{uri: this.props.url}} />
    )
  }
}
