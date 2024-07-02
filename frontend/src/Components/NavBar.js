import React, { useState} from 'react';
import './NavBar.css';

const Navbar = ({}) => {
    const [menuActive, setMenuActive] = useState(false);
    const toggleMenu = () => {
      setMenuActive(!menuActive);
    };
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
