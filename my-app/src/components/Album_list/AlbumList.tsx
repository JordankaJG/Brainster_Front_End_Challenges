import { Link } from "react-router-dom";
import artists from "../../db";
import { ArtistI, ArtistAlbumI } from "../../interfaces";
import "./AlbumList.css";



interface Props {
  artist: ArtistI;
}
const AlbumList = ({ artist }: Props) => {
 const artistAlbums = artist.albums;

  return (
    <div className="album-img-container">
      {artistAlbums.map((el) => (
        <Link key={el.albumId} to={`/artistpage/${artist.id}/${el.albumId}`}>
       
            <img src={`/images/albums/${el.cover}.jpg`} alt="" />
          
        </Link>
      ))}
    </div>
  );
};
export default AlbumList;
