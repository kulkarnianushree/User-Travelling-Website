import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/AuthPage';
import StayPage from './Pages/StayPage';
import { useSelector } from 'react-redux';
import HomePage from './Pages/HomePage';
import ListPage from './Pages/ListPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookPage from './Pages/BookPage';
import YourBookingPage from './Pages/YourBookingPage';
import VillasPage from './Pages/VillasPage';
import Apartmentpage from './Pages/Apartmentpage';
import HouseBoatpage from './Pages/HouseBoatpage';
import FarmhousePage from './Pages/FarmhousePage';
const App = () => {
  const Login = useSelector(state=>state.auth.LoginStatus)
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={!Login ? <LoginPage />: <HomePage/>} />
          <Route path='/Stay' element={<StayPage/>}/>
          <Route path='/List' element={<ListPage/>}/>
          <Route path='/Book' element={<BookPage/>}/>
          <Route path='/YourBooking' element={<YourBookingPage/>}/>
          <Route path='/Villas' element={<VillasPage/>}/>
          <Route path='/Appartment' element={<Apartmentpage/>}/>
          <Route path='/HouseBoat' element={<HouseBoatpage/>}/>
          <Route path='/Farmhouse' element={<FarmhousePage/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
