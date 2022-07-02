import './App.css';
import { useState } from 'react';
import TopPage from './pages/TopPage';

function App() {
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState({
    date: "",
    newConfirmed: "",
    totalConfirmed: "",
    newRecovered: "",
    totalRecovered: "",
  });
  const getCountryData = () => {
    fetch(`https://api.covid19api.com/country/${country}`)
      .then(res => res.json())
      .then(data => {
        const todayData = data[data.length - 1];
        const yesterdayData = data[data.length - 2];
        setCountryData({
          date: todayData.Date,
          newConfirmed: todayData.Confirmed - yesterdayData.Confirmed,
          totalConfirmed: todayData.Confirmed,
          newRecovered: todayData.Recovered - yesterdayData.Recovered,
          totalRecovered: todayData.Recovered,
        });
      })
  }

  return (
    <div>
      <TopPage 
        setCountry={setCountry}
        countryData={countryData}
        getCountryData={getCountryData}
      />
    </div>
  );
}

export default App;
