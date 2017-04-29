import React, { Component } from 'react'
import {
  Text,
  Button,
  View
} from 'react-native'

import styles from '../styles'

export default class Freezer extends Component {
  constructor(props){
    super(props)
    this.state = { recipeName: '' }
    this.test = this.test.bind(this)
  }
  test(){
    fetch('https://api.yummly.com/v1/api/recipes?_app_id=657a2fca&_app_key=ad27f965b5aa72459d8b2207e5403e87&allowedIngredient[]=apples&allowedIngredient[]=bacon+slices&allowedIngredient[]=extra+sharp+cheddar+cheese', {method: "GET"})
    .then((response) => response.json())
      .then((responseData) => {
        this.setState({recipeName: responseData.matches[0].recipeName})
        })
    .done();
  }
  render()
  {
    return (
      <View>
      <Button title='Test' onPress={this.test} />
      <Text>{this.state.recipeName}</Text>
      </View>
    )
  }
}
