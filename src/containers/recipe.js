import { connect } from 'react-redux';
import recipeView from '../components/recipe';
import fetchRecipe from '../actions/recipe';

const mapStateToProps = (state) => {
  return {
    data: state.recipe.activeRecipe,
    loading: state.recipe.sendingRecipeRequest,
    foundRecipe: state.recipe.foundRecipe
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchRecipe: (value) => {
      dispatch(fetchRecipe(value))
    }
  }
}

const recipeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(recipeView)

export default recipeContainer;
