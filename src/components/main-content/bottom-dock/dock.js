import React from 'react';
import './dock.css';
import { Link } from 'react-router-dom';
import house from '../../../imgs/icons/house24.png';
import search from '../../../imgs/icons/search24.png';
import add from '../../../imgs/icons/plus24.png'; 
import like from '../../../imgs/icons/like24.png';
import user from '../../../imgs/icons/user24.png';

const Dock = () => {
    return (
        <nav className="chapters-container">
          <div className="chapter">
              <Link to="/main/daily"><img src={house} alt="home"/></Link>
          </div>
          <div className="chapter">
              <Link to="/main/search"><img src={search} alt="search"/></Link>
          </div>
          <div className="chapter">
              <Link to="/main/daily"><img src={add} alt="add"/></Link>
          </div>
          <div className="chapter">
              <Link to="/main/likes"><img src={like} alt="like"/></Link>
          </div>
          <div className="chapter">
              <Link to="/main/user"><img src={user} alt="user"/></Link>
          </div>
        </nav>
    )
}

export default Dock;