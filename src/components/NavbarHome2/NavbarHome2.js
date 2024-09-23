import React from "react";
import styled from "styled-components";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarHome2 = () => {
  return (
    <>
      <Slider>
        <StyledNavbar expand="lg">
          <Container>
            <StyledNavbarBrand href="/">
              <StyledLogo src="/Home1/Main Logo.png" alt="Logo" />
            </StyledNavbarBrand>
            <StyledNavbarToggle aria-controls="basic-navbar-nav" />
            <StyledNavbarCollapse id="basic-navbar-nav">
              <Nav className="me-auto main_menu">
                <Nav.Link href="/home2">Home+</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/service">Service</Nav.Link>
                <Nav.Link href="/gallery">Gallery</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </StyledNavbarCollapse>
          </Container>
        </StyledNavbar>
        <SliderContent>
          <Container>
            <Row>
              <TextCol md={6}>
                <TextSlider1>Your beauty center<br />place</TextSlider1>
                <TextSlider2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing<br />
                  elit. Commodo, massa pellentesque arcu fusce et<br />
                  magna consequat neque vitae lobortis.
                </TextSlider2>
                <MoreDetails>
                  <img src="/Home2/More Details Button.png" alt="More Details" />
                </MoreDetails>
              </TextCol>
              <ImageCol md={6}>
                <img src="/Home2/Play Button.png" alt="play button" />
              </ImageCol>
            </Row>
          </Container>
        </SliderContent>
      </Slider>
    </>
  );
};

// Styled-components for the navbar and the slider
const StyledNavbar = styled(Navbar)`
  background-color: #fff;
  padding: 10px 0;
`;

const StyledNavbarBrand = styled(Navbar.Brand)`
  /* Add styles for brand logo */
`;

const StyledLogo = styled.img`
  width: 100px;
  height: auto;
`;

const StyledNavbarToggle = styled(Navbar.Toggle)`
  /* Add any toggle button styles here */
`;

const StyledNavbarCollapse = styled(Navbar.Collapse)`
  /* Add styles for the collapse behavior */
`;

const Slider = styled.div`
  background-image: url("/Home2/slider-background.png");
  background-size: cover;
  background-position: center;
  padding: 60px 0;
`;

const SliderContent = styled.div`
  padding: 50px 0;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const TextCol = styled.div`
  flex: 1;
  margin-right: 15px;
`;

const TextSlider1 = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
`;

const TextSlider2 = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const MoreDetails = styled.div`
  margin-top: 20px;
`;

const ImageCol = styled.div`
  flex: 1;
  text-align: right;
`;

export default NavbarHome2;
