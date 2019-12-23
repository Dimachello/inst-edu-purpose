import React from 'react';
import './daily.css';
import printedLogo from '../../../imgs/logo-print.png';
import camera from '../../../imgs/icons/camera24.png';
import direct from '../../../imgs/icons/telegram24.png';
import DailyList from './daily-list'; 

// import history from '../../history';
import { Link } from 'react-router-dom';

class Daily extends React.Component {

    // showDirect () {
    //     history.
    // }

    render () {
        return (
            <div className="daily">
            <nav className="daily-nav">
                <div><img className="upload" src={camera} alt="camera"/></div>
                <div><img className="daily-logo-print" src={printedLogo} alt="logo-print"/></div>
                <div><Link to="/main/direct"><img className="direct" src={direct} alt="direct"/></Link></div>
            </nav>
            <h1>Welcome to Instagram</h1>
            <p>When you follow people, you`ll see the photos and videos they post here.</p>
            <DailyList />
            </div>
        )
    }
}

export default Daily;