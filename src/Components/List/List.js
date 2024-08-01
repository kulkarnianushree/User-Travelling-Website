import React from "react";
import { useSelector } from "react-redux";

const List = () => {
    const stays = useSelector(state => state.admin.Explore);
    console.log(stays);

    return (
        <div className="stay-list">
            <h1>Stay List</h1>
            {stays && stays.length > 0 ? (
                stays.map((stay, index) => (
                    <div key={index} className="stay-item">
                        <h2>{stay.Name}</h2>
                        <p><strong>Address:</strong> {stay.Address}, {stay.City}</p>
                        <p><strong>Type:</strong> {stay.Stays}</p>
                        <p><strong>AC Price:</strong> {stay.AC}</p>
                        <p><strong>Non-AC Price:</strong> {stay.NonAc}</p>
                        <p><strong>Total Price:</strong> {stay.Price}</p>
                        <div className="images">
                            {stay.ImageUrls && stay.ImageUrls.map((url, imgIndex) => (
                                <img key={imgIndex} src={url} alt='' />
                            ))}
                        </div>
                    </div>
                ))
            ) : (
                <p>No stays available.</p>
            )}
        </div>
    );
};

export default List;
