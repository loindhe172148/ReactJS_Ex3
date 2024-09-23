import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { Container, Col, Button } from "react-bootstrap";

// Footer Component
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <FooterWrapper>
      <Container fluid>
        <FooterSection>
          <Col xs={12} md={6} className="d-flex flex-column align-items-center">
            <FooterLogo src="Home1/Footer Logo.png" alt="Footer Logo" />
            <FooterText1>
              <strong>Beautice</strong> is a Beauty Clinic WordPress Theme.
            </FooterText1>
            <FooterText>Baker Steet 101, NY, United States.</FooterText>
            <FooterTextWrapper>
              <FooterText2>+521 569 8966</FooterText2>

              <FooterText>
                <u>mail@company.com.</u>
              </FooterText>
            </FooterTextWrapper>
          </Col>
          <Col xs={6} md={3} className="footer-list-col">
            <FooterList1>
              <FooterListItem1>Pages</FooterListItem1>
              <FooterListItem className="home-item">
                <FontAwesomeIcon icon={faCaretRight} /> Home
              </FooterListItem>
              <FooterListItem className="about-item">
                <FontAwesomeIcon icon={faCaretRight} /> About
              </FooterListItem>
              <FooterListItem>
                <FontAwesomeIcon icon={faCaretRight} />
                Services
              </FooterListItem>
              <FooterListItem>
                <FontAwesomeIcon icon={faCaretRight} />
                Gallery
              </FooterListItem>
              <FooterListItem>
                <FontAwesomeIcon icon={faCaretRight} />
                Team
              </FooterListItem>
            </FooterList1>
          </Col>
          <Col xs={6} md={3} className="footer-list-col">
            <FooterList>
              <FooterListItem1>Informations</FooterListItem1>
              <FooterListItem>
                <FontAwesomeIcon icon={faCaretRight} />
                Terms & conditions
              </FooterListItem>
              <FooterListItem>
                <FontAwesomeIcon icon={faCaretRight} />
                Privacy policy
              </FooterListItem>
              <FooterListItem>
                <FontAwesomeIcon icon={faCaretRight} />
                Blog
              </FooterListItem>
              <FooterListItem>
                <FontAwesomeIcon icon={faCaretRight} />
                Contact
              </FooterListItem>
            </FooterList>
          </Col>
        </FooterSection>
        <ScrollToTopButton onClick={scrollToTop}>
          <img
            src="Home1/ToTop Button.png"
            alt="Scroll to Top"
            style={{ width: "100%", height: "auto" }}
          />
        </ScrollToTopButton>
        <FooterBottom>
          <SocialMediaIcon src="Home1/Social Media.png" alt="Social Media" />
          <FooterCopy>
            &copy; AltDesain Studio 2021 - All right reserved.
          </FooterCopy>
        </FooterBottom>
      </Container>
    </FooterWrapper>
  );
};
// Styled components
const FooterWrapper = styled.footer`
  background-image: url("Home1/Footer BG.png");
  background-repeat: no-repeat;
  background-size: 100% 100% !important;
  background-position: center;
  padding: 70px 0;
  color: white;
  padding-top: 208px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 1440px) {
  margin-top:67px;
  padding-top: 191px;}
  @media (max-width: 768px) {
    padding: 50px 0;
    padding-top: 120px;
    background-size: contain;
  }

  @media (max-width: 320px) {
    padding: 20px 0;
    padding-top: 100px;
    background-size: cover !important;
  }
`;
const FooterTextWrapper = styled.div`
  display: flex;
  /* Điều chỉnh giá trị gap theo nhu cầu */
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-left: 0;
  margin-top: 10px;

  @media (min-width: 1440px) {
    gap: 46px;
        margin-left: 59px;
        margin-top: -3px;
  }

  @media (max-width: 320px) {
  }
`;

const FooterSection = styled.div`
  margin-top: 31px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    margin-top: 20px;
  }

  @media (max-width: 320px) {
    @media (max-width: 320px) {
      margin-top: 15px;
      flex-direction: row; /* Ensures they are side by side */
      justify-content: space-between; /* Distributes space evenly */
    }
  }
`;

