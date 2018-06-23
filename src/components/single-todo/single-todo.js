import React from 'react';
import './single-todo.css';

const todo = {
  name: 'Learn React Debugging',
  description: 'Download React Devtools, watch Tech Talk'
};

const SingleTodo = () => (
  <div className="singleTodo-container">
    <h4>{todo.name}</h4>
    <p>{todo.description}</p>
  </div>
);

SingleTodo.displayName = 'SingleTodo';
export default SingleTodo;
