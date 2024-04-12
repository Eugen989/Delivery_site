import classes from "./logup.module.css";
import { MyInput, InputSelect, RadioBtn } from "../../components/UI/input/MyInput.jsx";
import { MyButton1 } from "../../components/UI/button/MyButton.jsx";
import React, {useEffect, useState} from "react";

const Logup = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/auth/signUp', {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                userType: val
            });
            console.log(response.data);
            // Дополнительные действия после успешного запроса
        } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
            // Дополнительные действия при ошибке запроса
        }
    };

    const handleAccept = async (e) => {
        e.preventDefault();
        setFormData({ ...formData, email: formData.email, password: formData.password });
        try {
            const response = await axios.get('http://localhost:5000/api/auth/signIn', {
                params: {
                    email: formData.email,
                    password: formData.password
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
        }
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
                    <form action="" method="POST" className={classes.formBlock} onSubmit={handleSubmit}>
                        <MyInput type="email" placeholder="Электронная почта" required/>
                        <MyInput placeholder="Имя пользователя" required/>
                        <MyInput type="password" placeholder="Пароль" required/>
                        <MyInput type="password" placeholder="Повторить пароль" required/>
                        <div className={classes.choice}>
                            <RadioBtn
                                text="Я покупатель"
                                name="choice"
                                value="buyer"
                                onChange={handlerChange}
                                checked={valueSelectRegistering === 'buyer'}
                            />
                            <RadioBtn
                                text="Я продавец"
                                name="choice"
                                value="seller"
                                onChange={handlerChange}
                                checked={valueSelectRegistering === 'seller'}
                            />
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
                            <form onSubmit={handleAccept}>
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