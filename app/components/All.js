import React, { Component } from 'react'
import {
  WebView
} from 'react-native'

import styles from '../styles'

export default class Freezer extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return (
      <WebView source={{uri: 'https://www.google.com/maps/d/viewer?mid=1oMdEEzEuacc9pbwDTJTBbDiaQHI&usp=sharing'}} />
    )
  }
}
