import React from "react";
import "./app.css";
import { Switch, Route } from "react-router-dom";
import Registration from "../registration";
import EnterWindow from "../enter-window";
import MainWindow from "../main-content/main-window";

class App extends React.Component {
  // componentDidMount() {
  //   localStorage.setItem("login", "dima");
  //   localStorage.setItem("psw", "123");
  // }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Registration} />
        <Route path="/login" component={EnterWindow} />
        <Route path="/main" component={MainWindow} />
      </Switch>
    );
  }
}

export default App;
