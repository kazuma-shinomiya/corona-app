import Card from "../components/Card"
import Header from "../components/Header"
import Title from "../components/Title"
import { WorldPageType } from "../types"

const WorldPage = ({allCountriesData, loading}: WorldPageType) => {
  return (
    <div className="world-page-container">
      <Header />
      <Title />
      <Card
        allCountriesData={allCountriesData}
        loading={loading}
      />
    </div>
  )
}

export default WorldPage