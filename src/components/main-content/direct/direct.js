import React from 'react';
import './direct.css';
import { Link } from 'react-router-dom';

const Direct = () => {
    return (
        <div>
            <Link to="/main/daily">Direct</Link>
        </div>
    );
};

export default Direct;