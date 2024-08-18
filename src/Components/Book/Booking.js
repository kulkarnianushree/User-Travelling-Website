import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useLocation, useNavigate } from 'react-router-dom';
import 'react-datepicker/dist/react-datepicker.css';
import './Booking.css';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const Booking = () => {
  const { state } = useLocation();
  const { hotelDetails } = state || {};
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [address, setAddress] = useState('');
  const [guest, setGuest] = useState(0);
  const [buttonText, setButtonText] = useState('Continue');
  const email = useSelector((state) => state.auth.email);
  const navigate = useNavigate();

  // Polling function to check the booking status
  useEffect(() => {
    let intervalId;

    if (buttonText === 'Pending') {
      intervalId = setInterval(async () => {
        const response = await fetch('https://travelling-user-default-rtdb.firebaseio.com/Book.json');
        const data = await response.json();

        const booking = Object.values(data || {}).find(
          (booking) => booking.UserEmail === email && booking.Status === "Confirmed"
        );

        if (booking) {
          setButtonText('Confirmed');
          clearInterval(intervalId);  // Stop polling once confirmed
        }
      }, 5000);  // Poll every 5 seconds
    }

    return () => clearInterval(intervalId);  // Cleanup on unmount or when status changes
  }, [buttonText, email]);

  const ContinueButtonHandler = async () => {
    setButtonText('Pending');

    try {
      const response = await fetch('https://travelling-user-default-rtdb.firebaseio.com/Book.json', {
        method: 'POST',
        body: JSON.stringify({
          Hotel: hotelDetails,
          Entry: startDate,
          Exit: endDate,
          Address: address,
          UserEmail: email,
          People: guest,
          Status: 'Pending'
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();
      console.log(data);

    } catch (error) {
      alert(error.message);
    }
  };

  const CancelButtonHandler = () => {
    navigate('/Book');
  };

  return (
    <div className="form-container">
      <h1>Book Your Stay</h1>
      {hotelDetails ? (
        <div className="details-container">
          <h2>{hotelDetails.Name}</h2>
          <p><span>Address:</span> {hotelDetails.Address}</p>
          <p><span>City:</span> {hotelDetails.City}</p>
          <p><span>AC:</span> {hotelDetails.AC}</p>
          <p><span>Non AC:</span> {hotelDetails.NonAc}</p>
          <p><span>Price:</span> {hotelDetails.Price}</p>
        </div>
      ) : (
        <p>No hotel details available.</p>
      )}
      <form>
        <div className="datepicker-wrapper">
          <label>Dates</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Check-in"
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="Check-out"
          />
        </div>
        <div>
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            id='address'
            onChange={(e) => setAddress(e.target.value)}
            value={address}
          />
        </div>
        <div>
          <label htmlFor='num'>Number of Guests</label>
          <input
            type='number'
            id='num'
            onChange={(e) => setGuest(Number(e.target.value))}
            value={guest}
          />
        </div>
        <Button
          type='button'
          variant='primary'
          onClick={ContinueButtonHandler}
          disabled={buttonText === 'Confirmed' || buttonText === 'Pending'}
        >
          {buttonText}
        </Button>
        <Button type='button' variant='danger' onClick={CancelButtonHandler}>
          Cancel
        </Button>
      </form>
    </div>
  );
};

export default Booking;
