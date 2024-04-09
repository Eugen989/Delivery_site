import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    return (
        <div>
            <div><NavLink to="/login">Войти</NavLink></div>
            <div><NavLink to="/registration">Зарегестрироваться</NavLink></div>
        </div>
    );
};

export default Navbar