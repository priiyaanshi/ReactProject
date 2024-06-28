import React, { useState, useEffect, useRef } from 'react';
import './NavBar.css';
import { createUser } from '../ApiService';

const Navbar = ({ fetchUsers, addUser }) => {

    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState({ 
        first_name: '', 
        last_name: '', 
        email: '', 
        avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/1200px-Default_pfp.svg.png'
    });

    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
      setMenuActive(!menuActive);
    };
    
    const formRef = useRef(null);

    //click outside to close the form
    const handleClickOutside = (event) => {
        if (formRef.current && !formRef.current.contains(event.target)) {
            setShowModal(false);
        }
    };

    useEffect(() => {
        if (showModal) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showModal]);

    return (
        <div>
            <div className='header'>
                <div className="logo">
                    <span className="heading">User Database</span>
                </div>

                <div id="menu-bar" className={menuActive ? 'fa-times' : 'fas fa-bars'} onClick={toggleMenu}></div>
                <nav className={`navbar ${menuActive ? 'active' : ''}`}>
                    <a href="/">Home</a>
                    <a href="/">About Us</a>
                </nav>
            </div>
            
            <div className='home'>
            Welcome to our user management platform! Easily add, edit, and manage user profiles with our intuitive interface. Stay organized and efficient with real-time updates and a seamless user experience.
            </div>
        </div>
    );
};

export default Navbar;
