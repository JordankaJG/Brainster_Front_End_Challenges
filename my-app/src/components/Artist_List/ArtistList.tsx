import "./ArtistList.css";
import artists from "../../db";
import { ArtistI } from "../../interfaces";
import ArtistItem from "../Artist_Item/ArtistItem";

const ArtistList = () => {
  return (
    <div>
      <div className="list_container">
        {artists.map((el) => (
          <div key={el.id}>
            <div>
              <ArtistItem
                cover={el.cover}
                name={el.name}
                id={el.id}
                key={el.id}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ArtistList;
