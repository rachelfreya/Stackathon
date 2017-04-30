import React, { Component } from 'react'
import {
  Text,
  Button,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  DatePickerIOS,
  AlertIOS
} from 'react-native'
import { connect } from 'react-redux'

import styles from '../styles'
import { addFoods, setFood } from '../actions-reducers/actions'

class Fridge extends Component {
  constructor(props){
    super(props)
    this.state = { food: '',
    quantity: null,
    selectedDate: new Date(),
    expires: new Date(),
    dateAdded: new Date()
    }
    this.onDateChange = this.onDateChange.bind(this)
  }
  toFood(foodName, dateAdded){
    this.props.setFood(foodName, dateAdded)
    this.props.navigator.push({
      name: 'Food'
    })
  }
  addToFridge() {
    const date = this.state.selectedDate.getDate(),
    today = new Date()
    this.state.expires.setDate(date + this.props.foodChart[this.state.food].min)
    this.setState({ dateAdded: this.state.selectedDate, selectedDate: new Date() })
    this.props.addFoods([{name: this.state.food, quantity: this.state.quantity, expires: this.state.expires, dateAdded: this.state.dateAdded}])
    if (this.state.expires <= today) AlertIOS.alert(`The ${this.state.food.toLowerCase
      ()} in your fridge is about to expire.`, 'You should try to use it in the next couple of days.')
    this.refs['textInput1'].setNativeProps({text: ''})
    this.refs['textInput2'].setNativeProps({text: ''})
  }
  confirmTrash(foodName, dateAdded) {
    this.props.setFood(foodName, dateAdded)
    this.props.navigator.push({
      name: 'ConfirmDelete'
    })
  }
  onDateChange (date){
    this.setState({selectedDate: date});
  }
  render() {
    return (
      <View style={styles.pageBackground}>
        <Text style={styles.pageTitle}>Fridge</Text>
          {this.props.foods.map((food, i) => (
            <View style={styles.foodView} key={i}>
              <Text>{food.name}, Quantity: {food.quantity}, Use By: {food.expires.toLocaleDateString()}*</Text>
            <TouchableHighlight onPress={() => this.confirmTrash(food.name, this.state.dateAdded)}>
              <Image style={{height: 50, width: 50}} source={{uri: 'https://cdn1.iconfinder.com/data/icons/hawcons/32/699013-icon-27-trash-can-128.png'}} />
            </TouchableHighlight>
            <Button title='Can I Eat This?' onPress={() => this.toFood(food.name, this.state.dateAdded)} />
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
          date={this.state.selectedDate}
          mode="date"
          onDateChange={this.onDateChange}
          />
          <Button title='Add to Fridge' onPress={() => this.addToFridge()} />
      </View>
    )
  }
}

const mapState = ({ foods, foodChart }) => ({ foods, foodChart })
export default connect(mapState, { addFoods, setFood })(Fridge)
