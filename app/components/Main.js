import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native'

import styles from '../styles'

export default class Main extends Component {
  toKitchen(){
    this.props.navigator.push({ name: 'Kitchen' })
  }
  toRecipes(){
    this.props.navigator.push({ name: 'Recipes' })
  }
  toList(){
    this.props.navigator.push({ name: 'Shopping List' })
  }
  toRankings(){
    this.props.navigator.push({ name: 'Rankings' })
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={[styles.tileViews, {backgroundColor: 'lightcyan'}]}>
          <Text style={{textAlign: 'center', fontSize: 14, marginBottom: 20}}>You have saved 5 pounds of food waste and $25 so far this year!</Text>
          <TouchableHighlight onPress={() => this.toRankings()}>
            <Text style={{textAlign: 'center', fontSize: 14}}>See where you rank</Text>
          </TouchableHighlight>
        </View>
        <View style={[styles.tileViews, {backgroundColor: 'powderblue'}]}>
          <TouchableHighlight onPress={() => this.toKitchen()}>
            <Text style={styles.tileTitle}>My Kitchen</Text>
          </TouchableHighlight>
        </View>
        <View style={[styles.tileViews, {backgroundColor: 'steelblue'}]}>
          <TouchableHighlight onPress={() => this.toList()}>
            <Text style={styles.tileTitle}>My Shopping List</Text>
          </TouchableHighlight>
        </View>
        <View style={[styles.tileViews, {backgroundColor: 'skyblue'}]}>
          <TouchableHighlight onPress={() => this.toRecipes()}>
            <Text style={styles.tileTitle}>My Recipes</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
