import { link } from "fs";
import { ArtistI } from "../../interfaces";
import "./ArtistItem.css";
import { Link } from "react-router-dom";

interface Props {
  cover: string;
  name: string;
  id:number;
}

const ArtistItem = ({ name, cover ,id}: Props) => {
  return (
    <Link to={`/artistpage/${id}`}>
      <div className="item_container">
        <div className="image_container">
          <img src={`images/covers/${cover}.jpg`} alt="" />
        </div>

        <div className="artist_name">
          <span>{name}</span>
        </div>
      </div>
    </Link>
  );
};
export default ArtistItem;
