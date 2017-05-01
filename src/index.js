import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ItemSearch from './containers/item-search'
import { Provider } from 'react-redux';
import RecipeStore from './store';

ReactDOM.render(
  <Provider store={RecipeStore}>
    <ItemSearch />
  </Provider >,
  document.getElementById('root')
);
