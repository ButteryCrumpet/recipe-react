const initialState = {
  sendingSearchRequest: false,
  error: '',
  searchResults: [],
  selectedItem: ''
}

function itemSearchReducer(state=initialState, action) {

  switch (action.type) {
    case 'SELECT_ITEM':
      console.log(action.payload);
      return {...state, selectItem: action.payload}
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
