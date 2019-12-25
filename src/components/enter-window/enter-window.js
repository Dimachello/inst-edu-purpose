import React from "react";
import "./enter-window.css";
import printedLogo from "../../imgs/logo-print.png";
import { Link } from "react-router-dom";
import history from "../history";
import Footer from "../registration/footer";

class EnterWindow extends React.Component {

  // constructor (props) {
  //   super(props);

  //   this.username = React.createRef()
  // }

  onShow() {
    const pswd = document.querySelector(".pswd-container");
    if (pswd.type === "password") {
      pswd.type = "text";
    } else {
      pswd.type = "password";
    }
  }

  onUnExist() {
    history.replace("/");
  }

  onEnter(event) {
    event.preventDefault();
    const login = document.querySelector(".login");
    const pswd = document.querySelector(".pswd-container");
    const login_value = "Dima";
    const pswd_value = "123";

    if (login.value === login_value && pswd.value === pswd_value) {
      history.replace("/main/daily");
    } else {
      alert("Login or password is incorrect");
    }
  }

  render() {
    return (
      <div>
        <img className="logo-print" src={printedLogo} alt="print-logo" />
        <form className="reg-form enter-reg-form">
          <input
            className="login"
            type="text"
            required
            placeholder="Моб. телефон или эл. адрес"
          />
          <input
            className="pswd-container"
            type="password"
            required
            placeholder="Пароль"
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
