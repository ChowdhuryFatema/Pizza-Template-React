import React from 'react';
import './About.css';
import './../../App.css';
import aboutImg from './../../img/pizza.jpg';

const About = () => {
    return (
        <div className="container">
            <div className='about-us mt'>
                <div className="about-info">
                    <h3 className='sub-title'>About Us</h3>
                    <h1 className='title'>WELCOME TO <br/> MAESTRO PIZZINI</h1>
                    <p>Investigationes demonstraverunt lectores legere me lius
                    quod ii legunt saepius. Claritas est etiam processus dynaus,
                    quise sequitur mutationem consuetudium lectorum.</p>
                    <button className='btn'>read more</button>
                </div>
                <div className="about-img">
                    <img src={aboutImg} alt="pizza" />
                </div>
            </div>
        </div>
    );
};

export default About;