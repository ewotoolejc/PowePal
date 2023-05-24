import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import * as resortsAPI from '../../utilities/resorts-api';
import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar';
import ResortList from '../ResortList/ResortList'
import ResortHomePage from '../ResortHomePage/ResortHomePage';
import './App.css'

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
          <div className='maindiv'>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* <Route path="/orders/new" element={<NewOrderPage />} />
              <Route path="/orders" element={<OrderHistoryPage />} /> */}
              <Route path="resorts/" element={<ResortList resorts={resorts} />} />
              <Route path="resorts/:id/*" element={<ResortHomePage />} />
              <Route path="/*" element={<Navigate to="/resorts" />} />
            </Routes>
          </div>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
