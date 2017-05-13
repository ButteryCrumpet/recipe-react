import axios from 'axios';

export function fetchSearch(value){
  value = value.replace(' ', '_')
  const url = `https://recipe-endpoints.herokuapp.com/items/search/${value}`;
  return {
    type: 'FETCH_SEARCH',
    payload: axios.get(url),
  }
}

export function selectItem(item){
  return {
    type: 'SELECT_ITEM',
    payload: item
  }
}
