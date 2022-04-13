import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";

const App = () => {
  return (
    <div>
      <NavBar />
      <div style={{ display: "flex" }}>
        <CardFront />
        <CardBack />
      </div>
    </div>
  );
};

export default App;
