import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import AboutComponents from "../components/AboutComponents/AboutComponents";

const About = () => {
  return (
    <>
      <Header page="about" />
      <main>
        <AboutComponents />
      </main>
      <Footer />
    </>
  );
};

export default About;
