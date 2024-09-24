import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home2Components from "../components/Home2Components/Home2Components";
import styled from "styled-components";
const Home2 = () => {
  return (
    <>
      <Header page="home2" />
      <main>
        <Home2Components />
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
`;
export default Home2;
