import React from 'react';
import './form.css';

class Form extends React.Component {
    render () {
        return (
            <form className="reg-form">
                <button className="reg-btn"><span className="fb-icon"></span>Войти через FaceBook</button>

                <div className="phrase-container">
                    <div className="left-part"></div>
                    <div className="phrase">или</div>
                    <div className="right-part"></div>
                </div>

                <input type="text" placeholder="Моб. телефон или эл. адрес" />
                <input type="text" placeholder="Имя и фамилия" />
                <input type="text" placeholder="Имя пользователя" />
                <input type="text" placeholder="Пароль" />

                <button className="reg-btn">Регистрация</button>

            </form>
        )
    }
}

export default Form;