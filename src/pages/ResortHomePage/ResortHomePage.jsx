import { useState, useEffect } from 'react';
import SubNavBar from '../../components/SubNavBar/SubNavBar';
import { useParams } from "react-router-dom";
import * as resortsAPI from '../../utilities/resorts-api'

export default function ResortHomePage({resorts}) {
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
    <SubNavBar />
    <br />
    test
    </>
  );
}
