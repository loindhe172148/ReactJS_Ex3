import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap"; // Bootstrap components

const ProfessionalTeamsComponent = () => (
  <StyledContainer>
    <Heading>Professional Teams</Heading>
    <Subheading>The Professional expert</Subheading>
    <Description>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
    </Description>
    <Row className="justify-content-center ">
    <TeamMemberLeft as={Col} xs={12} md={4} className="mb-4">

          <img src="Home1/unsplash_pTrhfmj2jDA.png" alt="Surgeon" />
          <h1>Surgeon</h1>
          <h2>Briyan Nevalli</h2>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit ut
            <br /> aliquam, purus sit
          </p>
          <Lienlac>
            <img src="Home1/Social Media (1).png" alt="" />
          </Lienlac>
        </TeamMemberLeft>

        <TeamMember as={Col} xs={12} md={4} className="mb-4">

          <img src="Home1/unsplash_FVh_yqLR9eA.png" alt="Dermatologist" />
          <h1>Dermatologist</h1>
          <h2>Bella sebastian</h2>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit ut
            <br /> aliquam, purus sit
          </p>
          <Lienlac>
            <img src="Home1/Social Media (1).png" alt="" />
          </Lienlac>
        </TeamMember>

    
        <TeamMemberRight as={Col} xs={12} md={4} className="mb-4">

          <img src="Home1/unsplash_mEZ3PoFGs_k.png" alt="Stylist expert" />
          <h1>Stylist expert</h1>
          <h2>Lilly Adams</h2>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit ut
            <br /> aliquam, purus sit
          </p>
          <Lienlac>
            <img src="Home1/Social Media (1).png" alt="" />
          </Lienlac>
        </TeamMemberRight>

    </Row>
  </StyledContainer>
);
// Styled components
const StyledContainer = styled(Container)`
  margin-top: 4px;
  padding: 68px 15px;
  min-height: 100vh;
  @media (max-width: 768px) {
    padding: 0px;
    margin-left: 10px;
    margin-right: 10px;
  }
  @media (max-width: 320px) {
    padding: 0px;
    margin: 0px;
  }
  @media (min-width: 1440px) {
    padding: 68px 0;
  }
`;

const Heading = styled.h1`
  color: #ff64ae;
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Subheading = styled.h2`
  color: #091156;
  font-size: 36px;
  margin-top: 12px;
  font-weight: 600;
  text-align: center;
  line-height: 45px;

  @media (max-width: 768px) {
    font-size: 33.5px;
  }
`;

const Description = styled.p`
  color: #8b8b8b;
  font-size: 16px;
  margin-top: 19px;
  letter-spacing: 1.6px;
  text-align: center;
  font-weight: 400;
  line-height: 24px;

  @media (max-width: 768px) {
    font-size: 15px;
  }
  @media (max-width: 425px) {
    margin-bottom: 30px;
  }
`;

const TeamMember = styled(Col)`
  text-align: center;
  background-color: #fff;
  border-radius: 42px;
  padding: 20px 0px 60px 0px;
  width: 100%; /* Full width on smaller screens */
  max-width: 400px; /* Restrict max-width for better readability */
  margin-top: 50px;
  &:hover {
    /* Apply both transform and box-shadow on hover */
    transform: scale(1.05);
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  width: 95%;
  img {
    width: 36%;
    max-width: 100%;
    margin-bottom: 15px;
    margin-top: 71px;
  }

  h1 {
    color: #ff64ae;
    font-size: 16px;
    line-height: 20px;
    margin-top: 38px;
    font-weight: 600;
    align-items: center;
    text-align: center;
  }

  h2 {
    color: rgb(9, 17, 86);
    font-size: 18px;
    line-height: 22.5px;
    margin-top: 14px;
    font-weight: 600;
    align-items: center;
    text-align: center;
  }

  p {
    color: #8b8b8b;
    font-size: 14px;
    letter-spacing: 1.4px;
    line-height: 21px;
    margin-top: 22px;
    font-weight: 400;
    align-items: center;
    text-align: center;
  }

  @media (max-width: 768px) and (min-width: 321px) {
    padding: 0px;
    margin: auto;
    box-shadow: 0px 0px 50px 25px #f6f7ff;
    margin-top: 50px;

    br {
      display: none;
    }
    img {
      width: 46%;
      margin: 0px;
      margin-top: 30px;
    }

    h1 {
      font-size: 15px;
      margin-top: 10px;
    }

    h2 {
      font-size: 17px;
      margin-top: 10px;
    }

    p {
      font-size: 14px;
      margin-top: 10px;
    }
  }
  @media (min-width: 1440px) {
    margin-top: 100px;
  }

  
  @media (max-width: 320px) {
    padding: 0px;
    margin: 0;
    box-shadow: none;
    margin-top: 30px;
    padding-right: 0px !important;
    max-width: 280px; /* Shrink the card size on 320px */
    width: 100%; /* Ensure it takes full width of the screen */

    img {
      width: 40%; /* Reduce the size of the image further */
    }
    img {
      margin-top: 20px;
    }

    h1 {
      font-size: 14px;
      margin-top: 8px;
    }

    h2 {
      font-size: 16px;
      margin-top: 8px;
    }

    p {
      font-size: 14.5px;
      margin-top: 8px;
      line-height: 18px;
    }
  }
`;
// Custom styles for the left and right TeamMember components
const TeamMemberLeft = styled(TeamMember)`
  @media (min-width: 1440px) {
    margin-left: -7px;
        margin-right: 7px;

  }
  @media (max-width: 320px) {
    padding-right: 0px;
  }
`;

const TeamMemberRight = styled(TeamMember)`
  @media (min-width: 1440px) {
    margin-left: 6px;
    margin-right: -6px;
  }
  @media (max-width: 425px) {
    padding-right: 0px;
  }
`;
const Lienlac = styled.div`
  img {
    margin-top: 24px;
    width: 61%;
    max-width: 100%; // Adjust size as needed
    height: auto;
  }
  @media (max-width: 768px) {
    margin-top: 10px;
    width: 100%;
  }
`;

export default ProfessionalTeamsComponent;
