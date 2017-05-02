import {createStore, applyMiddleware, combineReducers} from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import searchReducer from './reducers/item-search';
import recipeReducer from './reducers/recipe';

export default createStore(
  combineReducers({
    search: searchReducer,
    recipe: recipeReducer
  }),
  applyMiddleware(
    createLogger(),
    promise()
  )
)
