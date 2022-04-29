import { useState, useEffect } from 'react';
import theService from './Service/currency';
import CurrencyRow from './Components/CurrencyRow';
import CurrencyColumn from './Components/Currencies';
import Filter from './Components/Filter';
import Notification from './Components/Notification';
import './App.css';


//const data = require("./db.json");

function App () {
  const [currencyOptions, setCurrentOption] = useState([]);
  //const [secondOptions, setSecondOption] = useState([]);
  const [newId, setNewId] = useState("")
  const [newCountry, setNewCountry] = useState("")
  const [newRate, setNewRate] = useState("")
  const [filter, setFilter] = useState('')
  const [message, setMessage] = useState(null)

  // create useEffect for array
  useEffect(() => {
    theService
    .getAll()
    .then(currencyOptions => {
      setCurrentOption(currencyOptions)
    })
  }, []);


  // update existing currencies
  const addUpdate = (event) => {
    event.preventDefault();

    const newObject = {
      id: newId,
      country: newCountry,
      rate: newRate
    };

    const index = currencyOptions.findIndex(p => p.id === newId)
    console.log(index);

    if(index !== -1){
      const msg=`This ${newObject.id} already exist! `
      if(window.confirm(msg)){
        theService
        .update(currencyOptions[index].id, newObject)
        .then(response => {
          setNewId(currencyOptions.map(p => (p.id === newId ? newObject : p)))
          setNewId('')
        })
      }
    }
    else {         
      theService
      .create(newObject)
      .then(response => {
        setCurrentOption(currencyOptions.concat(response))
        setNewId('')
      })
      setMessage({
        payload:`Added ${newId}`,
        status:'success'
      }
      )
      setTimeout(() => {
        setMessage(null)
      }, 3000)
    
    }
  }

  // create handle
  const handleIdChange = (e) => setNewId(e.target.value)
  const handleCountryChange = (e) => setNewCountry(e.target.value)
  const handleRateChange = (e) => setNewRate(e.target.value)

  // create filter
  const handleFilterChange = (e) => {
    setFilter(e.target.value)
    setCurrentOption(currencyOptions.filter((option) =>
      (option.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1)))
  }

  // create schema
  const formData = {
    addUpdate,
    handleIdChange,
    handleCountryChange,
    handleRateChange,
    newId,
    newCountry,
    newRate
  }

  return (
    <div className="flex-container">
      <Notification message={message}/>
      <h1>Converter</h1>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <CurrencyRow currencyOptions={currencyOptions}/>
      <div>=</div>
      <CurrencyRow currencyOptions={currencyOptions}/>
      <div className='sidebar'>
        <CurrencyColumn currencyOptions={currencyOptions}/>
      </div>
    </div>
  );
}

export default App;
