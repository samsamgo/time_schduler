import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import StartPage from './pages/StartPage';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path='/'
            element={
              isLogin ? (<StartPage />)
                : (<Login setIsLogin={setIsLogin} setUserInfo={setUserInfo} />)
            }


          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
