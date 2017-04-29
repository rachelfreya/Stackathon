import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight,
  Image
} from 'react-native'

import styles from '../styles'

export default class Main extends Component {
  toFridge(){
    this.props.navigator.push({ name: 'Fridge' })
  }
  toRecipes(){
    this.props.navigator.push({ name: 'Recipes' })
  }
  toList(){
    this.props.navigator.push({ name: 'Shopping List' })
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={[styles.tileViews, {backgroundColor: 'powderblue'}]}>
          <Text style={styles.tileTitle}>Fridge</Text>
          <TouchableHighlight onPress={() => this.toFridge()}>
            <Image source={{uri: 'https://www.clipartkid.com/images/261/refrigerator-clipart-vector-clip-art-online-royalty-free-design-ef1Zue-clipart.png'}}
       style={{width: 100, height: 160}} />
          </TouchableHighlight>
        </View>
        <View style={[styles.tileViews, {backgroundColor: 'steelblue'}]}>
          <Text style={styles.tileTitle}>Shopping List</Text>
          <TouchableHighlight onPress={() => this.toList()}>
            <Image source={{uri: 'https://img.clipartfest.com/e2d5c5155d5aeb41868df42bae742547_all-the-imagesgraphics-arts-shopping-list-clip-art_236-333.jpeg'}} style={{height: 150, width: 100}} />
          </TouchableHighlight>
        </View>
        <View style={[styles.tileViews, {backgroundColor: 'skyblue'}]}>
          <Text style={styles.tileTitle}>Recipes</Text>
          <TouchableHighlight onPress={() => this.toRecipes()}>
            <Image source={{uri: 'https://img.clipartall.com/free-recipe-sheet-clip-art-recipe-clip-art-800_683.png'}} style={{height: 120, width: 150}} />
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
