import Header from "../components/Header";
import Results from "../components/Results";
import Selector from "../components/Selector";
import Title from "../components/Title";

const TopPage = ({setCountry, getCountryData, countryData}) => {
  return (
    <div className="top-page-container">
      <div>
        <Header />
        <Title />
        <Selector
          setCountry={setCountry}
          getCountryData={getCountryData}
        />
        <Results
          countryData={countryData}
        />
      </div>
    </div>
  )
}

export default TopPage;