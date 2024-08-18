import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import './Recent.css';

const Recent = () => {
    const dispatch = useDispatch();
    const history = useSelector(state => state.history?.history || []); // Default to empty array
    const [selectedCity, setSelectedCity] = useState('');

    useEffect(() => {
        const fetchSearchHistory = async () => {
            try {
                const response = await fetch('https://travelling-user-default-rtdb.firebaseio.com/Search.json');
                if (!response.ok) {
                    throw new Error('Something Went Wrong');
                }
                const data = await response.json();
                console.log('Fetched Data:', data);
                const dataArray = Object.keys(data).map(key => ({
                    ...data[key],
                    id: key
                }));

                console.log('Data Array:', dataArray); // Debugging line
            } catch (error) {
                console.error(error);
            }
        };

        fetchSearchHistory();
    }, [dispatch, selectedCity]);

    return (
        <div className="recent-container">
            <h2 className="recent-title">Your Recent Search</h2>
            <div>
                <label>Select City:</label>
                <select value={selectedCity} onChange={e => setSelectedCity(e.target.value)}>
                    <option value="">All Cities</option>
                    {history.map((item, index) => (
                        <option key={index} value={item.city}>
                            {item.city}
                        </option>
                    ))}
                </select>
            </div>
            <div className="recent-grid">
                {history.length > 0 ? (
                    history.map((item, index) => (
                        <div key={index} className="recent-item">
                            <strong>City:</strong> {item.city} <br />
                            <strong>Check-in:</strong> {item.Enter} <br />
                            <strong>Check-out:</strong> {item.Exit} <br />
                            <strong>Rooms:</strong> {item.Room} <br />
                            <strong>Total Travellers:</strong> {item.totalTravellers}
                        </div>
                    ))
                ) : (
                    <div className="recent-item">No search history available.</div>
                )}
            </div>
        </div>
    );
};

export default Recent;
