import React from "react";
import "./App.css";
import Navbar from "./components/NavBar/navbar";
import Footer from "./components/Footer/footer";
import { CardPovider } from "./context/CardContext";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/HomePage/Home";

const App = () => {
  return (
    <div className="App">
      <CardPovider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
        </Routes>
        <Footer />
      </CardPovider>
    </div>
  );
};

export default App;
