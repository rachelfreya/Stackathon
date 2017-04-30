export const addFoods = (foods) => {
  return {
    type: 'ADD_FOODS',
    payload: foods
  }
}

export const setFood = (food, date) => {
  return {
    type: 'SET_FOOD',
    food: food,
    date: date
  }
}
