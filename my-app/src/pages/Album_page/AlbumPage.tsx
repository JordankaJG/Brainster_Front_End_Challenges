import { useParams } from "react-router-dom";
import { ArtistAlbumI } from "../../interfaces";

import "./AlbumPage.css";
import { useEffect, useState } from "react";
import artists from "../../db";

const AlbumPage = () => {
  const { id, albumId } = useParams();
  const [album, setAlbum] = useState<ArtistAlbumI>();

  useEffect(() => {
    const filteredArtist = artists.find((el) => el.id.toString() === id);
    if (albumId) {
      const filteredAlbum = filteredArtist?.albums.find(
        (el) => el.albumId === albumId
      );
      setAlbum(filteredAlbum);
    }
  }, [id, albumId]);

  return (
    <div className="album_page">
      {album && (
        <div>
          <img src={`/images/albums/${album.cover}.jpg`} alt="" />
          <h3>
            Title:
            <span>{album.title}</span>
          </h3>
          <h3>
            Year: <span>{album.year}</span>
          </h3>
          <h3>
            Price:
            <span>{album.price} $</span>
          </h3>
        </div>
      )}
    </div>
  );
};
export default AlbumPage;
