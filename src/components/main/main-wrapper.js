
import React, {Component} from 'react';
import ListTodos from '../list-todos/list-todos';
import AddTodo from '../add-todo/add-todo';
import './main-wrapper.css';

class Main extends Component {
  state = {todos: []}
  displayName = 'Main'
  toggleTodo = (e) => {
    const changedTodos = this.state.todos.map((todo) => {
      if (todo.id === +e.target.name) todo.passing = !todo.passing;
        return todo;
    });
    this.setState({todos: changedTodos});
  }
  handleAddTodo = (newTodo) => {
    newTodo.id = this.state.todos.length + 1;
    this.setState({todos: [newTodo, ...this.state.todos]});
  }
  componentDidMount() {
    fetch('http://localhost:4000/todos')
    .then((response) => response.json())
    .then(data => this.setState({todos: data}));
  }
  render() {
    return (
      <div className="main">
        <div className="main-left">
            <AddTodo handleAddTodo={this.handleAddTodo} />
        </div>
        <div className="main-right">
          <ListTodos todos={this.state.todos} toggleTodo={this.toggleTodo} />
        </div>
      </div>
    );
  }
}

export default Main;