const FooterLogo = styled.img`
  width: 37%;
  margin: 0 auto;
  @media (min-width: 1440px) {
    margin-right: 310px;
    margin-top: 25px;
  }
  @media (max-width: 768px) {
    width: 50%;
  }

  @media (max-width: 320px) {
    width: 60%;
  }
`;
const FooterText1 = styled.p`
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1.6px;
  color: #d7dbff;
  margin-top: 32px;
  line-height: 24px;
  @media (min-width: 1440px) {
    margin-left: 66px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 320px) {
    font-size: 12px;
    text-align: center;
  }
`;
const FooterText2 = styled.p`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1.6px;
  color: #ffffff;
  margin-top: 7px;

  line-height: 21px;
  font-style: italic;
  margin-bottom: 0px;
  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 320px) {
    font-size: 10px;
  }
`;
const FooterText = styled.p`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1.6px;
  color: #ffffff;
  margin-top: 7px;
  margin-right: 86px;
  line-height: 21px;
  font-style: italic;
  margin-bottom: 0px;
  @media (max-width: 768px) {
    font-size: 12px;
    margin-right: 20px;
  }

  @media (max-width: 320px) {
    font-size: 10px;
    margin-right: 0;
    text-align: center;
  }
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  @media (max-width: 768px) {
    margin-left: 30px;
  }

  @media (max-width: 320px) {
    margin-left: 0;
    text-align: center;
  }
`;
const FooterList1 = styled.ul`
  list-style: none;
  padding: 0;
  margin-left: 52px;
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 20px;
  }

  @media (max-width: 320px) {
    font-size: 14px;
    margin: 0px;
  }
`;
const FooterListItem1 = styled.li`
  font-size: 18px;
  color: #ffffff;
  margin-top: 10px;
  font-weight: 600;
  line-height: 27px;
  letter-spacing: 1.8px;
  margin-bottom: 28px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 0px;
  }

  @media (max-width: 320px) {
    font-size: 12px;
    margin-top: 8px;
    text-align: center;
    margin-bottom: 0px;
  }
`;
const FooterListItem = styled.li`
  font-size: 16px;
  color: #d7dbff;
  margin-top: 11px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 1.6px;
  margin-right: 1px;
  margin-left: 4px;
  @media (min-width: 1440px) {
    svg {
    width: 2%;
  }
  &.home-item,
  &.about-item {
    margin-left: 3px; /* Đặt margin cho Home và About */
    svg {
    margin-right: 6px; /* Khoảng cách giữa icon và text */
  }
  }
  }
  svg {
    margin-right: 10px; /* Khoảng cách giữa icon và text */
  }
 
  @media (max-width: 768px) {
    font-size: 11px;
  }
 
  @media (max-width: 320px) {
    font-size: 12px;
    margin-top: 8px;
    text-align: start;
    margin-left: 30px;
  }
`;

const ScrollToTopButton = styled(Button)`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  width: 37px;
  margin: 40px 53px 20px auto; /* Adjusted margin to move button to the right */
  display: flex;
  justify-content: flex-end; /* Ensure the button is aligned to the right */
  align-self: flex-end;
  /* Push the button to the right */
  @media (max-width: 768px) {
    width: 30px;
    margin: 30px 0px 30px auto;
  }

  @media (max-width: 320px) {
    width: 25px;
    margin: 20px 0px 20px auto;
  }
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 37px;
  width: 100%;
  /* Đảm bảo container rộng đầy đủ */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
  }

  @media (max-width: 320px) {
    flex-direction: column;
    margin-top: 10px;
  }
`;

const SocialMediaIcon = styled.img`
  width: 22%;
  max-width: 100%;
  margin-left: 138px;
  margin-top: 2px;
  @media (min-width: 1440px) {
    width: 305px;
    height: 27.84px;
  }
  @media (max-width: 768px) {
    width: 38%;
    margin-left: 0;
  }

  @media (max-width: 320px) {
    width: 40%;
    margin-top: 5px;
  }
`;

const FooterCopy = styled.p`
  font-size: 16px;
  color: white;
  letter-spacing: 1.6px;
  margin-right: 136px;
  text-align: center;
  margin-top: 10px;
  @media (max-width: 768px) {
    font-size: 14px;
    margin-right: 0;
  }

  @media (max-width: 320px) {
    font-size: 12px;
    margin-top: 5px;
  }
`;
export default Footer;
