import React from "react";
import Header from "../components/Header";
import Showcase from "../components/Showcase";
import Cards from "../components/Cards";
import Trailer from "../components/Trailer";
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Showcase />
      <Cards />
      <Trailer />
      <Footer />
    </div>
  );
};

export default Home;
