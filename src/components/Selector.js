import countriesJson from "../countries.json";

const Selector = (props) => {
  return (
    <div className="selector-container">
      <select onChange={(e) => props.setCountry(e.target.value)}>
        {
          countriesJson.map((country, index) =>
            <option key={index} value={country.Slug}>{country.Country}</option>
          )
        }
      </select>
      <button onClick={props.getCountryData}>GET DATA</button>
    </div>
  )
}

export default Selector;