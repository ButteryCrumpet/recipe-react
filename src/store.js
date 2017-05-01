import {createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import searchReducer from './reducers/item-search';

export default createStore(
  searchReducer,
  applyMiddleware(
    createLogger(),
    promise()
  )
)
