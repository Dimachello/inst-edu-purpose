import React from "react";
import "./registration.css";
import history from "../history";
import printedLogo from "../../imgs/logo-print.png";
import Form from "./form";
import Footer from "./footer";
import Spinner from "../spinner/spinner";

class Registration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  onExist() {
    history.replace("/login");
  }

  componentDidMount () {
      setTimeout(() => this.setState({isLoading: false}),1000)
  }

  render() {

    const EnterWindowComponent = 
      <div>
        <img className="logo-print" src={printedLogo} alt="print-logo" />
        <p className="greet">
          Зарегестрируйтесь, чтобы смотреть фото и видео ваших друзей.
        </p>
        <Form />
        <p className="conditions">
          Регестрируясь, вы принимаете наши Условия, Политику использования
          данных и Политику в отношении файлов cookie.
        </p>
        <p className="enter-link">
          Есть аккаунт?{" "}
          <span className="link" onClick={this.onExist}>
            Вход
          </span>
        </p>
        <Footer />
      </div>;

    const content = this.state.isLoading ? <Spinner /> : EnterWindowComponent;
    
    return (
      <React.Fragment>
        {content}
      </React.Fragment>
    );
  }
}

export default Registration;
