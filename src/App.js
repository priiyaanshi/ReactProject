
import './App.css';
import React from 'react';
import User from './Components/User';
import UserList from './Components/UserList';
import Navbar from './Components/NavBar';
import PopUp from './Components/PopUp';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <UserList />
      <PopUp/>

    </div>
  );
}

export default App;

// "webpack": "^5.92.1",
// "webpack-cli": "^5.1.4"