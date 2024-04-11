import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const [data, setData] = useState(null);

// useEffect(() => {
//   fetch("/api")
//   .then((response) => response.json())
//   .then(response => setData(response.message));
// })

function App() {
  return (
    <div className="App">
      <p>Руддщ</p>
    </div>
  );
}

export default App;
