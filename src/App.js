import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import StartPage from './pages/StartPage';
import Calender from './pages/calender';
import EveryDay from './pages/EveryDay';
import HaveToDo from './pages/HaveToDo';
import todayList from './pages/todayList';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<StartPage value='20' />} />
          <Route path='/calender' element={<Calender />} />
          <Route path='/everday' element={<EveryDay />} />
          <Route path='/HaveToDo' element={<HaveToDo />} />
          <Route path='/todolist' element={<todayList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
