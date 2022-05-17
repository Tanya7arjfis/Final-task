import {applyMiddleware, createStore} from 'redux';
import rootReducer from './reducers/Restaurant';
import thunk from 'redux-thunk';
import logger from 'redux-logger'


const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export default store;