import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from "axios";
import React from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users")
    .then((response) => {
      setData(response.data.values);
      console.log(response.data); // Здесь data уже обновлено
    });
  }, [])

  return (
    <div className="App">
      React hello
      {data ? (
        <div>
          {data && data.map((item, index) => (
          <p key={index}>{item.name} - {item.password}</p>
          ))}
        </div>
      ) : (
        <p>No data</p>
      )}

    </div>
  );
}

export default App;
