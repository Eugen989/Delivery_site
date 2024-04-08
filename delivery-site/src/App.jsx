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


console.log("Проект в App")

function App() {

    return (
        <BrowserRouter>
            <div className='main'>

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