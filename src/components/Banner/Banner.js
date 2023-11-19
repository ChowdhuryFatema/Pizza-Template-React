import React from 'react';
import './../../App.css';
import './Banner.css';

const Banner = () => {
    return (
        <div className="container">
            <div className='banner-container'>
                <div className="banner">
                    <h3>Pizza Delivery</h3>
                    <h1>maestro <br/> pizinna</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis deserunt aliquid quaerat quia dolorem!</p>
                    <button className='btn'>delivery now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;