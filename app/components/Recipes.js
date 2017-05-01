import React, { Component } from 'react'
import {
  Text,
  Button,
  View,
  TouchableHighlight,
  Image
} from 'react-native'
import { connect } from 'react-redux'

import styles from '../styles'
import { deleteRecipe } from '../actions-reducers/actions'


class Recipes extends Component {
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
  render()
  {
    return (
      <View>
      <Text>Recipes</Text>
      {this.props.recipes.map((recipe, i) => (
        <View key={i}>
          <Text>{recipe.recipeName}</Text>
          <TouchableHighlight onPress={() => this.getRecipe(recipe.id)} >
            <Image style={styles.recipeImg}source={{uri: `https${recipe.smallImageUrls[0].slice(recipe.smallImageUrls[0].indexOf(':'))}`}} />
          </TouchableHighlight>
          <Button title='Delete Recipe' onPress={() => this.props.deleteRecipe(recipe.id)} />
        </View>
        ))
      }
      </View>
    )
  }
}

const mapState = ({ recipes }) => ({ recipes })
export default connect(mapState, { deleteRecipe })(Recipes)
