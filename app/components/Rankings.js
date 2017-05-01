import React, { Component } from 'react'
import { Text, View } from 'react-native'

import styles from '../styles'

export default class Freezer extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.pageBackground}>
        <Text style={styles.pageTitle}>Your Friends</Text>
        <Text>1. Rachel 5 lbs.</Text>
        <Text>2. Anna 4 lbs.</Text>
        <Text>2. Jenny 4 lbs.</Text>
        <Text>2. Julie 4 lbs.</Text>
        <Text style={{marginBottom: 50}}>2. Mariana 4 lbs.</Text>
        <Text style={styles.pageLabel}>Waste No More members in New York City have combined to save 1,234,567 lbs. of food waste so far this year!</Text>
        <Text style={styles.pageLabel}>You rank 89th out of 1,234 members!</Text>
        <Text style={styles.pageLabel}>Share on Facebook</Text>
        <Text style={styles.pageLabel}>Share on Twitter</Text>
      </View>
    )
  }
}
