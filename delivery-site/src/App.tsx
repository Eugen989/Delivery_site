import './components/styles/App.css';
//import MyButton from './components/UI/button/MyButton';
import "./components/styles/index.css";
import Navbar from "./components/navbar/Navbar.tsx";
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Home from './pages/home/Home.tsx';
import Products from './pages/products/Products.tsx';
import Login from './pages/login/Login.tsx';
import Menu from './components/menu/Menu.tsx';
import Footer from './components/footer/Footer.tsx';



function App() {
    const Layout = () => {
        return (
            <div className='main'>
                <Navbar/>
                <div className='container'>
                    <div className='menuContainer'>
                        <Menu/>
                    </div>
                    <div className='contentContainer'>
                        <Outlet></Outlet>
                    </div>
                    <Footer/>
                </div>
                
            </div>
        )
    }

    const router = createBrowserRouter([
        {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/product",
                element: <Home/>
            },
        ]
        },
        {
            path: "login",
            element: <Login/>
        }
    ])

    return (
        <RouterProvider router={router}/>
    )
}

export default App;
