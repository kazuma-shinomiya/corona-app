import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import TopPage from './pages/TopPage';
import WorldPage from './pages/WorldPage';

function App() {
  const [country, setCountry] = useState("");
  const [countryData, setCountryData] = useState({
    date: "",
    newConfirmed: "",
    totalConfirmed: "",
    newRecovered: "",
    totalRecovered: "",
  });
  const [allCountriesData, setAllCountriesData] = useState([]);

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

  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then(res => res.json())
      .then(data => setAllCountriesData(data.Countries))
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<TopPage 
            setCountry={setCountry}
            countryData={countryData}
            getCountryData={getCountryData}
          />}>
        </Route>
        <Route 
          path="/world" 
          element={<WorldPage
            allCountriesData={allCountriesData}
          />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
