import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Button,
  TouchableHighlight
} from 'react-native'
import { connect } from 'react-redux'

import styles from '../styles'
import { addRecipe } from '../actions-reducers/actions'


class Recipe extends Component {
  constructor(props){
    super(props)
    this.state = { recipeUrl: '' }
  }
  getRecipe(id){
    fetch(`https://api.yummly.com/v1/api/recipe/${id}?_app_id=657a2fca&_app_key=ad27f965b5aa72459d8b2207e5403e87`
, {method: "GET"})
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({recipeUrl: responseData.source.sourceRecipeUrl})
      })
    .then(() => this.props.navigator.push({
      name: 'FullRecipe',
      passProps: {
        url: `https${this.state.recipeUrl
        .slice(this.state.recipeUrl.indexOf(':'))}`
      }
    })
    )
    .catch(console.error)
  }
  toRecipes(){
    this.props.navigator.push({
      name: 'Recipes'
    })
  }
  render()
  {
    return(
      <View>
      <Button title='Go to My Recipes' onPress={() => this.toRecipes()} />
      {this.props.recipes.map((recipe, i) => (
        <View key={i}>
          <Text>{recipe.recipeName}</Text>
          <TouchableHighlight onPress={() => this.getRecipe(recipe.id)} >
            <Image style={styles.recipeImg}source={{uri: `https${recipe.smallImageUrls[0].slice(recipe.smallImageUrls[0].indexOf(':'))}`}} />
          </TouchableHighlight>
          <Button title='Add to My Recipes' onPress={() => this.props.addRecipe([recipe])} />
        </View>
        ))
      }
      </View>
      )
  }
}

export default connect(null, { addRecipe })(Recipe)
