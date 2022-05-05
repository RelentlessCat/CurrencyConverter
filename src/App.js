import { useState, useEffect } from 'react';
import theService from './Service/currency';
import CurrencyRow from './Components/CurrencyRow';

import './App.css';


//const data = require("./db.json");

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [exchangeRate, setExchangeRate] = useState()
  const [amount, setAmount] = useState(1)
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true)

  let toAmount, fromAmount
  if (amountInFromCurrency) {
    fromAmount = amount
    toAmount = amount * exchangeRate
  } else {
    toAmount = amount
    fromAmount = amount / exchangeRate
  }
  // create useEffect for array
  useEffect(() => {
    theService
      .getAll()
      .then(data => {
        const firstCurrency = data[46];
        console.log(firstCurrency)
        setCurrencyOptions(data)
        setFromCurrency(data)
        setToCurrency(firstCurrency)
        setExchangeRate(data[firstCurrency])
      })
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      theService
        .getAll()
        .then(data => {
          const nextCurrency = data[fromCurrency];
          setExchangeRate(data[nextCurrency])
        })
    }
  }, [fromCurrency, toCurrency])

  function handleFromAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(true)
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value)
    setAmountInFromCurrency(false)
  }

  return (
    <div className="flex-container">
      <h1>Convert</h1>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={e => setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount}
      />
      <div className="equals">=</div>
      <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={toCurrency}
        onChangeCurrency={e => setToCurrency(e.target.value)}
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
      />
    </div>
  );
}

export default App;
