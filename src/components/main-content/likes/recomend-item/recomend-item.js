import React from "react";
import "./recomend-item.css";

class RecomendItem extends React.Component {
  render() {
    return (
      <li key={this.props.id} className="recomend-item">
        <div className="recomend-info">
          <img src={this.props.profilePhotoUrl} alt="profile" />
          <article>
            <p className="recomend-nick">{this.props.nick}</p>
            <p className="recomend-name">{this.props.name}</p>
            <p className="recomend-status">{this.props.status}</p>
          </article>
        </div>
        <button>Follow</button>
      </li>
    );
  }
}

export default RecomendItem;
