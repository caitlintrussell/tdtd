import React, {Component} from 'react';
import './single-todo.css';


const SingleTodo = (props) => {
  const {todo} = props;
  return (
  <div className="singleTodo-container">
    <div className="singleTodo-toggle">
      <input name={todo.id} className="checkbox" type="checkbox" id={`toggle${todo.id}`} checked={todo.passing} onChange={props.toggleTodo} />
      <label htmlFor={`toggle${todo.id}`} />
    </div>
    <div className="singleTodo-todo">
      <h4>{todo.title}</h4>
      <p>{todo.description}</p>
    </div>
  </div>
  );
};

SingleTodo.displayName = 'SingleTodo';
export default SingleTodo;
