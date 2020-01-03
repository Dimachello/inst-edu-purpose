import React from "react";
import "./enter-window.css";
import printedLogo from "../../imgs/logo-print.png";
import { Link } from "react-router-dom";
import history from "../history";
import Footer from "../registration/footer";
import Warning from "./warning";

class EnterWindow extends React.Component {
  loginInput = React.createRef(null);
  pswdInput = React.createRef(null);

  constructor(props) {
    super(props);

    this.state = {
      isWarning: false,
      loginValue: "",
      passwordValue: ""
    };

    this.onShow = this.onShow.bind(this);
    this.onEnter = this.onEnter.bind(this);
    this.handleWarningWindow = this.handleWarningWindow.bind(this);
  }

  onShow() {
    this.pswdInput.current.type === "password"
      ? (this.pswdInput.current.type = "text")
      : (this.pswdInput.current.type = "password");
  }

  onUnExist() {
    history.replace("/");
  }

  onEnter(event) {
    event.preventDefault();
    this.state.loginValue === "1" && this.state.passwordValue === "1"
      ? history.replace("/daily")
      : this.setState({
          isWarning: true
        });
  }

  handleWarningWindow() {
    this.setState({ isWarning: false });
  }

  render() {
    return (
      <div className="enter-window-wrapper">
        {this.state.isWarning ? (
          <Warning hide={this.handleWarningWindow} />
        ) : null}
        <img className="logo-print" src={printedLogo} alt="print-logo" />
        <form className="reg-form enter-reg-form">
          <input
            ref={this.loginInput}
            name="loginValue"
            className="login"
            type="text"
            required
            placeholder="Моб. телефон или эл. адрес"
            onChange={event =>
              this.setState({
                loginValue: event.target.value
              })
            }
          />
          <input
            ref={this.pswdInput}
            name="passwordValue"
            className="pswd-container"
            type="password"
            required
            placeholder="Пароль"
            onChange={event =>
              this.setState({
                passwordValue: event.target.value
              })
            }
          />
          <div className="show-pswd" onClick={this.onShow}>
            Show
          </div>
          <button className="reg-btn" onClick={this.onEnter}>
            Войти
          </button>
          <div className="phrase-container">
            <div className="left-part"></div>
            <div className="phrase">или</div>
            <div className="right-part"></div>
          </div>
          <button className="reg-btn enter-reg-btn">
            <span className="fb-icon"></span>Войти через FaceBook
          </button>
          <Link className="link psw-res-link" to="">
            Забыли пароль?
          </Link>
          <p className="reg-link">
            У вас еще нет аккаунта?{" "}
            <span className="reg-redirect-link" onClick={this.onUnExist}>
              Зарегистрироваться
            </span>
          </p>
        </form>
        <Footer />
      </div>
    );
  }
}

export default EnterWindow;
