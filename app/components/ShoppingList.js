import React, { Component } from 'react'
import {
  Text,
  View,
  TextInput,
  Button,
  AlertIOS
} from 'react-native';
import { connect } from 'react-redux'

import { addFoods } from '../actions-reducers/actions'
import styles from '../styles'

class ShoppingList extends Component {
  constructor(props){
    super(props)
    this.state = { list: [], bought: [], quantity: null, food: '' }
  }
  toFridge(){
    this.props.addFoods(this.state.bought)
    this.props.navigator.push({ name: 'Fridge' })
  }
  buy(food, quantity) {
    const today = new Date()
    this.setState({
      bought: [...this.state.bought, {name: food, quantity: quantity, expires: today}],
      list: this.state.list.filter(item => item !== food),
    })
  }
  remove(food) {
    this.setState({
      list: this.state.list.filter(item => item !== food)
    })
  }
  submitAndClear(fieldName, food) {
    const inFridge = this.props.foods.find((item) => item.name === food)
    if (inFridge){
      AlertIOS.alert(
        'Are you sure you want to buy this?',
        `You have already have ${inFridge.quantity} in your fridge`
      )
    }
    this.setState({list: [...this.state.list, food]})
    this.refs[fieldName].setNativeProps({text: ''});
  }
  render() {
    let empty = (this.state.list.length) ? '' : 'Your List Is Empty'
    return (
        <View style={styles.pageBackground}>
        <Text style={styles.pageTitle}>Shopping List</Text>
        <Text style={{textAlign: 'center'}}>{empty}</Text>
          {
            this.state.list.map((food, i) => (
              <View key={i} style={styles.foodView}>
                <Text>{food}</Text>
                <TextInput placeholder='Set Quantity' style={styles.input} onChangeText={(quantity) => this.setState({quantity})} />
                <Button title='Buy' onPress={() => this.buy(food, this.state.quantity)}></Button>
                <Button title='Remove' onPress={() => this.remove(food)}></Button>
              </View>
          ))
          }
          <View style={styles.addtoList}>
            <Text style={styles.pageLabel}>Add Item:</Text>
            <TextInput
              ref='textInput1'
              style={styles.input}
              onSubmitEditing={(e) => this.submitAndClear('textInput1', e.nativeEvent.text)}
            />
          </View>
          <View style={{marginTop: 75}}>
            <Button title='Done Shopping' onPress={() => this.toFridge()} />
          </View>
        </View>
    );
  }
}

const mapState = ({ foods }) => ({ foods })
export default connect(mapState, { addFoods })(ShoppingList)
