import React from "react";
import classes from "./MyInput.module.css";

const MyInput = ({ ...props }) => {
    return (
        <input type="text" {...props} className={classes.myInput} />
    );
};

const RadioBtn = ({id, text, name, onChange, checked, value}) => {

    return (
        <label htmlFor="men">
            <input
                className={classes.radioBtn}
                type="radio"
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                checked={checked}
            />
            <span className={classes.customRadio}></span>
            {text}
        </label>
    );
};

const InputFilter = ({ ...props }) => {
    return (
        <input type="number" {...props} className={classes.inputFilter} />
    );
};

const InputCheck = ({ children, isChecked, onChange }) => {
    return (
        <label className={classes.inputCheck_label}>
            <input
                type="checkbox"
                className={classes.inputCheck}
                checked={isChecked}
                onChange={(event) => onChange(event.target.checked)}
            />
            <span>{children}</span>
        </label>
    );
};

const InputEdit = ({...props}) => {
    return (
        <input type="checkbox" {...props} className={classes.InputEdit}/>
    );
};

const InputSelect = ({children, ...props}) => {
    return (
        <select {...props} className={classes.inputSelect}>
            {children}
        </select>
    );
};


export { MyInput, RadioBtn, InputFilter, InputCheck, InputEdit, InputSelect };