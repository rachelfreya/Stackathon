import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight,
  TextInput,
  Button,
  Image
} from 'react-native';

export default class Stackathon extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
  // const routes = [
  //   {name: 'Main', index: 0},
  //   {name: 'Fridge', index: 1},
  //   {name: 'Shopping List', index: 2},
  //   {name: 'Recipes', index: 3}
  // ];
  return (
    <Navigator
      initialRoute={{name: 'Main'}}
      //initialRouteStack={routes}
      renderScene={(route, navigator) => {
        if (route.name === 'Main') return <Main navigator={navigator} />
        if (route.name === 'Fridge') return <Fridge navigator={navigator} {...route.passProps} />
        if (route.name === 'Recipes') return <Recipes navigator={navigator} />
        if (route.name === 'Freezer') return <Freezer navigator={navigator} />
        if (route.name === 'Shopping List') return <ShoppingList navigator={navigator} {...route.passProps} />
        if (route.name === 'Food') return <Food navigator={navigator} {...route.passProps} />
      }}
      style={{padding: 75}}
      navigationBar={
      <Navigator.NavigationBar
       routeMapper={{
         LeftButton: (route, navigator, index, navState) =>
          {
            if (route.index === 0) {
              return null;
            } else {
              return (
                <TouchableHighlight onPress={() => navigator.pop()}>
                  <Text> Back</Text>
                </TouchableHighlight>
              );
            }
          },
           RightButton: (route, navigator, index, navState) =>
          {
            return (
                <TouchableHighlight onPress={() => navigator.pop()}>
                  <Text>Home </Text>
                </TouchableHighlight>
              );
          },
         Title: (route, navigator, index, navState) =>
           { return (<Text style={styles.navTitle}>Waste No More</Text>); },
       }}
       style={{backgroundColor: 'seagreen'}}
     />
  }
    />
  );
  }
}

class Main extends Component {
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
        <View style={{flex: 1, backgroundColor: 'powderblue'}}>
          <TouchableHighlight onPress={() => this.toFridge()}>
            <Text style={styles.tileTitle}>Fridge</Text>
          </TouchableHighlight>
          <Image source={{uri: 'https://www.clipartkid.com/images/261/refrigerator-clipart-vector-clip-art-online-royalty-free-design-ef1Zue-clipart.png'}}
       style={{width: 100, height: 150}} />
        </View>
        <View style={{flex: 1, backgroundColor: 'steelblue'}}>
          <TouchableHighlight onPress={() => this.toList()}>
            <Text style={styles.tileTitle}>Shopping List</Text>
          </TouchableHighlight>
          <Image source={{uri: 'https://img.clipartfest.com/e2d5c5155d5aeb41868df42bae742547_all-the-imagesgraphics-arts-shopping-list-clip-art_236-333.jpeg'}}
       style={{width: 100, height: 150}} />
        </View>
        <View style={{flex: 1, backgroundColor: 'skyblue'}}>
          <TouchableHighlight onPress={() => this.toRecipes()}>
            <Text style={styles.tileTitle}>Recipes</Text>
          </TouchableHighlight>
          <Image source={{uri: 'https://img.clipartall.com/free-recipe-sheet-clip-art-recipe-clip-art-800_683.png'}}
       style={{width: 100, height: 150}} />
        </View>
      </View>
    )
  }
}

