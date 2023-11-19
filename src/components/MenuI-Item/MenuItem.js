import React from 'react';
import './../../App.css';
import './MenuItem.css';
import pizza1 from './../../img/pizza1.png';
import pizza2 from './../../img/pizza2.png';
import pizza3 from './../../img/pizza3.png';
import pizza4 from './../../img/pizza4.png';
import pizza5 from './../../img/pizza5.png';
import pizza6 from './../../img/pizza6.png';

const MenuItem = () => {
    return (
        <div className='menu-item mt'>
            <div className="container">
                <h3 className="sub-title text-center">pizza menu</h3>
                <h1 className="title text-center">WELCOME TO <br/>
                    MAESTRO PIZZINI</h1>
                <div className="menu-item-container">
                    <div className="menu-item-single">
                        <img src={ pizza1 } alt="pizza1" />
                        <h3>Pizza Margeritta</h3>
                        <p>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
                        <span>$39</span>
                    </div>
                    <div className="menu-item-single">
                        <img src={pizza2} alt="pizza1" />
                        <h3>Pizza Margeritta</h3>
                        <p>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
                        <span>$39</span>
                    </div>
                    <div className="menu-item-single">
                        <img src={pizza3} alt="pizza1" />
                        <h3>Pizza Margeritta</h3>
                        <p>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
                        <span>$39</span>
                    </div>
                    <div className="menu-item-single">
                        <img src={pizza4} alt="pizza1" />
                        <h3>Pizza Margeritta</h3>
                        <p>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
                        <span>$39</span>
                    </div>
                    <div className="menu-item-single">
                        <img src={pizza5} alt="pizza1" />
                        <h3>Pizza Margeritta</h3>
                        <p>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
                        <span>$39</span>
                    </div>
                    <div className="menu-item-single">
                        <img src={pizza6} alt="pizza1" />
                        <h3>Pizza Margeritta</h3>
                        <p>Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.</p>
                        <span>$39</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;