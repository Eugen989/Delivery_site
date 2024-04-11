import "./logup.module.css";
import { MyInput } from "../../components/UI/input/MyInput.jsx";
import { MyButton1 } from "../../components/UI/button/MyButton.jsx";
import { useState } from "react";

const RadioBtn = ({ id, name, value }) => {
    return (
        <input type="radio" id={id} name={name} value={value} />
    );
};

const Logup = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    };

    const [isRegistering, setIsRegistering] = useState(false);

    const toggleForm = () => {
        setIsRegistering(prevState => !prevState);
    };

    return (
        <div className="logup">
            {isRegistering ?
                <div className="centring">
                <div className="login-wrapper mt-1">
                    <h2 className="title-3">
                        Регистрация
                    </h2>
                    <form action="" method="POST" className="form-block">
                        <MyInput type="email" placeholder="Электронная почта" />
                        <MyInput placeholder="Имя пользователя" />
                        <MyInput type="password" placeholder="Пароль" />
                        <MyInput type="password" placeholder="Повторить пароль" />
                        <div className="radio-inputs">
                            <div className="radio radio-1">
                                <RadioBtn id="r-1" name="userType" value="buyer" />
                                <label htmlFor="r-1">Я покупатель</label>
                            </div>
                            <div className="radio radio-2">
                                <RadioBtn id="r-2" name="userType" value="seller" />
                                <label htmlFor="r-2">Я продавец</label>
                            </div>
                        </div>
                        <div className="btn-form btn-form-in">
                            <MyButton1 type="submit">
                                Отправить
                            </MyButton1>
                        </div>
                    </form>
                    <a onClick={toggleForm} className="link-logup">У меня уже есть аккаунт</a>
                </div>
            </div>
        :
            <div className="centring">
                <div className="login-wrapper mt-1">
                    <h2 className="title-3">
                        Авторизация
                    </h2>
                    <div className="form-block">
                        <form onSubmit={handleSubmit}>
                            <div className="input-block">
                                <MyInput value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Электронная почта" />
                                <MyInput value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Пароль" />
                            </div>
                            <div className="btn-form">
                                <a onClick={toggleForm} className="link-login">
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
            }
        </div>
    );
};

export default Logup;