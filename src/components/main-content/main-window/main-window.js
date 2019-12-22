import React from 'react';
import './main-window.css';
import { Route } from 'react-router-dom';
import Daily from '../daily';
import Dock from '../bottom-dock';

class MainWindow extends React.Component {
    render () {
        return (
            <React.Fragment>
            <Route path="/main/daily" component={Daily} />
            <Dock />
            </React.Fragment>
        )
    }
}

export default MainWindow;