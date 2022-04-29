import { useState, useEffect } from 'react';

import theService from './Service/currency';
import CurrencyRow from './Components/CurrencyRow';


import './App.css';

//const data = require("./db.json");

function App () {
  const [currencyOptions, setCurrentOption] = useState([]);
  //const [secondOptions, setSecondOption] = useState([]);


  // create useEffect for array
  useEffect(() => {
    theService
    .getAll()
    .then(currencyOptions => {
      setCurrentOption(currencyOptions)
    })
  }, []);


  return (
    <div className="flex-container">
      <h1>Converter</h1>
      <CurrencyRow currencyOptions={currencyOptions}/>
      <div>=</div>
      <CurrencyRow currencyOptions={currencyOptions}/>
    </div>
  );
}

export default App;
