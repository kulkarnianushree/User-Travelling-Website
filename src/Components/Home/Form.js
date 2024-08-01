import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TextField, Button, MenuItem, Select } from '@mui/material';
import RoomModal from './Modal';
import './Form.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Exploreaction } from '../../Store/explore';

const Form = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [rooms, setRooms] = useState([{ adults: 1, children: 0, childrenAges: [] }]);
    const [city, setCity] = useState('');
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleRoomChange = (index, field, value) => {
        const newRooms = [...rooms];
        newRooms[index][field] = value;
        setRooms(newRooms);
    };

    const handleAddRoom = () => {
        setRooms([...rooms, { adults: 1, children: 0, childrenAges: [] }]);
    };

    const handleDeleteRoom = (index) => {
        const newRooms = rooms.filter((_, i) => i !== index);
        setRooms(newRooms);
    };

    const SearchHandler = async () => {
        navigate('/List')
        const totalTravellers = rooms.reduce((total, room) => total + room.adults + room.children, 0);

        try {
            const response = await fetch('https://travelling-user-default-rtdb.firebaseio.com/Search.json', {
                method: 'POST',
                body: JSON.stringify({
                    city,
                    Enter: startDate,
                    Exit: endDate,
                    Room: rooms.length,
                    totalTravellers
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Something Went Wrong');
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }

        try{
            const response1 = await fetch('https://traveling-website-810b9-default-rtdb.firebaseio.com/products.json')
            if(!response1.ok){
                throw new Error('Your internet connection is slow')
            }
            const data = await response1.json()
            dispatch(Exploreaction.AddtoItem(data))
        }
        catch(error){
            alert(error.message)
        }
    };
    
    return (
        <div>
            <form className="form-container">
                <div className="form-item">
                    <label>City</label>
                    <Select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        displayEmpty
                    >
                        <MenuItem value=""><em>Select place</em></MenuItem>
                        <MenuItem value="Bengaluru">Bengaluru</MenuItem>
                        <MenuItem value="Mumbai">Mumbai</MenuItem>
                        <MenuItem value="New-Delhi">New-Delhi</MenuItem>
                        <MenuItem value="Pune">Pune</MenuItem>
                    </Select>
                </div>
                <div className="form-item">
                    <label>Dates</label>
                    <div>
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
                </div>
                <div className="form-item">
                    <label>Travellers</label>
                    <TextField
                        readOnly
                        value={`${rooms.length} Room(s) - ${rooms.reduce((total, room) => total + room.adults + room.children, 0)} Traveller(s)`}
                        onClick={() => setShowModal(true)}
                    />
                    <RoomModal
                        open={showModal}
                        onClose={() => setShowModal(false)}
                        rooms={rooms}
                        onRoomChange={handleRoomChange}
                        onAddRoom={handleAddRoom}
                        onDeleteRoom={handleDeleteRoom}
                    />
                </div>
                <Button variant="contained" color="primary" onClick={SearchHandler}>Search</Button>
            </form>
        </div>
    );
};

export default Form;
