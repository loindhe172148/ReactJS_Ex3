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
    <Row className="justify-content-center g-4">
      <Col md={4} className="mb-4">
        <TeamMemberLeft className="team-member-left">
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
      </Col>
      <Col md={4} className="mb-4">
        <TeamMember>
          <img src="Home1/unsplash_FVh_yqLR9eA.png" alt="Dermatologist" />
          <h1>Dermatologist</h1>
          <h2>Bella Sebastian</h2>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit ut
            <br /> aliquam, purus sit
          </p>
          <Lienlac>
            <img src="Home1/Social Media (1).png" alt="" />
          </Lienlac>
        </TeamMember>
      </Col>
      <Col md={4} className="mb-4">
        <TeamMemberRight className="team-member-right">
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
      </Col>
    </Row>
  </StyledContainer>
);

// Styled components
const StyledContainer = styled(Container)`
  margin-top: 4px;
  padding: 68px 15px;

  @media (max-width: 768px) {
    padding:  0px;
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
`;

const TeamMember = styled.div`
  margin-left: 11px;
  text-align: center;
  background-color: #fff;
  border-radius: 42px;
  padding: 20px 0px 60px 0px;
  transition: box-shadow 0.3s ease;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  margin-top: 100px;
  &:hover {
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

  @media (max-width: 768px) {
    padding: 0px;
    box-shadow: 0px 0px 50px 25px #f6f7ff;
    
br{
  display: none;
}
    img {
      width: 46%;
      margin: 0px;
      margin-top: 10px;
    }

    h1 {
      font-size: 15px;
      margin-top: 0px;
    }

    h2 {
      font-size: 17px;
      margin-top: 0px;
    }

    p {
      font-size: 15.5px;
      margin-top: 0px;
    }
  }
  @media (max-width: 320px) {
    padding: 0px;
    padding-top: 10px;
    box-shadow: 0px 0px 50px 25px #f6f7ff;
    margin: 0px;

    img {
      width: 46%;
      margin: 0px;
    }

    h1 {
      font-size: 15px;
      margin-top: 0px;
    }

    h2 {
      font-size: 17px;
      margin-top: 0px;
    }

    p {
      font-size: 15.5px;
      margin-top: 0px;
    }
  }
`;
// Custom styles for the left and right TeamMember components
const TeamMemberLeft = styled(TeamMember)`
  @media (min-width: 1440px) {
    margin-left: 52px;
    margin-right: -52px;
  }
`;

const TeamMemberRight = styled(TeamMember)`
  @media (min-width: 1440px) {
    margin-left: -30px;
    margin-right: 30px;
  }
`;
const Lienlac = styled.div`
  img {
    margin-top: 24px;
    width: 57%;
    max-width: 100%; // Adjust size as needed
    height: auto;
  }
`;
export default ProfessionalTeamsComponent;
