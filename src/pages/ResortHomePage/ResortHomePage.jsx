import { useState, useEffect } from 'react';
import { Routes, Route, useParams, Link } from 'react-router-dom';
import SubNavBar from '../../components/SubNavBar/SubNavBar';
import * as resortsAPI from '../../utilities/resorts-api'
import ResortTicketPage from '../ResortTicketPage/ResortTicketPage';
import ResortTrailPage from '../ResortTrailPage/ResortTrailPage';
import ResortTrailDetailPage from '../ResortTrailDetailPage/ResortTrailDetailPage';
import ResortConditionsPage from '../ResortConditionsPage/ResortConditionsPage';
import ResortDiningPage from '../ResortDiningPage/ResortDiningPage';
import ResortRentalsPage from '../ResortRentalsPage/ResortRentalsPage';
import './ResortHomePage.css' 

export default function ResortHomePage() {
  let resort  = useParams();
  const [home, setHome] = useState('');
  const [weather, setWeather] = useState(null);

  useEffect(function() {
    async function getHome() {
      const home = await resortsAPI.getResort(resort.id);
      setHome(home);
    }
    getHome();
    async function getAllWeather() {
      const home = await resortsAPI.getResort(resort.id);
      const url = `http://api.weatherapi.com/v1/forecast.json?key=8f291e6fb6f7407eb93171917232305&q=${home.town}&days=5`;
      fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Five Day Weather data not available');
        }
        return res.json();
      })
      .then((data) => {
        setWeather(data);;
      })
      .catch(console.error);
  }
  getAllWeather();
  }, [resort.id, home.town]);

  return (
      <>
    <h1><Link to={`/resorts/${home._id}`} className='resortNameh1'>{home.name}</Link></h1>
    <SubNavBar resort={home._id} curCon={weather?.current ?? "Not loaded yet"} />
    <Routes>
      <Route path="/conditions" element={<ResortConditionsPage resort={home} curCon={weather?.current ?? "Not loaded yet"} fiveDay={weather?.forecast.forecastday ?? "Not loaded yet"} />} />
      <Route path="/dining" element={<ResortDiningPage resort={resort} />} />
      <Route path="/rentals" element={<ResortRentalsPage resort={resort} />} />
      <Route path="/tickets" element={<ResortTicketPage />} />
      <Route path="/trails" element={<ResortTrailPage resort={home} />} />
      <Route path="/trails/:tId" element={<ResortTrailDetailPage resort={resort} />} />
    </Routes>
    </>
  );
}
