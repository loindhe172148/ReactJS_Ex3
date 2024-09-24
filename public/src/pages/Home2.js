import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home2Components from "../components/Home2Components/Home2Components";

const Home2 = () => {
  return (
    <>
      <Header page="home2" />
      <main>
        <Home2Components />
      </main>

      <Footer />
    </>
  );
};

export default Home2;
