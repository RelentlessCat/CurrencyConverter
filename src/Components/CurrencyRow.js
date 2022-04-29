function CurrencyRow({currencyOptions}) {
    return (
        // parent class
        <div className="mapRow">
        <input type="number" className="input"/>
        <select>
            {currencyOptions.map((option) => (
            <option key={option.id} value={option}>{option.id}</option>
            ))}
        </select>
        </div>
    )
}

export default CurrencyRow;