import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import ItemSearch from './containers/item-search';
import RecipeView from './containers/recipe';
import RecipeStore from './store';

ReactDOM.render(
  <Provider store={RecipeStore}>
      <BrowserRouter basename="/">
        <div>
          <Route path='/:recipe' component={RecipeView} />
          <Route path='/' component={ItemSearch} />
        </div>
      </BrowserRouter>
  </Provider >,
  document.getElementById('root')
);
