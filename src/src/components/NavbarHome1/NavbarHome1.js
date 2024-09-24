import React from "react";
import styled from "styled-components";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarHome1 = () => {
  return (
    <>
      <Slider>
        <StyledNavbar expand="lg">
          <Container >
            <StyledNavbarBrand href="/">
              <StyledLogo src="/Home1/Main Logo.png" alt="Logo" />
            </StyledNavbarBrand>
            <StyledNavbarToggle aria-controls="basic-navbar-nav" />
            <StyledNavbarCollapse id="basic-navbar-nav">
              <Nav className="me-auto main_menu">
                <Home1Link href="/home2">Home+</Home1Link>
                <Home2Link href="/about">About</Home2Link>
                <Home3Link href="/service">Service</Home3Link>
                <Home4Link href="/gallery">Gallery</Home4Link>
                <Home5Link href="/blog">Blog</Home5Link>
                <Home6Link href="/contact">Contact</Home6Link>
              </Nav>
            </StyledNavbarCollapse>
          </Container>
        </StyledNavbar>

        {/* Main Header */}
        <MainHeader>
          <Container >
            <div className="row">
              <HeaderLeft className="col-lg-6 col-md-12">
                <ClinicHeading>
                  Clinic & beauty
                  <br />
                  consultant
                </ClinicHeading>
                <NoteClinic>
                  It is a long established fact that a reader will be <br />
                  by the readable content of a page.
                </NoteClinic>
                <MoreDetailLink href="#MoreDetails">
                  More Details
                </MoreDetailLink>
              </HeaderLeft>
              <HeaderRight className="col-lg-6 col-md-12">
                <ClinicImage
                  className="img-fluid anh2"
                  src="/Home1/Frame 1.png"
                  alt="Clinic frame"
                />
              </HeaderRight>
            </div>
          </Container>
        </MainHeader>
      </Slider>
      <SliderButton id="sliderbt" className="text-center mt-3">
        <img
          className="img-fluid"
          src="/Home1/Slide Button.png"
          alt="Slider button"
        />
      </SliderButton>
    </>
  );
};

// Styled Components
const StyledNavbar = styled(Navbar)`
@media (min-width: 1440px) {
    padding: 20px;
    padding-top: 29px;
    margin-left: 114px;
  }
  @media (min-width: 769px) {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    padding-top: 29px;
  }
  @media (max-width: 320px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledNavbarBrand = styled(Navbar.Brand)`
  flex: 1;
  display: flex;
  align-items: center;
`;
const StyledNavbarToggle = styled(Navbar.Toggle)`
  @media (max-width: 320px) {
    margin-left: auto;
    display: flex;
    align-items: center;
  }
`;

const StyledNavbarCollapse = styled(Navbar.Collapse)`
  @media (max-width: 320px) {
    flex-basis: 100%;
  }
`;

const StyledLogo = styled.img`
  @media (min-width: 769px) {
    margin-top: 6px;
  }
  @media (max-width: 320px) {
    height: 100%;
    width: 100%;
  }
