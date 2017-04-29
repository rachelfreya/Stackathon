import React, { Component } from 'react'
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native'

import styles from '../styles'

export default class ConfirmDelete extends Component {
  render()
  {
    return (
      <View>
        <Text style={styles.pageTitle}>Are You Sure?</Text>
        <Text>Are you sure you want to throw this away?</Text>
        <TouchableHighlight>
          <Text>Click here to find out if this food is still OK to eat.</Text>
        </TouchableHighlight>
        <Text>If the food really is bad, please try to compost it. This is your nearest compost location.</Text>

      </View>
    )
  }
}
