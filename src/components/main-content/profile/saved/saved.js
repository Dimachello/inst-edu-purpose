import React from "react";
import "./saved.css";
import { connect } from "react-redux";
import EmptyComponent from "../empty-component";
import SavedPhotoList from "./saved-photos-list";
import flag from "../../../../imgs/icons/bookmark64.png";

class Saved extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      savedItems: []
    };
  }

  componentDidMount() {
    this.setState(() => {
      const savedItems = this.props.savedItems;

      return {
        savedItems: savedItems
      };
    });
  }

  render() {
    const content = this.state.savedItems.length ? (
      <SavedPhotoList 
      savedItems={this.props.savedItems} />
    ) : (
      <EmptyComponent 
      src={flag}
      title={"Save"}
      text={"You can save your favorite photos here"}
      />
    );

    return content;
  }
}

const mapStateToProps = state => {
  return {
    savedItems: state.savedItems
  };
};

export default connect(mapStateToProps)(Saved);
