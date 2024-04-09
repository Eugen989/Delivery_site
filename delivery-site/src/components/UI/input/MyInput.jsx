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

const InputFilter = ({ children, ...props }) => {
    return (
        <input type="number" {...props} className={classes.inputFilter} />
    );
};

const InputCheck = ({ children, ...props }) => {
    return (
        <input type="checkbox" {...props} className={classes.InputCheck} />
    );
};


export { MyInput, RadioBtn, InputFilter, InputCheck };