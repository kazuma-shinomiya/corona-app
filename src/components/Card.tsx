import Loading from "./Loading"
import { CardType } from "../types"

const Card = ({allCountriesData, loading}: CardType) => {
  return (
    <div className="card-container">
      {
        loading ?
        <Loading />
        :
        allCountriesData.map((countryData, index) =>
            <div key={index}>
              <h2>{countryData.Country}</h2>
              <p>新規感染者： {countryData.NewConfirmed.toLocaleString()}</p>
              <p>感染者総数： {countryData.TotalConfirmed.toLocaleString()}</p>
            </div>
          )
      }
    </div>
  )
}

export default Card