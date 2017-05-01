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
