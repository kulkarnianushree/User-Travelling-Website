import React,{useEffect}from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { Stayaction } from '../../Store/Stay';
const Apartment = () => {
  const dispatch = useDispatch();
  const apartment = useSelector(state => state.stay.Stay.apartment); 

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
      {apartment && Object.values(apartment).map(house => (
        <div key={house.Name}>
          <h2>{house.Name}</h2>
          <p>{house.Address}</p>
          <p>{house.City}</p>
          <p>Price: ₹{house.AC}</p>
          <img src={house.ImageUrls[0]} alt={house.Name} style={{ width: '200px', height: '150px' }} />
          {/* Add more villa details as needed */}
        </div>
      ))}
    </div>
  );

}

export default Apartment