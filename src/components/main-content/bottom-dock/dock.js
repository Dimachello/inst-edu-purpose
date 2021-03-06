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
              <Link className="chap-link" to="/daily"><img src={house} alt="home"/></Link>
          </div>
          <div className="chapter">
              <Link className="chap-link" to="/search"><img src={search} alt="search"/></Link>
          </div>
          <div className="chapter">
              <Link className="chap-link" to="/upload"><img src={add} alt="add"/></Link>
          </div>
          <div className="chapter">
              <Link className="chap-link" to="/likes"><img src={like} alt="like"/></Link>
          </div>
          <div className="chapter">
              <Link className="chap-link" to="/user/photos"><img src={user} alt="user"/></Link>
          </div>
        </nav>
    )
}

export default Dock;