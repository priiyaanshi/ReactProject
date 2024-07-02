import React, { createContext, useState, useEffect, useRef } from 'react';
import { getUsers, createUser, deleteUser, updateUser } from '../ApiService';
import User from './User';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState([]);
    const defaultUser = {
        first_name: '',
        last_name: '',
        email: '',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png'
    };

    useEffect(() => {
        fetchUsers();
    }, [setUser]);
    
    const fetchUsers = async () => {
        try {
        const usersData = await getUsers();
        setUser(usersData);
        console.log('user: ', setUser);
        } 
        catch (error) {
        console.error('Failed to fetch users:', error);
        }
    };

    const addNewUser = async(newUser) => {
        try {
            await createUser(newUser);
            setUser((prevUsers) => [...prevUsers, user]);
            fetchUsers();
        } 
        catch (error) {
            console.error('Failed to add user:', error);
        }
    };

    const handleDeleteUser = async (userId) => {
        try {
          await deleteUser(userId);
          fetchUsers();
        } 
        catch (error) {
          console.error('Failed to delete user:', error.message);
        }
      };

    const handleEditUser = async (userId, updatedUser) => {
        try {
            await updateUser(userId, updatedUser);
            fetchUsers();
        } 
        catch (error) {
            console.error('Failed to update user:', error);
        }
    };

    return (
        <UserContext.Provider value={{
            defaultUser, 
            user, 
            setUser,
            addNewUser, 
            handleDeleteUser, 
            handleEditUser 
        }}>
            {children}
        </UserContext.Provider>
    );
};