import React from "react";
import classes from "./MyButton.module.css";

const MyButton1 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn1}>
            {children}
        </button>
    );
};

const MyButton2 = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn2}>
            {children}
        </button>
    );
};

export default {MyButton1, MyButton2};