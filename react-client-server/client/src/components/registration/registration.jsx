import React, { useState } from "react";
import Input from "../utils/input/input";

const Registration = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <h1>Регистрация</h1>
            <Input value={name} setValue={setName} />
            <Input value={password} setValue={setPassword} />
            <button>Войти</button>
        </div>
    )
}

export default Registration;