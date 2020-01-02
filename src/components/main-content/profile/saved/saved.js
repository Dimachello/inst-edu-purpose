import React from "react";
import "./saved.css";
import { connect } from "react-redux";
import EmptyComponent from './empty-component';
import SavedPhotoList from './saved-photos-list';

class Saved extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      savedItems: []
    }
  }

  componentDidMount() {
    this.setState(() => {
      const savedItems = this.props.savedItems;

      return ({
        savedItems: savedItems
      })
    })
  }

  render() {

    const content = this.state.savedItems.length ? <SavedPhotoList savedItems={this.props.savedItems}/> : <EmptyComponent />

    return (
     content
    );
  }
}

const mapStateToProps = state => {
  return {
    savedItems: state.savedItems
  };
};

export default connect(mapStateToProps)(Saved);