class Fridge extends Component {
  constructor(props){
    super(props)
    this.state = { foods: [], food: '', quantity: null, date: null }
  }
  // componentDidMount(){
  //    this.setState({ foods: [...this.state.foods, this.props.addedFoods] })
  // }
  toFood(foodName){
    this.props.navigator.push({
      name: 'Food',
      passProps: { name: foodName }
    })
  }
  addToFridge() {
    this.setState({ foods: [...this.state.foods, {name: this.state.food, quantity: this.state.quantity, date: this.state.date}] })
    this.refs['textInput1'].setNativeProps({text: ''})
    this.refs['textInput2'].setNativeProps({text: ''})
    this.refs['textInput3'].setNativeProps({text: ''})
  }
  render() {
    const allFoods = this.props.foods.concat(this.state.foods)
    return (
      <View>
        <Text>Fridge</Text>
          {allFoods.map((food, i) => (
            <View key={i}>
            <Text>
              <Text>{food.name}, Quantity: {food.quantity}, Use By: Is this bad?</Text>
            </Text>
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
          <TextInput
            placeholder='Date Bought'
            ref='textInput3'
            style={styles.input}
            onChangeText={(date) => this.setState({ date })}
          />
          <Button title='Add to Fridge' onPress={() => this.addToFridge()} />
      </View>
    )
  }
}

class Recipes extends Component {
  render() {
    return (
        <Text>
          Recipes
        </Text>
    );
  }
}

class ShoppingList extends Component {
  constructor(props){
    super(props)
    this.state = { list: [], bought: [], quantity: null, food: '' }
  }
  toFridge(){
    this.props.navigator.push({
      name: 'Fridge',
      passProps: { foods: this.state.bought }
    })
  }
  buy(food, quantity) {
    this.setState({
      bought: [...this.state.bought, {name: food, quantity: quantity, date: 'today'}],
      list: this.state.list.filter(item => item !== food),
    })
  }
  submitAndClear(fieldName, food) {
    this.setState({list: [...this.state.list, food]})
    this.refs[fieldName].setNativeProps({text: ''});
  }
  render() {
    let empty = this.state.list ? '' : 'Your Cart Is Empty'
    return (
        <View style={styles.pageBackground}>
        <Text style={styles.pageTitle}>Shopping List</Text>
        <Text>{empty}</Text>
          {
            this.state.list.map((food, i) => (
            <View key={i}>
              <Text>{food}</Text>
              <TextInput placeholder='Set Quantity' style={styles.input} onChangeText={(quantity) => this.setState({quantity})} />
              <Button title='Buy' onPress={() => this.buy(food, this.state.quantity)}></Button>
            </View>
          ))
          }
          <Text style={styles.pageLabel}>Add Item</Text>
          <TextInput
            ref='textInput1'
            style={styles.input}
            onSubmitEditing={(e) => this.submitAndClear('textInput1', e.nativeEvent.text)}
          />
          <Button title='Done Shopping' onPress={() => this.toFridge()} />
        </View>
    );
  }
}

class Freezer extends Component {
  render()
  {
    return (
      <Text>Freezer</Text>
    )
  }
}

class Food extends Component {
  render()
  {
    const foodChart = { Milk: {moldy: true, max: '10 days'},
      'Ground Beef': {moldy: true, max: 'two days'},
      Steak: {moldy: true, max: 'five days'},
      Cheddar: {moldy: false, max: 'four weeks'},
      Bacon: {moldy: true, max: 'one week'},
      Eggs: {moldy: true, max: 'five weeks'},
      Bread: {moldy: true, max: 'two weeks'},
      Chicken: {moldy: true, max: 'two days'},
      Apple: {moldy: false, max: 'four weeks'}
    }
    let moldy = foodChart[this.props.name].moldy ? 'you need to throw it away' : 'you can cut off the moldy part and eat the rest'
    return (
      <View>
        <Text style={styles.pageTitle}>{this.props.name}</Text>
        <Text>If the product is moldy, {moldy}. This product can last up to {foodChart[this.props.name].max} in the fridge, but the best way to test is to smell it.</Text>
      </View>
    );
  }
}

const images = ['https://images.clipartpanda.com/teacher-apple-clipart-apple.png', 'https://www.clipartster.com/images/290/grilled-chicken-breast-lsq9fK-clipart.jpg', 'https://img.clipartfox.com/aed16c8c4ee5d01190535604f561346c_ground-chucks-clipart-1-ground-beef-clipart_263-192.jpeg', 'https://img.clipartall.com/eggs-clipart-free-download-clipart-eggs-299_225.png', 'https://clipartix.com/wp-content/uploads/2016/08/Steaks-clipart-web-clipart.png', 'https://img.clipartfest.com/9dafb8226b6d0a1d86d66c2566347132_14-strange-facts-about-cheese-cheddar-cheese-clipart_2048-1461.jpeg', 'https://clipartix.com/wp-content/uploads/2016/06/Bread-free-food-clipart-clip-art-pictures-graphics-illustrations.jpg']

const styles = StyleSheet.create({
  navTitle: {
    fontWeight: 'bold',
    fontSize: 18
  },
  tileTitle: {
    fontSize: 18,
    textAlign: 'center',
  },
  pageTitle: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },
  pageBackground: {
    backgroundColor: 'powderblue',
    flex: 1
  },
  pageLabel: {
    fontSize: 18,
    textAlign: 'center'
  },
  input: {
    height: 20,
    width: 200,
    backgroundColor: 'white'
  }
});

AppRegistry.registerComponent('Stackathon', () => Stackathon);
