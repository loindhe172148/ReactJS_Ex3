import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home1Components from "../components/Home1Components/Home1Component";
import styled from "styled-components";

const Home1 = () => {
  return (
    <>
      <Header page="home1" />
      <main>
        <Home1Components />
      </main>
      <Footerbg>

      <Footer />
      </Footerbg>
    </>
  );
};
const Footerbg = styled.div`
  background-image: url("Home1/Bottom BG.png");
  background-repeat: no-repeat;
  background-size: auto;
  background-position: center bottom;
  width: auto;
  
  height: auto;
  background-size: 100% 35%;
  box-sizing: border-box;
`
export default Home1;
