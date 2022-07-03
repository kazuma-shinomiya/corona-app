import Card from "../components/Card"
import Header from "../components/Header"
import Title from "../components/Title"

const WorldPage = ({allCountriesData, loading}) => {
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