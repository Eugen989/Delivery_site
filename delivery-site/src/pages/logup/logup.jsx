import classes from "./logup.module.css";
import { MyInput, InputSelect } from "../../components/UI/input/MyInput.jsx";
import { MyButton1 } from "../../components/UI/button/MyButton.jsx";
import React, {useEffect, useState} from "react";

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

    const [valueSelectRegistering, setVal] = useState('buyer')
    const handlerChange = e => {
        setVal(e.target.value)
    }

    return (
        <div className="logup">
            {isRegistering ?
                <div className="centring">
                <div className={`${classes.loginWrapper} mt-1`}>
                    <h2 className={`${classes.titleForm} title-3`}>
                        Регистрация
                    </h2>
                    <form action="" method="POST" className={classes.formBlock}>
                        <MyInput type="email" placeholder="Электронная почта" required/>
                        <MyInput placeholder="Имя пользователя" required/>
                        <MyInput type="password" placeholder="Пароль" required/>
                        <MyInput type="password" placeholder="Повторить пароль" required/>
                        <div className={classes.choice}>
                            <label htmlFor="shippingMethod">Выберите:</label>
                            <InputSelect id="shippingMethod" name="shippingMethod" required onChange={handlerChange}>
                                <option value="buyer">Я покупатель</option>
                                <option value="seller">Я продавец</option>
                            </InputSelect>
                        </div>
                        <div className={`${classes.btnForm} ${classes.btnFormIn}`}>
                            <MyButton1 type="submit">
                                Отправить
                            </MyButton1>
                        </div>
                    </form>
                    <a onClick={toggleForm} className={classes.linkLoginOut}>У меня уже есть аккаунт</a>
                </div>
                </div>
                :
                <div className="centring">
                    <div className={`${classes.loginWrapper} mt-1`}>
                        <h2 className={`${classes.titleForm} title-3`}>
                            Авторизация
                        </h2>
                        <div className={classes.formBlock}>
                            <form onSubmit={handleSubmit}>
                                <div className="inputBlock">
                                    <MyInput value={email} onChange={(e) => setEmail(e.target.value)} type="email"
                                             placeholder="Электронная почта" required/>
                                <MyInput value={pass} onChange={(e) => setPass(e.target.value)} type="password"
                                         placeholder="Пароль" required/>
                            </div>
                            <div className={classes.btnForm}>
                                <MyButton1 type="submit">
                                    Отправить
                                </MyButton1>
                            </div>
                        </form>
                    </div>
                    <a onClick={toggleForm} className={classes.linkLoginOut}>
                        У меня нет аккаунта
                    </a>
                </div>
            </div>
            }
        </div>
    );
};

export default Logup;