import { useSelector } from "react-redux";
import './List.css';
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Exploreaction } from "../../Store/explore";


const List = () => {
  const dispatch = useDispatch();
  const Usercity = useSelector((state) => state.history.City);
  const Admincity = useSelector((state) => state.admin.Place);
  const Accommodations = useSelector((state) => state.admin.Explore);
  
  const navigate = useNavigate();
  

  if (!Admincity.includes(Usercity)) {
    return <p>No accommodations available for this city.</p>;
  }

  const matchingAccommodations = Object.entries(Accommodations).flatMap(
    ([, listings]) =>
      Object.values(listings).filter(
        (listing) => listing.City === Usercity
      )
  );

  const BookingHandler = (id) => {
    const stay = matchingAccommodations[id]; 
    if (stay) {
      dispatch(Exploreaction.AddtoBooklist(stay));
      navigate('/Book', { state: { hotelDetails: stay } }); 
    }
  };

  return (
    <div className="list-container">
      <ul className="accommodation-list">
        {matchingAccommodations.length === 0 ? (
          <li>No accommodations available for this city.</li>
        ) : (
          matchingAccommodations.map((listing, index) => (
            <li key={index} className="accommodation-item">
              <div className="image-container">
                {listing.ImageUrls.slice(0, 2).map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt=''
                    className={`accommodation-image image-${i + 1}`}
                  />
                ))}
                {listing.ImageUrls[2] && (
                  <img
                    src={listing.ImageUrls[2]}
                    alt=''
                    className="accommodation-image image-3"
                  />
                )}
              </div>
              <div className="details-container">
                <h3>{listing.Name}</h3>
                <p><span>Address:</span> {listing.Address}</p>
                <p><span>City:</span> {listing.City}</p>
                <p><span>AC:</span> {listing.AC}</p>
                <p><span>Non AC:</span> {listing.NonAc}</p>
                <p><span>Price:</span> {listing.Price}</p>
                <Button type="button" onClick={() => BookingHandler(index)} variant="success" className="sm">Book Now</Button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default List;
