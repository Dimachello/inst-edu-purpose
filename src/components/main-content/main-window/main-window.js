import React from 'react';
import './main-window.css';
import { Route } from 'react-router-dom';
import Daily from '../daily';
import Direct from '../direct';
import Dock from '../bottom-dock';
import Search from '../search';
import Likes from '../likes';
import Profile from '../profile';

class MainWindow extends React.Component {
    render () {
        return (
            <div className="main-window">
            <Route path="/main/daily" component={Daily} />
            <Route path="/main/direct" component={Direct} />
            <Route path="/main/search" component={Search} />
            <Route path="/main/likes" component={Likes} />
            <Route path="/main/user" component={Profile} />
            <Dock />
            </div>
        )
    }
}

export default MainWindow;