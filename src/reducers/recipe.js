const initialState = {
    sendingRecipeRequest: false,
    error: '',
    activeRecipe: {}
}

function recipeReducer(state=initialState, action) {

  switch (action.type) {
    case 'FETCH_RECIPE_PENDING':
      return {...state, sendingRecipeRequest: true}
    case 'FETCH_RECIPE_FULFILLED':
      return {
        ...state,
        sendingRecipeRequest: false,
        activeRecipe: action.payload.data
      }
    case 'FETCH_RECIPE_REJECTED':
      return {
        ...state,
        sendingRecipeRequest: false,
        activeRecipe: {},
        error: 'some gosh darned error'
      }
    default:
      return state
  }
}

export default recipeReducer;
