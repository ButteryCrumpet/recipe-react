import { connect } from 'react-redux';
import recipeView from '../components/recipe';
import fetchRecipe from '../actions/recipe';

const mapStateToProps = (state) => {
  return {
    data: state.recipe.recipe,
    loading: state.recipe.sendingRecipeRequest,
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
