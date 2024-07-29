import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/AuthPage';
import StayPage from './Pages/StayPage';
import { useSelector } from 'react-redux';
import HomePage from './Pages/HomePage';

const App = () => {
  const Login = useSelector(state=>state.auth.LoginStatus)
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={!Login ? <LoginPage />: <HomePage/>} />
          <Route path='/Stay' element={<StayPage/>}/>
         
        </Routes>
      </Router>
    </div>
  );
};

export default App;
