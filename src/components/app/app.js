import React from "react";
import "./app.css";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import Registration from "../registration";
import EnterWindow from "../enter-window";
import Daily from "../main-content/daily";
import Direct from "../main-content/direct";
import Dock from "../main-content/bottom-dock";
import Search from "../main-content/search";
import UploadFiles from "../main-content/upload-files";
import Likes from "../main-content/likes";
import Profile from "../main-content/profile";
// import Spinner from "../spinner/spinner";

class App extends React.Component {

  // constructor (props) {
  //   super(props);

  //   this.state = {
  //     isLoading: true
  //   }
  // }

  // componentDidMount () {
  //  if (this.state.isLoading) {
  //   // <Spinner />
  //   // setTimeout(this.setState({isLoading: false}),1000)
  //  }
  // }

  render() {
    const { loginConfirmed } = this.props;

    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Registration} />
          <Route path="/login" component={EnterWindow} />
          <Route path="/daily" component={Daily} />
          <Route path="/direct" component={Direct} />
          <Route path="/search" component={Search} />
          <Route path="/upload" component={UploadFiles} />
          <Route path="/likes" component={Likes} />
          <Route path="/user" component={Profile} />
        </Switch>
        {loginConfirmed ? <Dock /> : null}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginConfirmed: state.loginConfirmed
  };
};

export default connect(mapStateToProps)(App);
