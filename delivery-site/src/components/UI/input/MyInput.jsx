import React from "react";
import classes from "./MyInput.module.css";

const MyInput = ({ children, ...props }) => {
    return (
        <input type="text" {...props} className={classes.myInput} />
    );
};

const RadioBtn = ({ children, ...props }) => {
    return (
        <input type="radio" {...props} className={classes.radioBtn} />
    );
};


export { MyInput, RadioBtn };