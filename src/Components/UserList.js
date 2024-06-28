import React, { useState, useEffect, useContext } from 'react';
import User from './User';
import './UserList.css';
import Navbar from './NavBar';
import { UserContext } from '../UserContext';
import { getUsers, createUser, deleteUser, updateUser } from '../ApiService';

const UserList = () => {
  const [user, setUser] = useState([]);
  // const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    fetchUsers();
  }, [setUser]);

  const fetchUsers = async () => {
      try {
        const usersData = await getUsers();
        setUser(usersData);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
  };

  const handleDeleteUser = async (userId) => {
    try {
      await deleteUser(userId);
      fetchUsers();
    } catch (error) {
      console.error('Failed to delete user:', error.message);
    }
  };

const handleEditUser = async (userId, updatedUser) => {
  try {
      await updateUser(userId, updatedUser);
      fetchUsers();
  } catch (error) {
      console.error('Failed to update user:', error);
  }
};

  const addUser = async (user) => {
    try {
      const newUser = await createUser(user);
      setUser([...user, newUser]);
    } catch (error) {
      console.error('Failed to add user:', error);
    }
  };

  return (
    <div className="user-list">
      {/* <Navbar fetchUsers={fetchUsers} /> */}
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
