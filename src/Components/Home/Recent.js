import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Recentaction } from "../../Store/recent";
import './Recent.css';

const Recent = () => {
    const dispatch = useDispatch();
    const history = useSelector(state => state.history.history);

    useEffect(() => {
        const fetchSearchHistory = async () => {
            try {
                const response = await fetch('https://travelling-user-default-rtdb.firebaseio.com/Search.json');
                if (!response.ok) {
                    throw new Error('Something Went Wrong');
                }
                const data = await response.json();

                // Convert object to array if necessary
                const dataArray = Array.isArray(data) ? data : Object.keys(data).map(key => data[key]);

                console.log('Fetched Data Array:', dataArray); // Debugging line
                dispatch(Recentaction.setHistory(dataArray));
            } catch (error) {
                console.error(error);
            }
        };

        fetchSearchHistory();
    }, [dispatch]);

    return (
        <div className="recent-container">
            <h2 className="recent-title">Your Recent Search</h2>
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
