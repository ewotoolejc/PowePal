import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SubNavBar from '../../components/SubNavBar/SubNavBar';
import { useParams } from "react-router-dom";
import * as resortsAPI from '../../utilities/resorts-api'
import ResortTicketPage from '../ResortTicketPage/ResortTicketPage';

export default function ResortHomePage({}) {
  let resort  = useParams();
  const [home, setHome] = useState('');
  useEffect(function() {
    async function getHome() {
      const home = await resortsAPI.getResort(resort.id);
      setHome(home);
    }
    getHome();
  }, []);

  return (
      <>
    <h1>{home.name}</h1>
    <SubNavBar resort={home._id} />
    <br />
    test
    <Routes>
      <Route path="/tickets" element={<ResortTicketPage />} />
    </Routes>
    </>
  );
}
