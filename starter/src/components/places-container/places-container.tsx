import { useEffect, useState } from "react";
interface Place {
  id?: number;
  place: string;
  desc: string;
  img: string;
}
const PlacesContainer = () => {
  const [places, setPlaces] = useState<Array<Place>>();

  useEffect(() => {
    fetch("http://localhost:5001/places")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPlaces(data);
      });
  }, []);

  return (
    <div className="placesContWrapper">
      <div className="placeContainer">
        {places?.map((place) => {
          return (
            <div className="imgDiv">
              <img src={place.img} alt="" />
              <div className="overlay"></div>
              <div className="textImg">
                <h3>{place.place}</h3>
                <p>{place.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlacesContainer;
