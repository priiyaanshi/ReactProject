import React, { useState, useEffect, useRef } from 'react';
import './NavBar.css';
import { createUser } from './ApiService';

const Navbar = ({ addUser }) => {
    const [formVisible, setFormVisible] = useState(false);
    const [user, setUser] = useState({ first_name: '', last_name: '', email: '', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png'});

    //making the form visible when button is toggled
    const toggleForm = () => {
        setFormVisible(!formVisible);
    };

    const formRef = useRef(null);

    //click outside to close the form
    const handleClickOutside = (event) => {
        if (formRef.current && !formRef.current.contains(event.target)) {
            setFormVisible(false);
        }
    };

    useEffect(() => {
        if (formVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [formVisible]);

    //form controlled components
    const handleChange = (event) => {
        setUser({ ...user, [event.target.name] : event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addUser(user);
        setUser({ first_name: '', last_name: '', email: '', avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png' });
        setFormVisible(false);  
    };

    //structure
    return (
        <nav className="navbar">
        <div className="navbar-brand">
            <span className="heading">User Database</span>
        </div>
        <div className='nav-items'>
            <div className="navbar-links">
                <a href="/" className="nav-link">Home</a>
                <a href="/" className="nav-link">Team</a>
            </div>
            <div className="dropdown">
                <button className="add-user-btn" onClick={toggleForm}>Add User</button>
                {formVisible && (
                    <div className="dropdown-content" ref={formRef}>
                        <form className="user-form" onSubmit={handleSubmit}>
                            <input type="text" name="first_name" value={user.first_name} onChange={handleChange} placeholder="First Name" required />
                            <input type="text" name="last_name" value={user.last_name} onChange={handleChange} placeholder="Last Name" required />
                            <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email ID" required />
                            <button type="submit">Add User</button>
                        </form>
                    </div>
                )}
            </div> 
        </div>
        </nav>
    );
};

export default Navbar;
