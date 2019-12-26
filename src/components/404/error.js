import React from 'react';
import './error.css';
import {Link} from "react-router-dom";

const Error = () => {
    return (
        <div className="error-container">
        <div className="error">
            <h1>404</h1>
            <h3>Something went wrong</h3>
            <Link className="link" to="/">back to main</Link>
        </div>
        </div>
    )
}

export default Error;