import React from 'react';

class RecipeView extends React.Component {

  componentWillReceiveProps(nextProps){
    if (nextProps.match.params.recipe !== this.props.match.params.recipe) {
      const item = nextProps.match.params.recipe;
      this.props.fetchRecipe(item);
    }
  }

  render(){
    return (
      <div>
        <h3>Recipe</h3>
        <p>{this.props.activeRecipe}</p>
      </div>
    )
  }
}

export default RecipeView;
