import axios from 'axios';

export default function fetchRecipe(recipe) {
  const url = `https://recipe-endpoints.herokuapp.com/recipes/${recipe}`;
  return {
    type: 'FETCH_RECIPE',
    payload: axios.get(url)
  }
}
