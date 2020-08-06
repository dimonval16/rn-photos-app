import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import state from './state';
import rootReducer from '../reducers/index';

export default createStore(rootReducer, state, applyMiddleware(thunk));
