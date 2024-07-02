import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from './UserContext';
import './Modal.css';

const Modal = ({ show, formRef, close, user, onSave }) => {
  const {defaultUser} = useContext(UserContext);
  const [email, setEmail] = useState(true);
  const [formData, setFormData] = useState(defaultUser);

  useEffect(() => {
    if (user) {
      setFormData(user);
    } else {
      setFormData({...defaultUser});
    }
  }, [user]);

  const emailValidation = (email) =>{
    const regex = /^[a-zA-Z0-9_.-]+@[a-z]+\.[a-z]{2,3}$/;
    return regex.test(email)
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(emailValidation(value));
    }
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    if (email) {
      onSave(formData);
      close();
    } else {
      alert("Please enter a valid email address.");
    }
    
  };

  if (!show) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={close} className="close-button">X</button>
        <form onSubmit={handleSubmit} className="user-form">
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange = {handleChange}
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="avatar"
            value={formData.avatar}
            onChange={handleChange}
            placeholder="Avatar URL"
          />
          <button type="submit">Save Details</button>
        </form>
      </div>
    </div>
  );
};


export default Modal;
