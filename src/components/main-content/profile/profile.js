import React from 'react';
import './profile.css';
import set from '../../../imgs/icons/controls24.png';
import addUser from '../../../imgs/icons/add-user24.png';
import shrek from '../../../imgs/daily-list/Shrek150.jpg';
import gallery from '../../../imgs/icons/grid24.png';
import share from '../../../imgs/icons/picture24.png';
import save from '../../../imgs/icons/save24.png';
import contacts from '../../../imgs/icons/contact-book24.png';

class Profile extends React.Component {
    render () {
        return (
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
                    <img src={gallery} alt="gallery" />
                    <img src={share} alt="share" />
                    <img src={save} alt="saved" />
                    <img src={contacts} alt="contacts" />
                    </div>
                </section>
            </div>
        )
    }
} 

export default Profile;