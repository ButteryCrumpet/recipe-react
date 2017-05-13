const initialState = {
  sendingSearchRequest: false,
  error: '',
  searchResults: [],
}

function itemSearchReducer(state=initialState, action) {

  switch (action.type) {
    case 'FETCH_SEARCH_PENDING':
      return {...state, sendingSearchRequest: true}
    case 'FETCH_SEARCH_FULFILLED':
      if (state.sendingSearchRequest === false){
        return state
      } else {
        return {
          ...state,
          sendingSearchRequest: false,
          searchResults: action.payload.data
        }
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
