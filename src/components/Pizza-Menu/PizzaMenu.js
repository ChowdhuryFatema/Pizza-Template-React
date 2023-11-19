import React from 'react';
import './PizzaMenu.css';
import './../../App.css';
import aboutImg from './../../img/pizza.jpg';

const PizzaMenu = () => {
    return (
        <div className="container">
            <div className='about-us mt'>
                <div className="about-img pizza-menu1">
                    <img src={aboutImg} alt="pizza" />
                </div>
                <div className="about-info pizza-menu2">
                    <h3 className='sub-title'>The Pizza Menu</h3>
                    <h1 className='title'>CHICAGO <br /> THIN CRUST</h1>
                    <p>Investigationes demonstraverunt lectores legere me lius
                        quod ii legunt saepius. Claritas est etiam processus dynaus,
                        quise sequitur mutationem consuetudium lectorum.</p>
                    <button className='btn'>view more</button>
                </div>
            </div>
        </div>
    );
};

export default PizzaMenu;