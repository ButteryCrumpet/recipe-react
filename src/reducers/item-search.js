const initialState = {
  sendingSearchRequest: false,
  sendingRecipeRequest: false,
  error: '',
  searchResults: [],
  recipe: {}
}

function itemSearchReducer(state=initialState, action) {

  switch (action.type) {
    case 'FETCH_SEARCH_PENDING':
      return {...state, sendingSearchRequest: true}
    case 'FETCH_SEARCH_FULFILLED':
      return {
        ...state,
        sendingSearchRequest: false,
        searchResults: action.payload.data
      }
    case 'FETCH_SEARCH_REJECTED':
      return {
        ...state,
        sendingSearchRequest: false,
        searchResults: [],
        error: 'some gosh darned error'
      }
    default:
      return state
  }
}

export default itemSearchReducer;
