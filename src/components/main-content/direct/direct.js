import React from 'react';
import './direct.css';
import back from '../../../imgs/icons/back24.png';
import feed from '../../../imgs/icons/feedback24.png';
import { Link } from 'react-router-dom';
import Dock from '../bottom-dock';

const Direct = () => {
    return (
        <div className="direct">
            <nav className="direct-nav">
                <Link to="/daily">
                <img src={back} alt="back" />
                </Link>
                <span className="direct-title">Direct</span>
                <img className="write-icon" src={feed} alt="write mes"></img>
            </nav>
            <div className="write-btn-container">
                    <p>Нет сообщений</p>
                    <button>Новое сообщение</button>
            </div>
            <Dock />
        </div>
    );
};

export default Direct;