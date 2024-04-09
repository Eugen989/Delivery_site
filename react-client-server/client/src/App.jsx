import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Registration from './components/registration/registration';
import Navbar from './components/utils/navbar/Navbar';

function App() {
  return (
      <BrowserRouter>
        <p>Happy hacking!</p>
        <Navbar/>
        <Routes>
            <Route path='/login' component={Registration}/>
            <Route path='/registration' component={Registration}/>

          {/* <a><NavLink to="/login"/>Логин</a> */}
          {/* <p><NavLink to="/registration"/>Регистрация</p> */}
        </Routes>
      </BrowserRouter>
  );
}

export default App;