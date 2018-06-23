import React from 'react';
import './app.css';
import Header from './header/header';
import AddTodo from './add-todo/add-todo';

const App = () => (
      <div className="app">
        <Header />
        <AddTodo />
      </div>
  );
App.displayName = 'App';
export default App;
