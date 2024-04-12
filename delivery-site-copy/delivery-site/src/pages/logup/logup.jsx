import classes from "./logup.module.css";
import { MyInput, InputSelect } from "../../components/UI/input/MyInput.jsx";
import { MyButton1 } from "../../components/UI/button/MyButton.jsx";
import React, { useState, useEffect } from 'react';
import axios from "axios";

const RadioBtn = ({ id, name, value }) => {
    return (
        <input type="radio" id={id} name={name} value={value} required/>
    );
};

const Logup = () => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [dataAuth, setDataAuth] = useState([]);

    const [formData, setFormData] = useState({
        name: '',
        secondName: '',
        email: '',
        password: '',
        userType: ''
      });

    const [val, setVal] = useState('buyer')
    const f = e => {
        setVal(e.target.value)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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

    // useEffect(() => {
    //     console.log(dataAuth);
    //     if(dataAuth) {
    //         axios.post("http://localhost:5000/api/auth/signUp")
    //         .then((response) => {
    //         setDataAuth(response.data.values);
    //         console.log(response.data);
    //         });
    //     }
    // }, [])

    return (
        <div className="logup">
            {!isRegistering ?
                <div className="centring">
                <div className={`${classes.loginWrapper} mt-1`}>
                    <h2 className="title-3">
                        Регистрация
                    </h2>
                    <form action="" method="POST" className={classes.formBlock} onSubmit={handleSubmit}>
                        <MyInput type="name" placeholder="Имя пользователя" name="name" value={formData.name} onChange={handleChange} required/>
                        <MyInput type="email" placeholder="Электронная почта" name="email" value={formData.email} onChange={handleChange} required/>
                        <MyInput type="password" placeholder="Пароль" name="password" value={formData.password} onChange={handleChange} required/>
                        <MyInput type="password" placeholder="Повторить пароль" required/>
                        <div className={classes.choice}>
                            <label htmlFor="shippingMethod">Выберите:</label>
                            <InputSelect id="shippingMethod" name="shippingMethod" required onChange={f}>
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
                    <a onClick={toggleForm} className={classes.linkLogup}>У меня уже есть аккаунт</a>
                </div>
            </div>
            
        :
            <div className="centring">
                <div className={`${classes.loginWrapper} mt-1`}>
                    <h2 className="title-3">
                        Авторизация
                    </h2>
                    <div className={classes.formBlock}>
                        <form onSubmit={handleAccept}>
                            <div className="inputBlock">
                                <MyInput type="email" placeholder="Электронная почта" name="email" value={formData.email} onChange={handleChange} required/>
                                <MyInput type="password" placeholder="Пароль" name="password" value={formData.password} onChange={handleChange} required/>
                            </div>
                            <div className={classes.btnForm}>
                                <a onClick={toggleForm} className={classes.linkLogin}>
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