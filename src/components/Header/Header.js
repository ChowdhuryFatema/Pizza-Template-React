import React from 'react';
import './../../App.css';
import './Header.css';
import Banner from '../Banner/Banner';
import logoImg from './../../img/logo.png';

const Header = () => {
    return (
        <div className='header-container'>
            <div className="container">
            <div className="header">
                <div className="logo">
                    <img src={logoImg} alt="logo" />
                </div>
                <nav className="menu">
        	        <ul>
                        <li><a href="home">Home</a></li>
                        <li><a href="menu">Menu</a></li>
                        <li><a href="about">About</a></li>
                        <li><a href="shop">Shop</a></li>
                        <li><a href="news">News</a></li>
                        <li><a href="contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
            </div>
        	<Banner></Banner>
        </div>
    );
};

export default Header;