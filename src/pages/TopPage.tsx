import Header from "../components/Header";
import Results from "../components/Results";
import Selector from "../components/Selector";
import Title from "../components/Title";
import { TopPageType } from "../types";

const TopPage = ({setCountry, countryData, loading}: TopPageType) => {
  return (
    <div className="top-page-container">
      <div>
        <Header />
        <Title />
        <Selector
          setCountry={setCountry}
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