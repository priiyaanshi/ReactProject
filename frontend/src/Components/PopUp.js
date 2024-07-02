import React, { useState, useContext} from 'react';
import { createUser, getUsers } from '../ApiService';
import Modal from './Modal';
import './PopUp.css';
import { UserContext } from './UserContext';

const PopUp = () => {
    const [showModal, setShowModal] = useState(false);
    const {user, setUser, addNewUser, defaultUser, resetUser} = useContext(UserContext);
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const handleSubmit = async(user) => {
        try{
            addNewUser(user);
            setShowModal(false);   
        }
        catch(error){
            console.error('Failed to add user', error);
        }
    };

    return(
        <div>
            <button className="floating-btn"  onClick={toggleModal}>+</button>
            <Modal show={showModal} close={toggleModal} onSave={handleSubmit} />
        </div>
    )
}

export default PopUp;