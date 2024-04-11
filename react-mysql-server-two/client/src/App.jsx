import logo from './logo.svg';
import './App.css';
import React, { Component, useEffect }  from 'react';
import { useState } from 'react';
import axios from "axios";

function App() {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/api")
    .then((response) => {
      setStocks(response.data);
    })
    ;
  }, [])

  return (
    <div className="App">
      <p>Hello</p>
      {stocks ? (stocks) : ("<p>Not found</p>")}
    </div>
  );
}

export default App;
