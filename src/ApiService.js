import axios from 'axios';

const url = 'https://reqres.in/api/users';

export const getUsers = async () => {
  try {
    const response = await axios.get(url);
    return response.data.data;
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
