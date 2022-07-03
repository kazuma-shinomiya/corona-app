import Card from "../components/Card"
import Header from "../components/Header"
import Title from "../components/Title"

const WorldPage = (props) => {
  return (
    <div className="world-page-container">
      <Header />
      <Title />
      <Card
        allCountriesData={props.allCountriesData}
      />
    </div>
  )
}

export default WorldPage