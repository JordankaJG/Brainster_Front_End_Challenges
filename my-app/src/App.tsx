import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Nav_Bar/NavBar";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home_page/home";
import ArtistList from "./pages/Artist_List/ArtistList";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
