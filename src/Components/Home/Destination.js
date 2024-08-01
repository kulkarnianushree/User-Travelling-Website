import React from 'react';
import './Destination.css';

const Destination = () => {
  
  const destinations = [
    { id: 1, src: 'https://tse1.mm.bing.net/th?id=OIP.6qUHVlfcTxcVWA2Q7ZO3nQHaFj&pid=Api&P=0&h=180', label: 'Tirumala' },
    { id: 2, src: 'https://tse2.mm.bing.net/th?id=OIP.Rv5kHHMPLD9hkJfxNnE5PwHaKS&pid=Api&P=0&h=180', label: 'Karavirapura' },
    { id: 3, src: 'https://tse2.mm.bing.net/th?id=OIP.JKe48n5SatbQz1rrQ1HN9wHaE8&pid=Api&P=0&h=180', label: 'Ayodhya' },
    { id: 4, src: 'https://tse2.mm.bing.net/th?id=OIP.a3xKN5GO313-w5ZWr9FB7AHaFj&pid=Api&P=0&h=180', label: 'Vridhavana' },
    { id: 5, src: 'https://tse2.mm.bing.net/th?id=OIP.M_4qcZ0w15hIp1M_VzimUgHaEL&pid=Api&P=0&h=180', label: 'Puri' }
  ];



  return (
    <div className="destination-container">
      <div>Trending Destination</div>
      <div>
        <ul className="destination-list">
          {destinations.map((holyplace) => (
            <li key={holyplace.id} className="destination-item" >
              <div className="destination-image" style={{ backgroundImage: `url(${holyplace.src})` }}></div>
              <h3 className="destination-label">{holyplace.label}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Destination;
