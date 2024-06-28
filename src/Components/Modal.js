import React, { useState, useEffect } from 'react';
import './Modal.css';

const Modal = ({ show, formRef, close, user, onSave }) => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png'
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    } else {
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png'
      });
    }
  }, [user]);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name] : event.target.value });
  };

  const handleSubmit = (event) => {
    onSave(formData);
    close();
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
            onChange={handleChange}
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
