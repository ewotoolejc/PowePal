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


export default function ResortHomePage() {
  let resort  = useParams();
  const [home, setHome] = useState('');
  useEffect(function() {
    async function getHome() {
      const home = await resortsAPI.getResort(resort.id);
      setHome(home);
    }
    getHome();
  }, [resort.id]);

  return (
      <>
    <h1><Link to={`/resorts/${home._id}`}>{home.name}</Link></h1>
    <SubNavBar resort={home._id} />
    <Routes>
      <Route path="/conditions" element={<ResortConditionsPage resort={resort} />} />
      <Route path="/dining" element={<ResortDiningPage resort={resort} />} />
      <Route path="/rentals" element={<ResortRentalsPage resort={resort} />} />
      <Route path="/tickets" element={<ResortTicketPage />} />
      <Route path="/trails" element={<ResortTrailPage />} />
      <Route path="/trails/:tId" element={<ResortTrailDetailPage resort={resort} />} />
    </Routes>
    </>
  );
}
