import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native'
import { connect } from 'react-redux'

import styles from '../styles'

class Food extends Component {
  render(){
    const moldy = this.props.foodChart[this.props.currentFood.name].moldy ? 'you need to throw it away' : 'you can cut off the moldy part and eat the rest',
    dateAdded = this.props.currentFood.dateAdded.getDate(),
    maxExpire = new Date()
    maxExpire.setDate(dateAdded + this.props.foodChart[this.props.currentFood.name].max)
    return (
      <View style={styles.foodView}>
        <Text style={styles.pageTitle}>{this.props.currentFood.name}</Text>
        <Image style={styles.foodImg} source={{uri: this.props.foodChart[this.props.currentFood.name].url}} />
        <Text style={{padding: 25}}>If the product is moldy, {moldy}. This product could still be good until {maxExpire.toLocaleDateString()} in the fridge, but the best way to test is to smell it.</Text>
      </View>
    );
  }
}

const mapState = ({ foodChart, currentFood }) => ({ foodChart, currentFood })
export default connect(mapState, null)(Food)