`;

const Home1Link = styled(Nav.Link)`
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1.6px;
  color: #414880 !important;
  @media (min-width: 1440px) {
    margin-top: 6px;
    margin-left: 167px;
  }
  @media (min-width: 769px) {
    text-align: center;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Home2Link = styled(Nav.Link)`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1.6px;
  color: #8b8b8b;
  @media (min-width: 769px) {
    margin-top: 5px;
  }
  @media (min-width: 1440px) {
    margin-top: 5px;
    margin-left: 29px;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Home3Link = styled(Nav.Link)`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1.6px;
  color: #8b8b8b;
  @media (min-width: 769px) {
    margin-top: 5px;
    margin-left: 27px;
  }
  @media (min-width: 1440px) {
    margin-top: 5px;
    margin-left: 27px;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Home4Link = styled(Nav.Link)`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1.6px;
  color: #8b8b8b;
  @media (min-width: 769px) {
    margin-top: 5px;
    margin-left: 30px;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Home5Link = styled(Nav.Link)`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1.6px;
  color: #8b8b8b;
  @media (min-width: 769px) {
    margin-top: 6px;
    margin-left: 31px;
  }
  @media (max-width: 768px) {
    text-align: center;
  }
`;

// Styled-component for .contact_button
const Home6Link = styled(Nav.Link)`
  text-decoration: none;
  border-radius: 50px;
  font-size: 17px;
  letter-spacing: 1.5px;
  display: inline-block;
  @media (min-width: 769px) {
    margin-left: 43px;
    background-color: #ff64ae;
    padding: 12px 40px 15px 40px !important;
    color: white;
  }
  @media (max-width: 768px) {
    color: #8b8b8b;
    text-align: center;
  }
`;
// Wrapper for the entire slider
const Slider = styled.div`
  background-image: url("/Home1/Slide Background.png");
  background-repeat: no-repeat;
  background-size: 88% 100%;
  height: 100%;
  width: 100%;
`;

// Main header container
const MainHeader = styled.div`
  @media (min-width: 769px) and (max-width: 1439px) {
    margin-top: 50px; /* Giảm margin để phù hợp với màn hình nhỏ hơn */
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: space-between; /* Tạo khoảng cách giữa các phần tử */
    gap: 30px; /* Giảm khoảng cách giữa các phần */
  }

  @media (min-width: 1440px) {
    margin-top: 181px;
    margin-left: 177px;
    display: flex;
    justify-content: center;
    gap: 50px; /* Giữ nguyên khoảng cách giữa các phần ở màn hình 1440px */
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 20px; /* Khoảng cách giữa các phần nhỏ hơn */
  }
`;

// Header left section
const HeaderLeft = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media (min-width: 769px) and (max-width: 1439px) {
    text-align: left; /* Đảm bảo văn bản căn trái cho màn hình nhỏ hơn */
  }

  @media (min-width: 1440px) {
    /* Giữ nguyên cấu trúc cho màn hình 1440px */
    text-align: left;
  }
`;

// Header right section
const HeaderRight = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media (min-width: 769px) and (max-width: 1439px) {
    justify-content: flex-end;
    align-items: flex-end; /* Đẩy phần hình ảnh về bên phải */
  }

  @media (min-width: 1440px) {
    /* Giữ nguyên cấu trúc cho màn hình 1440px */
    justify-content: center;
    align-items: center;
  }
`;

// Heading for the clinic
const ClinicHeading = styled.h1`
  font-size: 48px;
  line-height: 60px;
  font-weight: 600;
  color: #091156;
  @media (max-width: 768px) and (min-width: 321px) {
    margin-top: 100px;
    text-align: center;
  }
  @media (max-width: 320px) {
    margin-top: 50px;
    text-align: center;
  }
`;

// Paragraph below the clinic heading
const NoteClinic = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #091156;
  letter-spacing: 1.6px;
  @media (min-width: 769px) {
    margin-bottom: 48px;
  }
  @media (max-width: 768px) and (min-width: 321px) {
    margin-top: 50px;
    text-align: center;
  }
  @media (max-width: 320px) {
    margin-top: 50px;
    text-align: center;
  }
`;

// Link for more details button
const MoreDetailLink = styled.a`
  padding: 16px 40px 19px 40px;
  font-size: 16px;
  text-decoration: none;
  border-radius: 50px;
  background-color: rgb(255, 100, 174);
  color: white;
  letter-spacing: 2px;
  @media (min-width: 769px) {
  }
  @media (max-width: 768px) {
    margin-top: 50px;
  }
  @media (max-width: 320px) {
  }
`;

// Clinic image
const ClinicImage = styled.img`
  width: 635px;
  max-width: 100%;
  @media (min-width: 1440px) {
    margin-top: -58px;
    margin-left: -138px;
  }
  @media  (max-width: 768px) {
    display: flex;
    align-items: center;
    margin-top: 100px;
  }
`;

// Styled slider button
const SliderButton = styled.div`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  @media (min-width: 769px) {
    padding-top: 107px;
  }
  @media (max-width: 768px) and (min-width: 321px) {
    padding-top: 50px;
  }
  @media (max-width: 320px) {
    padding-top: 57px;
    margin-top: 50px;
  }
  img {
    width: 68px;
    max-width: 100%;
  }
`;

export default NavbarHome1;
