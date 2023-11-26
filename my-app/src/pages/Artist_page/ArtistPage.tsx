import { useParams } from "react-router-dom";
import "./ArtistPage.css";
import artists from "../../db";
import { ArtistI } from "../../interfaces";
import { useEffect, useState } from "react";
import AlbumList from "../../components/Album_list/AlbumList";

const ArtistPage = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState<ArtistI>();

  useEffect(() => {
    if (id) {
      const findArtist = artists.find((el) => el.id === +id);
      if (!findArtist) {
        alert("Artist not found");
      } else {
        setArtist(findArtist);
      }

      console.log(findArtist);
    }
  }, [id]);
  return (
    <div className="artistDetailsContainer">
      {artist && (
        <div>
         
          <img className="artist-img" src={`/images/covers/${artist.cover}.jpg`} alt="" />
          <h3> {artist.name}</h3>
          <p>{artist.bio}</p>
          <div> <AlbumList artist = {artist}/></div>
        </div>
      )}
    </div>
  );
};
export default ArtistPage;
