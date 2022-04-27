function Currencies({currencies}) {

    return (
      <div className="mapCurrencies">
       <ul>
          {currencies.map((currency) => (
            <li key={currency.id}>
              {currency.id} {currency.country}: {currency.rate}
            </li>
          ))}
      </ul>
      </div>
    )
  }
  
  export default Currencies;