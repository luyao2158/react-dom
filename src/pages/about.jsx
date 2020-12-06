import React from 'react';
import { Link } from 'react-router-dom';

const About = (props) => {
  return (
    <div>
      <Link to="/todo-list">去todoList</Link>
      {props.children}
    </div>
  )
}