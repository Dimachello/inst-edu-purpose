import React from "react";
import "./enter-window.css";
import printedLogo from "../../imgs/logo-print.png";
import { Link } from "react-router-dom";
import history from "../history";
import Footer from "../registration/footer";

class EnterWindow extends React.Component {
  onUnExist() {
    history.replace("/");
  }

  onEnter(event) {
    event.preventDefault();
    const login = document.querySelector(".login");
    const pswd = document.querySelector(".pswd");
    const login_value = "dima";
    const pswd_value = "123";

    if (login.value === login_value && pswd.value === pswd_value) {
      history.replace("/main/daily");
    } else {
      alert("Incorrect login or pswd !");
    }
  }

  render() {
    return (
      <div>
        <img className="logo-print" src={printedLogo} alt="print-logo" />
        <form className="reg-form">
          <input
            className="login"
            type="text"
            placeholder="Моб. телефон или эл. адрес"
          ></input>
          <input className="pswd" type="text" placeholder="Пароль"></input>
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
