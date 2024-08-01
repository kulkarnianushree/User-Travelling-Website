import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Explore.css';

const Explore = () => {
    const navigate = useNavigate();
    const images = [
        { id: 1, src: 'https://images.pexels.com/photos/261101/pexels-photo-261101.jpeg?auto=compress&cs=tinysrgb&w=600', label: 'Villa' },
        { id: 2, src: 'https://tse4.mm.bing.net/th?id=OIP.0jHG5ypYzSVqBAQ1_QY7agHaE8&pid=Api&P=0&h=180', label: 'House Boats' },
        { id: 3, src: 'https://2.bp.blogspot.com/-lSnHcuHJJWM/WD9pG-bIVeI/AAAAAAAAAOg/pxlMGhQi10gXxG0qKBNuU8vw5_jRIKteACLcB/s1600/first.jpg', label: 'Spa' },
        { id: 4, src: 'https://tse2.mm.bing.net/th?id=OIP.kMv6A0yW71j3z1tRpWxXjgHaE6&pid=Api&P=0&h=180', label: 'Apartment' },
        { id: 5, src: 'https://5.imimg.com/data5/HD/QX/GLADMIN-61564567/form-house.png', label: 'Farm House' }
    ];

    const ImageHandler = (label) => {
        if (label === 'Villa') {
            navigate('/Villas');
        } 
        else if (label === 'House Boats') {
            navigate('/HouseBoat');
        } else if (label === 'Spa') {
            navigate('/Spa');
        } else if (label === 'Farm House') {
            navigate('/Farmhouse');
        } else if (label === 'Apartment') {
            navigate('/Appartment');
        }
    };

    return (
        <div className="explore-container">
            <div>Discover Your New Favourite Stay</div>
            <ul className="explore-list">
                {images.map((img) => (
                    <li key={img.id} className="explore-item" onClick={() => ImageHandler(img.label)}>
                        <div className="explore-image" style={{ backgroundImage: `url(${img.src})` }}></div>
                        <h3 className="explore-label">{img.label}</h3>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Explore;
