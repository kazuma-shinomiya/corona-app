import './App.css';
import { useEffect, useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import TopPage from './pages/TopPage';
import WorldPage from './pages/WorldPage';
import { CountryDataType, AllCountriesDataType} from './types';

function App() {
  const [country, setCountry] = useState<string>("japan");
  const [countryData, setCountryData] = useState<CountryDataType>({
    date: "",
    newConfirmed: 0,
    totalConfirmed: 0,
    newRecovered: 0,
    totalRecovered: 0,
  });
  const [allCountriesData, setAllCountriesData] = useState<AllCountriesDataType>([{
    Country: "",
    NewConfirmed: 0,
    TotalConfirmed: 0,
  }]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getCountryData = () => {
      setLoading(true);
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
          setLoading(false);
        })
        .catch(error => alert("エラーが発生しました"))
      }
      getCountryData();    
  }, [country]);
  
  useEffect(() => {
    setLoading(true);
    fetch("https://api.covid19api.com/summary")
      .then(res => res.json())
      .then(data => {
        setAllCountriesData(data.Countries);
        setLoading(false);
      })
      .catch(error => alert("エラーが発生しました"))
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={<TopPage 
            setCountry={setCountry}
            countryData={countryData}
            loading={loading}
          />}>
        </Route>
        <Route 
          path="/world" 
          element={<WorldPage
            allCountriesData={allCountriesData}
            loading={loading}
          />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
