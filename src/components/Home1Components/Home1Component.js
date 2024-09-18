import React from "react";
import CoreServices from "./CoreServicesComponent";
import AboutUs from "./AboutUsComponent";
import ProfessionalTeams from "./ProfessionalTeamsComponent";
import ContactUs from "./ContactUsComponent";
import styled from "styled-components";

const Home1Component = () => (
  <div>
    <CoreAbout>
      <CoreServices />
      <AboutUs />
    </CoreAbout>
    <Pro>
    <ProfessionalTeams />

    <ContactUs />
    </Pro>
  </div>
);
const CoreAbout = styled.div`
  background-image: url("/Home1/Background Bubble.png");
  background-size: 62% 58%;
  background-position-x: 100%;
  background-position-y: 98%;
  background-repeat: no-repeat;
 
`;
const Pro = styled.div`
  background-image: url("/Home1/123.png");
  background-size: 100% 60%;
  background-position-x: 100%;
  background-position-y: 110%;
  background-repeat: no-repeat;

`;
export default Home1Component;
