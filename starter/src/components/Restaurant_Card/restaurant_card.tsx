import { RestaurantI } from "../../interfaces/interfaces";
import { Link } from "react-router-dom";

const Card = ({
  id,
  image,
  businessname,
  restauranttype,
  reviews,
}: RestaurantI) => {
  return (
    <Link to={`/restaurant_detail/${id}`} className=" col-3 p-0 card_det">
      <div className=" card me-3 mb-3">
        <img src={image} alt="" className="card-img-top " />
        <div className="p-2">
      
          <h5 className="fw-bold">{businessname}</h5>
          <h6 className="text-danger">{restauranttype}</h6>
          <p>Rating</p>
          <p>Based on {reviews} reviews</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
