import React from 'react';
import './activity-item.css';

class ActivityItem extends React.Component {
    render () {
        return (
          <li key={this.props.id} className="activity-item">
              <div className="activity-info">
              <img src={this.props.profilePhotoUrl} alt="profile"/>
              <article>
              <p className="activity-nick">{this.props.nick}</p>
              <p className="activity-date"><span>started following you </span>{this.props.activityDate}</p>
              </article>
              </div>
              <button>Follow</button>
          </li>
        )
    }
}

export default ActivityItem;