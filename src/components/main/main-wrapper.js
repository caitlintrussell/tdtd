
import React, {Component} from 'react';
import ListTodos from '../list-todos/list-todos';
import AddTodo from '../add-todo/add-todo';
import './main-wrapper.css';

const initialState = [
  {
    id: 1,
    name: 'Go Grocery Shopping',
    description: 'Produce at Stanleys, pantry goods at Fresh Thyme',
    passing: true,
  },
  {
    id: 2,
    name: 'Learn React Debugging',
    description: 'Download React Devtools, watch Tech Talk',
    passing: false,
  },
  {
    id: 3,
    name: 'Review Pillars',
    description: 'Read notes from my awesome learning team leader',
    passing: false,
  },
  {
    id: 4,
    name: 'Practice React Routing',
    description: 'Watch workshop solution video and read documentation',
    passing: false,
  },
  {
    id: 5,
    name: 'Go to the React Developers Meetup',
    description: 'On Wednesday, mix and mingle with other React lovers like me',
    passing: false,
  },
  {
    id: 6,
    name: 'Call Mom',
    description: 'Because you probably should',
    passing: false,
  }
];
class Main extends Component {
  state = {todos: initialState}
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
