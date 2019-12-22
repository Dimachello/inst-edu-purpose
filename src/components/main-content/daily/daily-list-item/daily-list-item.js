import React from "react";
import "./daily-list-item.css";
import shrek from '../../../../imgs/daily-list/Shrek150.jpg';

class DailyListItem extends React.Component {
  render() {
    return (
    <li className="daily-item-container">
       <article>
           <img className="profile-img" src={shrek} alt="profile"/>
           <p className="nick">jet.frixon</p>
           <p className="name">jet</p>
           <div className="advanced-info">
               {/*...*/}
               some info
           </div>
           <div className="follow-btn">
               Follow
           </div>
       </article>
    </li>
    );
  }
}

export default DailyListItem;