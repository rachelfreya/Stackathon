import React, { Component } from 'react'
import {
  Text,
  Button,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  DatePickerIOS
} from 'react-native'
import { connect } from 'react-redux'

import styles from '../styles'
import { addFoods, increaseQuantity } from '../actions-reducers/actions'

class Fridge extends Component {
  constructor(props){
    super(props)
    this.state = { food: '',
    quantity: null,
    date: new Date(),
    expires: new Date()
    }
    this.onDateChange = this.onDateChange.bind(this)
  }
  toFood(foodName){
    this.props.navigator.push({
      name: 'Food',
      passProps: { name: foodName }
    })
  }
  addToFridge() {
    const date = this.state.date.getDate()
    this.state.expires.setDate(date+7)
    this.setState({ date: new Date() })
    this.props.addFoods([{name: this.state.food, quantity: this.state.quantity, expires: this.state.expires}])
    this.refs['textInput1'].setNativeProps({text: ''})
    this.refs['textInput2'].setNativeProps({text: ''})
  }
  confirmTrash(foodName) {
    this.props.navigator.push({
      name: 'ConfirmDelete',
      passProps: { name: foodName }
    })
  }
  onDateChange (date){
    this.setState({date: date});
  }
  render() {
    return (
      <View style={styles.pageBackground}>
        <Text style={styles.pageTitle}>Fridge</Text>
          {this.props.foods.map((food, i) => (
            <View style={styles.foodView} key={i}>
              <Text>{food.name}, Quantity: {food.quantity}, Use By: {food.expires.toLocaleDateString()}*</Text>
            <TouchableHighlight onPress={() => this.confirmTrash(food.name)}>
              <Image style={{height: 50, width: 50}} source={{uri: 'https://cdn1.iconfinder.com/data/icons/hawcons/32/699013-icon-27-trash-can-128.png'}} />
            </TouchableHighlight>
            <Button title='Is this bad?' onPress={() => this.toFood(food.name)} />
            </View>
            ))
          }
        <Text>Add Item</Text>
          <TextInput
            placeholder='Type of Food'
            ref='textInput1'
            style={styles.input}
            onChangeText={(food) => this.setState({ food })}
          />
          <TextInput
            placeholder='Quantity'
            ref='textInput2'
            style={styles.input}
            onChangeText={(quantity) => this.setState({ quantity })}
          />
          <DatePickerIOS
          date={this.state.date}
          mode="date"
          onDateChange={this.onDateChange}
          />
          <Button title='Add to Fridge' onPress={() => this.addToFridge()} />
      </View>
    )
  }
}

const mapState = ({ foods }) => ({ foods })
export default connect(mapState, { addFoods, increaseQuantity })(Fridge)
