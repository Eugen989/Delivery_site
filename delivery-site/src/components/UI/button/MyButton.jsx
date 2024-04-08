import React from "react";
import classes from "./MyButton.module.css";

const MyButton1 = ({ children, ...props }) => {
    return (
        <button {...props} className={`${classes.myBtn1} ${props.className}`}>
            {children}
        </button>
    );
};

const MyButton2 = ({ children, ...props }) => {
    return (
        <button {...props} className={`${classes.myBtn2} ${props.className}`}>
            {children}
        </button>
    );
};

export { MyButton1, MyButton2 };