import ArtistList from "../Artist_List/ArtistList";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <h2>Browse the artist</h2>
      <ArtistList />
    </div>
  );
};
export default Home;
