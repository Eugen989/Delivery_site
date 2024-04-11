import './components/styles/App.css';
import "./components/styles/index.css";
//import MyButton from './components/UI/button/MyButton';

import Navbar from "./components/navbar/Navbar.tsx";
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
import Menu from './components/menu/Menu.tsx';
import Footer from './components/footer/Footer.jsx';

import { useEffect, useState } from 'react';
import axios from "axios";



console.log("Проект в App")

function App() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/users")
        .then((response) => {
        setData(response.data.values);
        console.log(response.data); // Здесь data уже обновлено
        });
    }, [])

    return (
        <BrowserRouter>
            <div className='main'>
                
            React hello
            {data ? (
                <div>
                {data && data.map((item, index) => (
                <p key={index}>{item.name} - {item.password}</p>
                ))}
                </div>
            ) : (
                <p>No data</p>
            )}
                <Navbar/>
                <div className='container'>
                    <Routes>
                        <Route path='/' Component={Home}/>
                        <Route path='/products' Component={Products}/>
                        <Route path='/login' Component={Login}/>
                        <Route path='/logup' Component={Logup}/>
                    </Routes>

                </div>
                <Footer/>
            </div>
        </BrowserRouter>

        //<RouterProvider router={router}/>
    )
}

export default App;
