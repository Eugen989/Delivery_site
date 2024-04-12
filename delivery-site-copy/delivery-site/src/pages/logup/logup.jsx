import classes from "./logup.module.css";
import { MyInput, RadioBtn } from "../../components/UI/input/MyInput.jsx";
import { MyButton1 } from "../../components/UI/button/MyButton.jsx";
import React, { useState } from 'react';
import axios from "axios";

const Logup = () => {

    console.log(localStorage.UserData);
    // if(!localStorage.UserData){
        localStorage.setItem('UserData', JSON.stringify({userId: 0, userName: '', userType: ''}));
    // }
    // localStorage.removeItem("UserData")
    
    // JSON.parse(localStorage.getItem('UserData')).userId = 2;
    // localStorage.userData.userId = 2;
    // console.log(JSON.parse(localStorage.getItem('UserData')))

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

    const [valueSelectRegistering, setVal] = useState('buyer')
    const handlerChange = e => {
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
                userType: valueSelectRegistering
            });
            console.log(response.data);
            window.location.href=('/profile')
        } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
            // Дополнительные действия при ошибке запроса
        }
    };

    localStorage.removeItem("TestData");
    const handleAccept = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:5000/api/auth/signIn', {
                params: {
                    email: formData.email,
                    password: formData.password
                }
            });

            let data = response.data.values;
            console.log(data.type);
            // localStorage.removeItem("TestData");
            // localStorage.setItem('TestData', JSON.stringify(data));
            // console.log("TestData", JSON.parse(localStorage.getItem('TestData')))
            localStorage.setItem('UserData', JSON.stringify({userId: data.id, userName: data.name, userType: data.type}));
            window.location.href=('/profile')
        } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
        }
    };

    const [isRegistering, setIsRegistering] = useState(false);

    const toggleForm = () => {
        setIsRegistering(prevState => !prevState);
    };

    return (
        <div className="logup">
            {!isRegistering ?
                <div className="centring">
                    <div className={`${classes.loginWrapper} mt-1`}>
                        <h2 className={`${classes.titleForm} title-3`}>
                            Регистрация
                        </h2>
                        <form action="" method="POST" className={classes.formBlock} onSubmit={handleSubmit}>
                            <MyInput type="name" placeholder="Имя пользователя" name="name" value={formData.name}
                                     onChange={handleChange} required/>
                            <MyInput type="email" placeholder="Электронная почта" name="email" value={formData.email}
                                     onChange={handleChange} required/>
                            <MyInput type="password" placeholder="Пароль" name="password" value={formData.password}
                                     onChange={handleChange} required/>
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
                                    value="salesman"
                                    onChange={handlerChange}
                                    checked={valueSelectRegistering === 'salesman'}
                                />
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
                        <h2 className={`${classes.titleForm} title-3`}>
                            Авторизация
                        </h2>
                        <div className={classes.formBlock}>
                            <form onSubmit={handleAccept}>
                                <div className="inputBlock">
                                    <MyInput type="email" placeholder="Электронная почта" name="email"
                                             value={formData.email} onChange={handleChange} required/>
                                    <MyInput type="password" placeholder="Пароль" name="password"
                                             value={formData.password} onChange={handleChange} required/>
                                </div>
                                <div className={classes.btnForm}>
                                    <MyButton1 type="submit">
                                        Отправить
                                    </MyButton1>
                                </div>
                            </form>
                        </div>
                        <a onClick={toggleForm} className={classes.linkLogup}>У меня уже есть аккаунт</a>
                    </div>
                </div>

            }
        </div>
    );
};

export default Logup;