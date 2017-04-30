import React, { Component } from 'react'
import {
  Text,
  WebView,
  View
} from 'react-native'
import { connect } from 'react-redux'

import styles from '../styles'

class ConfirmDelete extends Component {
  render() {
    const moldy = this.props.foodChart[this.props.currentFood.name].moldy ? 'you need to throw it away' : 'you can cut off the moldy part and eat the rest',
    dateAdded = this.props.currentFood.dateAdded.getDate(),
    maxExpire = new Date()
    maxExpire.setDate(dateAdded + this.props.foodChart[this.props.currentFood.name].max)
    return (
      <View style={{flex: 1}}>
        <Text style={styles.pageTitle}>Are You Sure?</Text>
        <Text>Are you sure you want to throw this away?</Text>
        <Text>If the product is moldy, {moldy}. This product could still be good until {maxExpire.toLocaleDateString()} in the fridge, but the best way to test is to smell it.</Text>
        <Text>If the food truly is bad, please try to compost it. You can drop off compost at any of these locations in New York City:</Text>
        <WebView style={{width: 350, height: 350, flex: 1}} source={{uri: 'https://www.google.com/maps/d/viewer?mid=1oMdEEzEuacc9pbwDTJTBbDiaQHI&usp=sharing'}} />
      </View>
    )
  }
}

const mapState = ({ foodChart, currentFood }) => ({ foodChart, currentFood })
export default connect(mapState, null)(ConfirmDelete)
