import countriesJson from "../countries.json";

const Selector = ({setCountry, getCountryData}) => {
  return (
    <div className="selector-container">
      <select onChange={(e) => setCountry(e.target.value)}>
        {
          countriesJson.map((country, index) =>
            <option key={index} value={country.Slug}>{country.Country}</option>
          )
        }
      </select>
      <button onClick={getCountryData}>GET DATA</button>
    </div>
  )
}

export default Selector;