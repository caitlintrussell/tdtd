import React, {Component} from 'react';
import SingleTodo from '../single-todo/single-todo';


class ListTodos extends Component {
  // state = {todos: initialState};
  displayName = 'ListTodos';
  // toggleTodo = (e) => {
  //   const changedTodos = this.state.todos;
  //   changedTodos[+e.target.name - 1].passing = !changedTodos[+e.target.name - 1].passing;
  //   this.setState({todos: changedTodos});
  // }
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
