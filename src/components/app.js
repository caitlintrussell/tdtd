import React from 'react';
import './app.css';
import Header from './header/header';
import AddTodo from './add-todo/add-todo';
import SingleTodo from './single-todo/single-todo';

const App = () => (
      <div className="app">
        <Header />
        <AddTodo />
        <SingleTodo />
      </div>
  );
App.displayName = 'App';
export default App;
