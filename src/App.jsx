import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./navbar";
import CarouselBanner from "./CarouselBanner";
import "bootstrap/dist/css/bootstrap.css";
import Card from "./Card";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <CarouselBanner />
      <div className="d-flex justify-content-between ">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>{" "}
      <br />
      <div className="d-flex justify-content-between ">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default App;
