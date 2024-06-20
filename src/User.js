import React from 'react';
import './User.css';

const User = ({ first_name, last_name, email, avatar }) => {
  return (
    <div className="user">
      <img src={avatar} alt={`${first_name} ${last_name}`} />
      <h2>{first_name} {last_name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default User;