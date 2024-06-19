
import './App.css';
import React from 'react';
import User from './User';
import UserList from './UserList';
import Navbar from './NavBar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <UserList />
    </div>
  );
}

export default App;
