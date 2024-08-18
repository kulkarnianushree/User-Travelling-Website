import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BookActions } from '../../Store/book'; 
import './Booking.css';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const YourBooking = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.auth.email); 
  const BookStatus = useSelector((state) => state.book.BookStatus);
  const navigate = useNavigate()
  useEffect(() => {
    const fetchBookStatus = async () => {
      try {
        const response = await fetch('https://travelling-user-default-rtdb.firebaseio.com/Book.json');
        if (!response.ok) {
          throw new Error('Something went wrong');
        }
        const data = await response.json();
        dispatch(BookActions.setBookstatus(data));
        console.log(data) 
        /* 
Object
-O4_5rtJV19RoDJj3Lpu
: 
Address
: 
"Madhav Krupa Banashree layout yalakki shetter colony Dharwad"
Entry
: 
"2024-08-10T18:30:00.000Z"
Exit
: 
"2024-08-12T18:30:00.000Z"
Hotel
: 
{AC: 1000, Address: 'Banglore city center', City: 'Bengaluru', ImageUrls: Array(3), Name: 'Grand Kaling Hotel', …}
People
: 
3
Status
: 
"Confirmed"
UserEmail
: 
"jayarajmkulkarni@gmail.com" */
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchBookStatus();
  }, [dispatch]);

  const filteredBookings = Object.values(BookStatus || {}).filter(
    (booking) => booking.UserEmail === email
  );

  
  const calculateDays = (entryDate, exitDate) => {
    const start = new Date(entryDate);
    const end = new Date(exitDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const BackButtonHandler=()=>{
    navigate('/')
  }

  return (
    <div className="booking-container">
      <Button type='button' variant='Dark' onClick={BackButtonHandler}>Back</Button>
      <h1>Your Booking Status</h1>
      {filteredBookings.length > 0 ? (
        filteredBookings.map((booking, index) => {
          const numberOfDays = calculateDays(booking.Entry, booking.Exit);
          const totalAmount = numberOfDays * booking.Hotel.Price;

          return (
            <div key={index} className="booking-item">
              <img src={booking.Hotel.ImageUrls[0]} alt='' />
              <div className="details-container">
                <h2>{booking.Hotel.Name}</h2>
                <p><strong>From:</strong> {booking.Entry}</p>
                <p><strong>To:</strong> {booking.Exit}</p>
                <p><strong>Number of People:</strong> {booking.People}</p>
                <p><strong>Number of Days:</strong> {numberOfDays}</p>
                <p><strong>Total Amount:</strong> {totalAmount}</p>
                <p className="status-booked">Booked</p>
              </div>
            </div>
          );
        })
      ) : (
        <p className="no-bookings">No bookings found.</p>
      )}
    </div>
  );
};

export default YourBooking;
