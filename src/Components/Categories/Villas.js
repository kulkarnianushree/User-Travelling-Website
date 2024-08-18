import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Stayaction } from '../../Store/Stay';

const Villas = () => {
  const dispatch = useDispatch();
  const Villas = useSelector(state => state.stay.Stay.villas); 

  useEffect(() => {
    const FetchItems = async () => {
      try {
        const response = await fetch('https://traveling-website-810b9-default-rtdb.firebaseio.com/products.json');
        if (!response.ok) {
          throw new Error('Something Went Wrong');
        }
        const data = await response.json();
        dispatch(Stayaction.SetStay(data));
      } catch (error) {
        alert(error.message);
      }
    };
    FetchItems();
  }, [dispatch]);

  return (
    <div>
      {Villas && Object.values(Villas).map(villa => (
        <div key={villa.Name}>
          <h2>{villa.Name}</h2>
          <p>{villa.Address}</p>
          <p>{villa.City}</p>
          <p>Price: ₹{villa.AC}</p>
          <img src={villa.ImageUrls[0]} alt={villa.Name} style={{ width: '200px', height: '150px' }} />
          {/* Add more villa details as needed */}
        </div>
      ))}
    </div>
  );
};

export default Villas;
