function Currencies({currency}) {

    return (
       <ul>
          {currency.map((countryName) => (
            <li key={countryName.id}>{currency.countryName}: {currency.rates}
            </li>
          ))}
      </ul>
    )
  }
  
  export default Currencies;