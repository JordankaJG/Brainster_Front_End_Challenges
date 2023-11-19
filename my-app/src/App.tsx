import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Header/Header";
import Filters from "./components/Filters/filters";
import Card from "./components/Card/card";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Filters />
      <Footer />
    </div>
  );
}

export default App;

