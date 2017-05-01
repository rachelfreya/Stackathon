export const addFoods = (foods) => {
  return {
    type: 'ADD_FOODS',
    foods: foods
  }
}

export const setFood = (food, date) => {
  return {
    type: 'SET_FOOD',
    food: food,
    date: date
  }
}

export const removeFood = (food) => {
  return {
    type: 'REMOVE_FOOD',
    food: food
  }
}

export const addRecipe = (recipe) => {
  return {
    type: 'ADD_RECIPE',
    recipe: recipe
  }
}

export const deleteRecipe = (id) => {
  return {
    type: 'DELETE_RECIPE',
    id: id
  }
}
