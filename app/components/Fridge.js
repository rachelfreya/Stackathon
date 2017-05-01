import React, { Component } from 'react'
import {
  Text,
  Button,
  View,
  TextInput,
  TouchableHighlight,
  DatePickerIOS,
  AlertIOS,
  Picker,
  ScrollView
} from 'react-native'
import { connect } from 'react-redux'

import styles from '../styles'
import { addFoods, setFood, removeFood } from '../actions-reducers/actions'

class Fridge extends Component {
  constructor(props){
    super(props)
    this.state = { food: '',
    quantity: null,
    selectedDate: new Date(),
    dateAdded: new Date(),
    expires: new Date(),
    selected: 'default',
    ingredients: [],
    recipes: []
    }
    this.onDateChange = this.onDateChange.bind(this)
  }
  toFood(foodName, dateAdded){
    this.props.setFood(foodName, dateAdded)
    this.props.navigator.push({
      name: 'Food'
    })
  }
  addToKitchen() {
    const date = this.state.selectedDate.getDate(),
    today = new Date(),
    expires = this.state.expires
    if (this.state.selectedDate.getDate()>1) expires.setMonth(3)
    expires.setDate(date + this.props.foodChart[this.state.food].min)
    this.setState({ dateAdded: this.state.selectedDate, selectedDate: new Date(), expires: expires })
    this.props.addFoods([{name: this.state.food, quantity: this.state.quantity, expires: this.state.expires, dateAdded: this.state.dateAdded, location: this.props.currentView }])
    this.setState({ expires: new Date() })
    if (this.state.expires <= today) AlertIOS.alert(`The ${this.state.food.toLowerCase
      ()} in your fridge is about to expire.`, 'You should try to use it in the next couple of days.')
    this.refs['textInput1'].setNativeProps({text: ''})
    this.refs['textInput2'].setNativeProps({text: ''})
  }
  selectAction(food){
    switch (this.state.selected) {
      case 'delete':
        this.confirmTrash(food.name, this.state.dateAdded)
        break
      case 'eat':
        this.props.removeFood(food.name)
        break
      case 'edible':
        this.toFood(food.name, this.state.dateAdded)
        break
    }
  }
  confirmTrash(foodName, dateAdded) {
    this.props.setFood(foodName, dateAdded)
    this.props.navigator.push({
      name: 'ConfirmDelete'
    })
  }
  onDateChange (date){
    this.setState({selectedDate: date})
  }
  convert (ingredient){
    switch (ingredient){
      case 'Bacon':
        return 'bacon+slices'
      case 'Cheddar':
        return 'extra+sharp+cheddar+cheese'
      case 'Apple':
        return 'apples'
      case 'Eggs':
        return 'eggs'
      case 'Steak':
        return 'steak'
      case 'Chicken':
        return 'boneless-skinless-chicken-breasts'
      case 'Ground Beef':
        return 'ground-beef'
    }
  }
  recipeSelect(food){
    if (this.state.ingredients.includes(food.name)){
      this.setState({ ingredients: this.state.ingredients.filter(ingredient => ingredient !== food.name) })
    }
    else {
      this.setState({ ingredients: this.state.ingredients.concat([food.name]) })
    }
  }
  searchRecipes(){
    const path = this.state.ingredients.reduce((path, ingredient) => {
      return path + `allowedIngredient[]=${this.convert(ingredient)}&`
    },'https://api.yummly.com/v1/api/recipes?_app_id=657a2fca&_app_key=ad27f965b5aa72459d8b2207e5403e87&').slice(0, -1)
    fetch(path, {method: "GET"})
    .then((response) => response.json())
      .then((responseData) => {
        this.setState({recipes: responseData.matches})
        })
      .then(() => this.props.navigator.push({
      name: 'Recipe',
      passProps: {
        recipes: this.state.recipes
      }
      })
    )
  }
  render() {
    return (
      <ScrollView style={styles.pageBackground}>
        <Text style={styles.pageTitle}>{this.props.currentView}</Text>
          {this.state.ingredients.filter((ingredient, i) => i === 0).map((ingredient, i) => (
            <Button key={i} style={{marginBottom: 40}} title='Search for Recipes' onPress={() => this.searchRecipes()} />
          ))}
          {this.props.foods.filter(food => food.location === this.props.currentView).map((food, i) => (
            <View key={i}>
              <TouchableHighlight onPress={() => this.recipeSelect(food)}>
                <Text style={this.state.ingredients.includes(food.name) ? styles.foodSelected : styles.food}>{food.name}, Quantity: {food.quantity}, Use By: {food.expires.toLocaleDateString()}*</Text>
              </TouchableHighlight>
              <Text>Select Action:</Text>
              <View style={styles.actionView}>
                <Picker style={{height: 150, width: 150}} selectedValue={this.state.selected} onValueChange={(action) => this.setState({selected: action})}>
                  <Picker.Item label="" value="default" />
                  <Picker.Item label="Eat" value="eat" />
                  <Picker.Item label="Throw Away" value="delete" />
                  <Picker.Item label="Move to Freezer" value="freezer" />
                  <Picker.Item label="Edible?" value="edible" />
                </Picker>
              </View>
              <View style={{flex: 1}}>
              <Button style={{marginBottom: 20}} title='Submit' onPress={() => this.selectAction(food)} />
              </View>
            </View>
            ))
          }
          <View style={{flex: 1}}>
        <Text style={styles.pageLabel}>Add Item</Text>
          <View style={{flex: 1, flexDirection: 'row'}}>
          <TextInput
            placeholder='Type of Food'
            ref='textInput1'
            style={styles.addFoodInput}
            onChangeText={(food) => this.setState({ food })}
          />
          <TextInput
            placeholder='Quantity'
            ref='textInput2'
            style={styles.addFoodInput}
            onChangeText={(quantity) => this.setState({ quantity })}
          />
          </View>
          <DatePickerIOS
          date={this.state.selectedDate}
          mode="date"
          onDateChange={this.onDateChange}
          />
          <Button title={`Add to ${this.props.currentView}`} onPress={() => this.addToKitchen()} />
          </View>
      </ScrollView>
    )
  }
}

const mapState = ({ foods, foodChart, currentView }) => ({ foods, foodChart, currentView })
export default connect(mapState, { addFoods, setFood, removeFood })(Fridge)
