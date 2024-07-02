import './App.css';
import React from 'react';
import UserList from './Components/UserList';
import Navbar from './Components/NavBar';
import PopUp from './Components/PopUp';
import { UserProvider } from './Components/UserContext';

function App() {
  return (
    <UserProvider>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <UserList />
        <PopUp/>
      </div>
    </UserProvider>
  );
}
export default App;
