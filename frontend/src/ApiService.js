import axios from 'axios';
const url = 'http://localhost:5005/users';

export const getUsers = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createUser = async (user) => {
  try {
    const response = await axios.post(url, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateUser = async (id, user) => {
  try {
    const response = await axios.put(`${url}/${id}`, user);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`${url}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Failed to delete user:', error);
    throw error;
  }
};
