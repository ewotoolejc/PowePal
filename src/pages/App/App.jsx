import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import * as resortsAPI from '../../utilities/resorts-api';
import AuthPage from '../AuthPage/AuthPage';
// import NewOrderPage from '../NewOrderPage/NewOrderPage';
// import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar';
import PowePalv1 from '../../PowePalv1.png'
import ResortList from '../ResortList/ResortList'

export default function App() {
  const [user, setUser] = useState(getUser());
  const [resorts, setResorts] = useState([]);
  
  useEffect(function() {
    async function getResorts() {
      const resorts = await resortsAPI.getAll();
      setResorts(resorts);
    }
    getResorts();
  }, []);


  return (
    <main className="App">
      { user ?
          <>
            <NavBar className='mainNav' user={user} setUser={setUser} />
            {/* <Routes> */}
              {/* Route components in here */}
              {/* <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} />
            </Routes> */}
            <br />
            <img src={PowePalv1} alt='' className='Brand'/>
            <div><ResortList resorts={resorts} /></div>
          </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
