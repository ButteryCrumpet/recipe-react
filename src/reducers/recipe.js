const initalRecipeFormat = {
  ingredients: [],
  item: {
    name: 'None',
    image: 'None'
  },
  station: {
    name: 'None',
    image: 'None'
  }
}

const initialState = {
    sendingRecipeRequest: false,
    error: '',
    activeRecipe: initalRecipeFormat,
    foundRecipe: false
}

function recipeReducer(state=initialState, action) {

  switch (action.type) {
    case 'SELECT_ITEM':
      console.log(action.payload);
      return {...state, activeRecipe: action.payload}
    case 'FETCH_RECIPE_PENDING':
      return {...state, sendingRecipeRequest: true}
    case 'FETCH_RECIPE_FULFILLED':
      return {
        ...state,
        sendingRecipeRequest: false,
        activeRecipe: action.payload.data,
        foundRecipe: true
      }
    case 'FETCH_RECIPE_REJECTED':
      return {
        ...state,
        sendingRecipeRequest: false,
        activeRecipe: initalRecipeFormat,
        foundRecipe: false,
        error: 'some gosh darned error'
      }
    default:
      return state
  }
}

export default recipeReducer;
