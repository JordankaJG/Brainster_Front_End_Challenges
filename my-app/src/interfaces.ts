export interface ArtistI {
  id: number;
  name: string;
  cover: string;
  bio: string;
  albums: ArtistAlbumI[]
}


export interface ArtistAlbumI {
  albumId: string;
  cover: string;
  price: number;
  title: string;
  year: number;
}
