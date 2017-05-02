import axios from 'axios';

export default function fetchSearch(value){
  value = value.replace(' ', '_')
  const url = `https://recipe-endpoints.herokuapp.com/items/search/${value}`;
  console.log(url);
  return {
    type: 'FETCH_SEARCH',
    payload: axios.get(url)
  }
}
