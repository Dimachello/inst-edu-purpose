import React from "react";
import "./app.css";
import { Switch, Route } from "react-router-dom";
import Registration from "../registration";
import EnterWindow from "../enter-window";
import Daily from "../main-content/daily";
import Direct from "../main-content/direct";
import Search from "../main-content/search";
import UploadFiles from "../main-content/upload-files";
import Likes from "../main-content/likes";
import Profile from "../main-content/profile";
import Error from '../404/error';

class App extends React.Component {
  render() {
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
          <Route render={() => <Error />} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
