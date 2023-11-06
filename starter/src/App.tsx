import Banner from "./components/banner/banner";
import DetailsBlock from "./components/details-block/details-block";
import Footer from "./components/footer/footer";
import PlacesContainer from "./components/places-container/places-container";
import "./css/main.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Banner />
      <DetailsBlock
        header="Stories of Adventure"
        imagePath="https://picsum.photos/id/191/2560/1707"
      />
      <PlacesContainer/>
      <DetailsBlock
        header="Popular Adventures"
        imagePath="https://picsum.photos/id/229/2300/1533"
      />
    <Footer/>


    </div>
  );
};

export default App;
