import React from 'react';
import './main-window.css';
import { Route } from 'react-router-dom';
import Daily from '../daily';
import Dock from '../bottom-dock';

class MainWindow extends React.Component {
    render () {
        return (
            <div className="main-window">
            <Route path="/main/daily" component={Daily} />
            <Dock />
            </div>
        )
    }
}

export default MainWindow;