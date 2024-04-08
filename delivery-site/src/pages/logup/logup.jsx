import "./logup.module.css";
import {MyInput} from "../../components/UI/input/MyInput.jsx";
import {MyButton1} from "../../components/UI/button/MyButton.jsx";
const Logup = () => {
    return (
        <div className="logup">
            <div className="centring">
                <div className="login-wrapper mt-1">
                    <h2 className="title-3">
                        Авторизация
                    </h2>
                    <div className="form-block">
                        <form action="">
                            <div className="input-block">
                                <MyInput type="email" placeholder="Электронная почта"/>
                                <MyInput type="password" placeholder="Пароль"/>
                            </div>
                            <div className="btn-form">
                                <a href="/login" className="link-login">
                                    У меня нет аккаунта
                                </a>
                                <MyButton1 type="submit">
                                    Отправить
                                </MyButton1>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Logup;