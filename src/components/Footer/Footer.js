import React from 'react';
import './Footer.css';
import './../../App.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-top mt pd">
                <div className="container">
                    <div className="footer-info">
                        <h1 className='title'>PIZZA OF THE DAY</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ad et amet delectus vel at quidem repudiandae! Exercitationem</p>
                        <div className="footer-icon">
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-linkedin"></i>
                            <i className="fa-brands fa-skype"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>All rights reserved copyright@2023 startup landing page design</p>
            </div>
        </div>
    );
};

export default Footer;