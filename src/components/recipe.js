import React from 'react';

class RecipeView extends React.Component {

  componentWillReceiveProps(nextProps){
    if (nextProps.match.params.recipe !== this.props.match.params.recipe) {
      const item = nextProps.match.params.recipe;
      this.props.fetchRecipe(item);
    }
  }

  componentDidMount(){
    const item = this.props.match.params.recipe;
    this.props.fetchRecipe(item);
  }

  renderIngredients(ingredient){
    return (
      <li key={ingredient.item.name}>
        <div className='flexWrapper'>
          <h4>{ingredient.amount}x {ingredient.item.name.replace(/_/g, " ")}</h4>
          <img src={ingredient.item.image} alt='Not Available'/>
        </div>
      </li>
    )
  }

  render(){
    if (this.props.loading){
      return (
        <div className='recipe' id='recipe-loading'>
          <div className='spinner'></div>
        </div>
      )
    } else if (this.props.foundRecipe === false) {
      return (
        <div className='recipe' id='recipe-not-found'>
          <h3>Recipe Not Found</h3>
        </div>
      )
    } else {
      return (
        <div className='recipe' id='recipe-display'>
          <img src={this.props.data.item.image} alt='Not Available' />
          <h3>{this.props.data.item.name.replace(/_/g, " ")}</h3>
          <ul>
            {this.props.data.ingredients.map(this.renderIngredients)}
          </ul>
        </div>
      )
    }
  }
}

export default RecipeView;
