import "./login.module.css";
import {MyInput, RadioBtn} from "../../components/UI/input/MyInput.jsx";
import {MyButton1} from "../../components/UI/button/MyButton.jsx";
import { useState, useEffect } from 'react';
import axios from "axios";

const Login = () => {

    

    return (
        <div className="login">
            <div className="centring">
                <div className="login-wrapper mt-1">
                    <h2 className="title-3">
                        Регистрация
                    </h2>
                    <form action="" method="POST" className="form-block">
                        <MyInput type="email" placeholder="Электронная почта"/>
                        <MyInput placeholder="Имя пользователя"/>
                        <MyInput type="password" placeholder="Пароль"/>
                        <MyInput type="password" placeholder="Повторить пароль"/>
                        <div className="radio-inputs">
                            <div className="radio radio-1">
                                <RadioBtn id="r-1" name="1" value="dewey"/>
                                <label htmlFor="r-1">Я покупатель</label>
                            </div>
                            <div className="radio radio-1">
                                <RadioBtn id="r-2" name="1" value="huey"/>
                                <label htmlFor="r-2">Я продавец</label>
                            </div>
                        </div>
                        <div className="btn-form btn-form-in">
                            <MyButton1 type="submit">
                                Отправить
                            </MyButton1>
                        </div>
                    </form>
                    <a href="/logup" className="link-logup">У меня уже есть аккаунт</a>
                </div>
            </div>
        </div>
    )
};

export default Login;