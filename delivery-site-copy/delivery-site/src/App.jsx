import './components/styles/App.css';
import "./components/styles/index.css";
//import MyButton from './components/UI/button/MyButton';

import Navbar from "./components/navbar/Navbar.jsx";
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
import Home from './pages/home/Home.jsx';
import Products from './pages/products/Products.jsx';
import Login from './pages/login/Login.jsx';
import Logup from "./pages/logup/logup.jsx";
import Footer from './components/footer/Footer.jsx';
import Profile from "./pages/profile/Profile.jsx";
import Basket from "./pages/basket/Basket.jsx";
import EditProduct from "./pages/editProduct/EditProduct.jsx";
import CreateProduct from "./pages/createProduct/CreateProduct.jsx";
import MakingOrder from "./pages/makingOrder/MakingOrder.jsx";

import { useState, useEffect } from 'react';
import axios from "axios";

console.log("Проект в App")


// Сохраняем значение UseId в localStorage
localStorage.setItem('UserData', JSON.stringify({userId: 0, userName: '', userType: ''}));
console.log(JSON.parse(localStorage.getItem('UserData')))
function App() {
    const menuProps = {
        isMainPage: window.location.pathname === '/' || window.location.pathname === ''
    };

    // const [dataAuth, setDataAuth] = useState([]);

    // useEffect(() => {
    //     axios.get("http://localhost:5000/api/users")
    //     .then((response) => {
    //     setDataAuth(response.data.values);
    //     console.log(response.data);
    //     });
    // }, [])

    return (
        <BrowserRouter>
            <div className='main'>

                {/* React hello
                    {dataAuth ? (
                        <div>
                        {dataAuth && dataAuth.map((item, index) => (
                        <p key={index}>{item.name} - {item.password}</p>
                        ))}
                        </div>
                    ) : (
                        <p>No dataAuth</p>
                    )} */}

                <Navbar {...menuProps}/>
                <div className='container'>
                    <Routes>
                        <Route path='/' Component={Home}/>
                        <Route path='/products' Component={Products}/>
                        <Route path='/login' Component={Login}/>
                        <Route path='/logup' Component={Logup}/>
                        <Route path='/profile' Component={Profile}/>
                        <Route path='/basket' Component={Basket}/>
                        <Route path='/edit' Component={EditProduct}/>
                        <Route path='/create' Component={CreateProduct}/>
                        <Route path='/making' Component={MakingOrder}/>
                    </Routes>

                </div>
                <Footer/>
            </div>
        </BrowserRouter>

        //<RouterProvider router={router}/>
    )
}

export {App};
