import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createStore} from "redux";
import {Provider} from "react-redux";

console.log("Проект запускаеться");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)