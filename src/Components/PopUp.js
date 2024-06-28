import React, { useState, useEffect} from 'react';
import { createUser } from '../ApiService';
import Modal from './Modal';
import axios from 'axios'; 
import './PopUp.css';

const PopUp = ({ fetchUsers, addUser }) => {
    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState({ 
        first_name: '', 
        last_name: '', 
        email: '', 
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png'
    });

  const handleAddUser = async (newUser) => {
    try {
      await axios.post('http://localhost:5002/users', newUser);
      fetchUsers();
    } catch (error) {
      console.error('Failed to add user', error);
    }
  };

    //making the form visible when button is toggled
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    //form controlled components
    const handleChange = (event) => {
        setUser({ ...user, [event.target.name] : event.target.value });
    };

    const handleSubmit = async(user) => {
        try{
            await createUser(user);
            fetchUsers();
            setShowModal(false);
            setUser({ first_name: '', last_name: '', email: '', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png' });
        }
        catch(error){
            console.error('Failed to add user', error);
        }
    };

    return(
        <div>
            <button className="floating-btn" onClick={toggleModal}>+</button>
            <Modal show={showModal} close={toggleModal} onSave={handleSubmit} />
        </div>
    )
}

export default PopUp;