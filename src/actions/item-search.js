import axios from 'axios';

export default function fetchSearch(value){
  console.log(value);
  const url = `https://recipe-endpoints.herokuapp.com/items/search/${value}/`;
  console.log(url);
  return {
    type: 'FETCH_SEARCH',
    payload: axios.get(url)
  }
}
