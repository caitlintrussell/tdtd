import React, {Component} from 'react';
import SingleTodo from '../single-todo/single-todo';


class ListTodos extends Component {
  displayName = 'ListTodos';
  render() {
    const {todos, toggleTodo} = this.props;
    return (
      todos.map((todo) => (
        <SingleTodo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))
    );
  }

}

export default ListTodos;
