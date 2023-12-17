import { useContext } from "react";
import { CardContext } from "../../context/CardContext";
import Card from "../Restaurant_Card/restaurant_card";

const AllRestaurants = () => {
    const { allRestaurants} = useContext(CardContext);
    console.log(allRestaurants);
    return (
      <div className="row">
    {allRestaurants && allRestaurants.map((item)=>(
<Card {...item} key={item.id}/>
    ))}
      </div>
    );
}
 
export default AllRestaurants;