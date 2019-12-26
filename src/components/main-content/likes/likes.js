import React from "react";
import "./likes.css";
import ActivityItem from "./activity-item";
import RecomendItem from "./recomend-item";
import { connect } from "react-redux";

class Likes extends React.Component {
  showItems(listId) {
    const { activityItems } = this.props;
    const { recomendationItems } = this.props;
    let items;

    if (listId === 1) {
      items = activityItems.map(item => {
        return (
          <ActivityItem
            key={item.id}
            profilePhotoUrl={item.profilePhotoUrl}
            nick={item.nick}
            activityDate={item.date}
          />
        );
      });
    } else {
      items = recomendationItems.map(item => {
        return (
          <RecomendItem
            key={item.id}
            profilePhotoUrl={item.profilePhotoUrl}
            name={item.name}
            nick={item.nick}
            status={item.status}
          />
        );
      });
    }

    return items;
  }

  render() {
    return (
      <div className="likes">
        <p className="activity-title">Activity</p>
        <div className="activity-wrapper">
          <ul className="activity-container">{this.showItems(1)}</ul>
        </div>
        <p className="suggest">Suggestions for you</p>
        <div className="likes-wrapper">
          <ul className="likes-container">{this.showItems(2)}</ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    activityItems: state.activityItems,
    recomendationItems: state.recomendationItems
  };
};

export default connect(mapStateToProps)(Likes);
