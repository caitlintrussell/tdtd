import React from 'react';
import './single-todo.css';

const todo = {
  name: 'Learn React Debugging',
  description: 'Download React Devtools, watch Tech Talk',
  passing: false,
};
// MIGRATE TO ITERABLE W PROPS.TODO, not dummy data !
const SingleTodo = () => (
  <div className="singleTodo-container">
    <div className="singleTodo-toggle">
      <input name="passing" className="checkbox" type="checkbox" id="toggle" checked={todo.passing} />
      <label htmlFor="toggle" />
    </div>
    <div className="singleTodo-todo">
      <h4>{todo.name}</h4>
      <p>{todo.description}</p>
    </div>
  </div>
);

SingleTodo.displayName = 'SingleTodo';
export default SingleTodo;
