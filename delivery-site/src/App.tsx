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
import Home from './pages/home/Home.tsx';
import Products from './pages/products/Products.tsx';
import Login from './pages/login/Login.tsx';
import Logup from "./pages/logup/logup.tsx";
import Menu from './components/menu/Menu.tsx';
import Footer from './components/footer/Footer.tsx';



function App() {
    // const Layout = () => {
    //     return (
    //         <div className='main'>
    //             <Navbar/>
    //             <div className='container'>
    //                 <div className='menuContainer'>
    //                     <Menu/>
    //                 </div>
    //                 <div className='contentContainer'>
    //                     <Outlet></Outlet>
    //                 </div>
    //                 <Footer/>
    //             </div>
                
    //         </div>
    //     )
    // }

    // const router = createBrowserRouter([
    //     {
    //     path: "/",
    //     element: <Layout/>,
    //     children: [
    //         {
    //             path: "/home",
    //             element: <Home/>
    //         },
    //         {
    //             path: "/product",
    //             element: <Home/>
    //         },
    //     ]
    //     },
    //     {
    //         path: "login",
    //         element: <Login/>
    //     }
    // ])

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
