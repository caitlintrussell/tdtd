import React, {Component} from 'react';
import SingleTodo from '../single-todo/single-todo';

const initialState = [
  {
    id: 1,
    title: 'Go Grocery Shopping',
    description: 'Produce at Stanleys, pantry goods at Fresh Thyme',
    passing: true,
  },
  {
    id: 2,
    title: 'Learn React Debugging',
    description: 'Download React Devtools, watch Tech Talk',
    passing: false,
  },
  {
    id: 3,
    title: 'Review Pillars',
    description: 'Read notes from my awesome learning team leader',
    passing: false,
  },
  {
    id: 4,
    title: 'Practice React Routing',
    description: 'Watch workshop solution video and ',
    passing: false,
  },
  {
    id: 5,
    title: 'Go to the React Developers Meetup',
    description: 'On Wednesday, mix and mingle with other React lovers like me',
    passing: false,
  },
];

class ListTodos extends Component {
  state = {todos: initialState};

  toggleTodo = (e) => {
    const changedTodos = this.state.todos;
    changedTodos[+e.target.name - 1].passing = !changedTodos[+e.target.name - 1].passing;
    this.setState({todos: changedTodos});
  }
  render() {
    const {todos} = this.state;
    return (
      todos.map((todo) => (
        <SingleTodo key={todo.id} todo={todo} toggleTodo={this.toggleTodo} />
      ))
    );
  }

}


ListTodos.displayName = 'ListTodos';
export default ListTodos;

