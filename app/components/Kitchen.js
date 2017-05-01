import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native'
import { connect } from 'react-redux'

import { setView } from '../actions-reducers/actions'
import styles from '../styles'

class Kitchen extends Component {
  toLocation(location){
    this.props.setView(location)
    this.props.navigator.push({ name: 'Fridge' })
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <View style={[styles.tileViews, {backgroundColor: 'powderblue'}]}>
          <TouchableHighlight onPress={() => this.toLocation('Fridge')}>
            <Text style={styles.tileTitle}>Fridge</Text>
          </TouchableHighlight>
        </View>
        <View style={[styles.tileViews, {backgroundColor: 'steelblue'}]}>
          <TouchableHighlight onPress={() => this.toLocation('Freezer')}>
            <Text style={styles.tileTitle}>Freezer</Text>
          </TouchableHighlight>
        </View>
        <View style={[styles.tileViews, {backgroundColor: 'skyblue'}]}>
          <TouchableHighlight onPress={() => this.toLocation('Pantry')}>
            <Text style={styles.tileTitle}>Pantry</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

export default connect(null, { setView })(Kitchen)
