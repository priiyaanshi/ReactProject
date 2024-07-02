import React, {useState} from 'react';
import './User.css';
import Modal from './Modal';

const User = ({id, first_name, last_name, email, avatar, onDelete, onEdit}) => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState({ first_name, last_name, email, avatar });

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () =>{
    setShowModal(false);
  }

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleEdit = (user) => {
    onEdit(user);
    toggleModal();
  };

  return (
    <div>
      <div className="user" >
        <img src={avatar} alt={`${first_name} ${last_name}`} />
        <h2>{first_name} {last_name}</h2>
        <p>{email}</p>
        <button onClick={toggleModal} className="far fa-edit"></button>
        <button onClick={() => onDelete()} className="fa-regular fa-trash-can"></button>
      </div>
      <Modal className = "modal" show={showModal} close={closeModal} user={user} onSave={handleEdit} />
    </div>
  );
};

export default User;