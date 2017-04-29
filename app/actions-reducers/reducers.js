import { combineReducers } from 'redux'


const foodsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FOODS':
      return state.concat(action.payload)
    default: return state
  }
}

const rootReducer = combineReducers({
  foods: foodsReducer
})

export default rootReducer
