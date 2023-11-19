import React from 'react';
import './../../App.css';
import './SkillCount.css';

const SkillCount = () => {
    return (
        <div className='skill-count mt pd'>
            <div className="container">
            <div className="skill-container">
                <div className="skill-count-single">
                    <h2>120</h2>
                    <p>Awesome Employees</p>
                </div>
                <div className="skill-count-single">
                    <h2>58</h2>
                    <p>Pizza Types</p>
                </div>
                <div className="skill-count-single">
                    <h2>1468</h2>
                    <p>Satisfied Clients</p>
                </div>
                <div className="skill-count-single">
                    <h2>2031</h2>
                    <p>Delivery</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SkillCount;