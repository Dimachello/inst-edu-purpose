import React from 'react';
import './profile.css';
import set from '../../../imgs/icons/controls24.png';
import addUser from '../../../imgs/icons/add-user24.png';
import shrek from '../../../imgs/daily-list/Shrek150.jpg';
import gallery from '../../../imgs/icons/grid24.png';
import share from '../../../imgs/icons/picture24.png';
import save from '../../../imgs/icons/save24.png';
import contacts from '../../../imgs/icons/contact-book24.png';
import Saved from './saved';
import Photos from './photos/photos';
import Tagged from './tagged/tagged';
import Feed from './feed/feed';
import { Route, Link } from 'react-router-dom';
import Dock from '../bottom-dock';

class Profile extends React.Component {
    render () {
        return (
            <React.Fragment>
            <div className="user-profile">
                <nav>
                    <img src={set} alt="Settings" />
                    <p>dimas</p>
                    <img src={addUser} alt="Add friends" />
               </nav>
                <section className="manage-info">
                    <div>
                        <img src={shrek} alt="User" />
                        <article>
                            <h1>Dimas</h1>
                            <button>Edit profile</button>
                        </article>
                    </div>
                    <p>dimenator</p>
                </section>
                <section className="profile-info">
                    <article>
                        <p>2</p>
                        <p>posts</p>
                    </article>
                    <article>
                        <p>5</p>
                        <p>followers</p>
                    </article>
                    <article>
                        <p>3</p>
                        <p>following</p>
                    </article>
                </section>
                <section className="photos">
                   <div>
                    <Link to="/user/photos"><img src={gallery} alt="gallery" /></Link>
                    <Link to="/user/feed"><img src={share} alt="share" /></Link>
                    <Link to="/user/saved"><img src={save} alt="saved" /></Link>
                    <Link to="/user/tagged"><img src={contacts} alt="contacts" /></Link>
                    </div>
                </section>
                <Route path="/user/photos" render={() => <Photos />} />
                <Route path="/user/feed" render={() => <Feed />} />
                <Route path="/user/saved" render={() => <Saved />} />
                <Route path="/user/tagged" render={() => <Tagged />} />
            </div>
            <Dock />
            </React.Fragment>
        )
    }
} 

export default Profile;