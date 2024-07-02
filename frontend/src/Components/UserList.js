import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './UserContext';
import User from './User';
import './UserList.css';

const UserList = () => {
  const {user, setUser, handleDeleteUser, handleEditUser} = useContext(UserContext);
  return (
    <div className="user-list">
      <div className="users">
        {user.map(user => (
          <User
            key = {user._id}
            id={user._id}
            first_name={user.first_name}
            last_name={user.last_name}
            email={user.email}
            avatar={user.avatar}
            onDelete = {() =>  handleDeleteUser(user._id)}
            onEdit = {(updatedUser) => handleEditUser(user._id, updatedUser)}
          />
        ))}
      </div>
    </div>
  );
};

export default UserList;
