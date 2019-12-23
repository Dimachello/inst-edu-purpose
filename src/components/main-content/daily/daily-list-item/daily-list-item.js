import React from "react";
import "./daily-list-item.css";

class DailyListItem extends React.Component {
  render() {
    return (
      <li className="daily-item-wrapper">
        <article className="daily-item-container">
          <img
            className="profile-img"
            src={this.props.profilePhotoUrl}
            alt="profile"
          />
          <p className="nick">{this.props.nick}</p>
          <p className="name">{this.props.name}</p>
          <div className="advanced-info">
            <div className="adv-photo"></div>
            <div className="adv-photo"></div>
            <div className="adv-photo"></div>
          </div>
          <p className="status">{this.props.status}</p>
          <div className="follow-btn">Follow</div>
        </article>
      </li>
    );
  }
}

export default DailyListItem;
