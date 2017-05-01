import React, { Component } from 'react'
import {
  Text,
  Navigator,
  TouchableHighlight,
  View
} from 'react-native'

import Main from './Main'

import Rankings from './Rankings'
import Kitchen from './Kitchen'
import ShoppingList from './ShoppingList'
import Recipes from './Recipes'
import Fridge from './Fridge'
import Food from './Food'
import Recipe from './Recipe'
import FullRecipe from './FullRecipe'
import ConfirmDelete from './ConfirmDelete'

import styles from '../styles'

export default class AppContainer extends Component {
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
        if (route.name === 'Fridge') return <Fridge navigator={navigator} />
        if (route.name === 'Recipes') return <Recipes navigator={navigator} />
        if (route.name === 'Freezer') return <Freezer navigator={navigator} />
        if (route.name === 'Shopping List') return <ShoppingList navigator={navigator} />
        if (route.name === 'Food') return <Food navigator={navigator} />
        if (route.name === 'ConfirmDelete') return <ConfirmDelete navigator={navigator} />
        if (route.name === 'Recipe') return <Recipe navigator={navigator} {...route.passProps} />
        if (route.name === 'FullRecipe') return <FullRecipe navigator={navigator} {...route.passProps} />
        if (route.name === 'Kitchen') return <Kitchen navigator={navigator} />
        if (route.name === 'Pantry') return <Pantry navigator={navigator} />
        if (route.name === 'Rankings') return <Rankings navigator={navigator} />
        if (route.name === 'All') return <All navigator={navigator} />
      }}
      style={{paddingTop: 64}}
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
