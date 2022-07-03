import Header from "../components/Header";
import Results from "../components/Results";
import Selector from "../components/Selector";
import Title from "../components/Title";

const TopPage = ({setCountry, getCountryData, countryData, loading}) => {
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
          loading={loading}
        />
      </div>
    </div>
  )
}

export default TopPage;