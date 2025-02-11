import React, { useState } from 'react';
import User from './User';
import './UserList.css';
import Navbar from './NavBar';

const UserList = () => {
  const [users, setUsers] = useState([
    {  
        "id": 1,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
        "id": 2,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
        "id": 3,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
        "id": 4,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
    {
        "id": 5,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg"
    },
    {
        "id": 6,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg"
    }
    
  ]);

  //adding a new user using the form
  const addUser = (user) => {
    const newUser = { id: users.length + 1, ...user };
    setUsers([...users, newUser]);
  };

  return (
    <div className="user-list">
      <Navbar addUser={addUser} />
      <div className="users">
        {users.map(user => (
          <User
            key={user.id}
            first_name={user.first_name}
            last_name={user.last_name}
            email={user.email}
            avatar={user.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default UserList;
