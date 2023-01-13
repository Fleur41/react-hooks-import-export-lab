import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Time from "./Time";
import Footer from "./Footer";
// import { Link } from "react-router-dom";
import Links from "./Links";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Time />
      <About />
      <Links />
      <Footer />
    </div>
  );
}

export default App;
