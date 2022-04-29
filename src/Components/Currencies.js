function CurrencyColumn({currencyOptions}) {

    return (
      <div className="mapCurrencies">
       <ul>
          {currencyOptions.map((option) => (
            <li key={option.id}>
              {option.id} {option.country}: {option.rate}
              <button onClick='#'>Update</button>
            </li>
          ))}
      </ul>
      </div>
    )
  }
  
  export default CurrencyColumn;