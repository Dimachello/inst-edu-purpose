import React from 'react';
import './registration.css';
import history from '../history';
import printedLogo from '../../imgs/logo-print.png'
import Form from './form';
import Footer from './footer';

class Registration extends React.Component {

    onExist () {
        history.replace('/login');
    }

    render () {
        return (
           <div>
               <img className="logo-print" src={printedLogo} alt="print-logo"/>
               <p className="greet">Зарегестрируйтесь, чтобы смотреть фото и видео ваших друзей.</p>
               <Form />
               <p className="conditions">Регестрируясь, вы принимаете наши Условия, Политику использования данных и Политику в отношении файлов cookie.</p>
               <p className="enter-link">Есть аккаунт? <span className="link" onClick={this.onExist}>Вход</span></p>
               <Footer />
           </div>
        )
    }
}

export default Registration;