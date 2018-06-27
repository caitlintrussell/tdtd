import React from 'react';
import './app.css';
import Header from './header/header';
import Main from './main/main-wrapper';

const App = () => (
      <div className="app">
        <Header />
        <Main />
      </div>
  );
App.displayName = 'App';
export default App;
