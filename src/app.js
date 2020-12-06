import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Home from './pages/home';
import About from './pages/about';
import Todolist from './pages/todoList/index';

const routes = [{
  path: '/',
  component: Home,
  exact: true,
}, {
  path: '/about',
  component: About,
  children: [{
    path: '/about/todo-list',
    component: Todolist
  }]
}]

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </Provider>
  )
}

ReactDom.render(<App />, document.getElementById("root"));

if(module.hot){
  module.hot.accept();
}