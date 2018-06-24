import React from 'react';
import './app.css';
import Header from './header/header';
import AddTodo from './add-todo/add-todo';
import ListTodos from './list-todos/list-todos';

const App = () => (
      <div className="app">
        <Header />
        <AddTodo />
        <ListTodos />
      </div>
  );
App.displayName = 'App';
export default App;
