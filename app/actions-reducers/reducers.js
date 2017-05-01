import { combineReducers } from 'redux'

const foodsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FOODS':
      return state.concat(action.foods)
    case 'REMOVE_FOOD':
      return state.filter(food => food.name !== action.food)
    default: return state
  }
}

const recipesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RECIPE':
      return state.concat(action.recipe)
    case 'DELETE_RECIPE':
      return state.filter(recipe => recipe.id !== action.id)
    default: return state
  }
}

const foodReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_FOOD':
      return {name: action.food, dateAdded: action.date}
    default: return state
  }
}

const chartReducer = (state = {}, action) => {
  return {
    Milk: {moldy: true, min: 7, max: 10, url: 'https://www.clipartkid.com/images/126/milk5-X15aEw-clipart.png'},
      'Ground Beef': {moldy: true, min: 1, max: 2, url: 'https://www.clipartkid.com/images/306/beef-cow-wUp219-clipart.gif'},
      Steak: {moldy: true, min: 3, max: 5, url: 'https://www.clipartkid.com/images/65/steak-by-dkdlv-simplified-version-of-the-steak-drawn-by-susan-gaber-KcsfEx-clipart.png'},
      Cheddar: {moldy: false, min: 21, max: 28, url: 'https://www.clipartkid.com/images/852/cheddar-clipart-clipart-panda-free-clipart-images-j64yxT-clipart.png'},
      Bacon: {moldy: true, min: 6, max: 8, url: 'https://www.clipartkid.com/images/103/bacon-b-and-w-clip-art-at-clker-com-vector-clip-art-online-92vCM3-clipart.png'},
      Eggs: {moldy: true, min: 21, max: 35, url: 'https://www.clipartkid.com/images/27/eggs-food-clipart-pictures-royalty-free-clipart-pictures-org-rkirqD-clipart.png'},
      Bread: {moldy: true, min: 7, max: 14, url: 'https://www.clipartkid.com/images/65/bread-basket-clipart-black-and-white-clipart-panda-free-clipart-MG1MuN-clipart.jpeg'},
      Chicken: {moldy: true, min: 1, max: 2, url: 'https://www.clipartkid.com/images/4/chicken2-Sorhje-clipart.png'},
      Apple: {moldy: false, min: 21, max: 28, url: 'https://www.clipartkid.com/images/298/apple-4-big-http-www-wpclipart-com-food-fruit-apple-apple-4-big-umIajy-clipart.png'}
    }
}

const rootReducer = combineReducers({
  foods: foodsReducer,
  currentFood: foodReducer,
  foodChart: chartReducer,
  recipes: recipesReducer
})

export default rootReducer
