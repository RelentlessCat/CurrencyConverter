import { useState, useEffect } from 'react';
import theService from './Service/currency';
import Currencies from './Components/Currencies';
import Buttons from './Components/Buttons';

import './App.css';

function App () {
  const [currenOption, setCurrentOption] = useState([]);
  const [secondOptions, setSecondOption] = useState([]);


  // create useEffect for array
  useEffect(() => {
    theService
    .getAll()
    .then(currenOption => {
      setCurrentOption(currenOption)
    })
  }, []);


  return (
    <div className="App">
      <Buttons />
      <Currencies currenOption={currenOption}/>
    </div>
  );
}

export default App;
