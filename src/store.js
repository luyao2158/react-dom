import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducer as todoListStore } from '../pages/todoList/store';

const reducer = combineReducers({
  todoListStore
})

const enhancer = applyMiddleware(thunk);
const store = createStore(reducer, process.env.NODE_ENV === 'development' ? composeWithDevTools(enhancer) : enhancer);

export default store;