import React from "react";
import styled from "styled-components";

const ContactUsComponent = () => (
  <Container className="container my-5">
    <div className="row">
      <div className="col-lg-6 col-md-12">
        <ContactImage
          src="Home1/Contact Animations.png"
          alt=""
          className="img-fluid"
        />
      </div>
      <div className="col-lg-6 col-md-12">
        <TextBox>
          <Heading id="contactus">Contact us</Heading>
          <Subheading id="sendyour">
            Send your Inquiry to <br />
            our expert team
          </Subheading>
          <Description id="loremipsum">
            Lorem ipsum dolor sit amet nulla turapis tellus.
          </Description>
          <form id="action">
            <NameWrapper>
              <FormInput1
                id="first"
                type="text"
                name="FirstName"
                placeholder="First Name"
              />
              <FormInput2
                id="last"
                type="text"
                name="LastName"
                placeholder="Last Name"
              />
            </NameWrapper>
            <FormInput3
              id="email"
              type="text"
              name="EmailAddress"
              placeholder="Email address"
              className="wide"
            />
            <FormInput4
              id="subject"
              type="text"
              name="SubjectMessage"
              placeholder="Subject message"
              className="wide"
            />
            <FormInput5
              id="your"
              type="text"
              name="YourInquiryHere"
              placeholder="Your inquiry here"
            />
            <SubmitButton id="submit" type="submit" value="Send Message" />
          </form>
        </TextBox>
      </div>
    </div>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; // Center horizontally
  align-items: center; // Center vertically
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column; // Stack elements vertically on smaller screens
    justify-content: center; // Center horizontally
    align-items: center; // Center vertically
    margin-top: 0px !important;
    margin-left: 25px;
    margin-right: 10px;
  }
  @media (max-width: 320px) {
    flex-direction: column; // Stack elements vertically on smaller screens
    justify-content: center; // Center horizontally
    align-items: center; // Center vertically
    margin-top: 0px !important;
    margin-left: 0px;
    margin-right: 0px;
  }
`;

const ContactImage = styled.img`
  max-width: 100%;

  @media (min-width: 1440px) {
    width: 84%;
    padding-top: 161px;
    margin-left: 69px;
  }

  @media (max-width: 768px) {
    width: 100%; // Reduce the image size to 80% of its container
    margin: 0 auto 20px;
  }

  @media (max-width: 320px) {
    width: 100%; // Further reduce image size for very small screens
    margin: 0 auto; // Ensure it's centered
  }
`;

const TextBox = styled.div`
  @media (min-width: 1440px) {
    margin-top: -4px;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start; // Left-align on larger screens

  @media (max-width: 768px) {
    align-items: center; // Center-align on smaller screens
    text-align: center; // Center the text content
    width: 100%; // Make sure the box takes full width on smaller screens
  }
`;

const Heading = styled.h1`
  color: rgb(255, 100, 174);
  font-size: 16px;
  margin-top: 9px;
  font-weight: 600;
  margin-left: 39px;
  line-height: 20px;
  @media (max-width: 768px) {
    font-size: 21px;
    margin-left: 0px;
  }
`;

const Subheading = styled.h2`
  color: rgb(9, 17, 86);
  font-size: 34px;
  margin-top: 1px;
  margin-left: 39px;
  line-height: 36px;
  font-weight: 600;
  line-height: 48px;

  @media (min-width: 768px) {
    font-size: 36px;
    line-height: 48px;
  }
  @media (max-width: 768px) {
    margin-left: 0px;
  }
`;

const Description = styled.p`
  color: rgb(139, 139, 139);
  font-size: 16px;
  letter-spacing: 1.6px;
  margin-bottom: 30px;
  margin-top: 8px;
  margin-left: 39px;
  font-weight: 400;
  @media (max-width: 768px) {
    font-size: 17px;
    margin-bottom: 49px;
    margin-left: 0px;
  }
`;

const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
  margin-left: 38px;
  @media (min-width: 1025px) {
    flex-direction: row;
  }
  @media (max-width: 768px) {
    margin-left: 0px;
    margin-right: 0px;
    gap: 0px;
  }
`;

const FormInput1 = styled.input`
  box-sizing: border-box;
  border: 1px solid #d9ddfe;
  border-radius: 15px;
  margin-bottom: 20px;
  color: lightgray;
  font-size: 16px;
  letter-spacing: 1.6px;
  max-width: 100%;
  font-weight: 400;
  line-height: 24px;
  @media (min-width: 1440px) {
    width: 242.21px;
    height: 61.58px;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
  padding: 21px 33px 21px 23px;
  margin-top: 16px;
  @media (max-width: 320px) {
    margin-left: 0px;
    margin-right: 0px;
    margin: 20px 0px;
  }
  @media (max-width: 1024px) and (min-width: 426px) {
    width: 100%;
    margin: 20px 0px;
  }
`;

const FormInput2 = styled.input`
  box-sizing: border-box;
  border: 1px solid #d9ddfe;
  border-radius: 15px;
  padding: 21px 33px 21px 23px;
  margin-bottom: 20px;
  color: lightgray;
  font-size: 15px;
  letter-spacing: 1px;
  max-width: 100%;
  font-size: 16px;
  letter-spacing: 1.6px;
  width: 100%;
  font-weight: 400;
  line-height: 24px;
  padding: 21px 33px 21px 23px;
  margin-top: 16px;
  @media (min-width: 1440px) {
    width: 242.21px;
    height: 61.58px;
  }
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 320px) {
    margin-left: 0px;
    margin-right: 0px;
    margin: 20px 0px;
  }
  @media (max-width: 1024px) and (min-width: 426px) {
    width: 100%;
    margin: 20px 0px;
  }
`;

const FormInput3 = styled.input`
  box-sizing: border-box;
  border: 1px solid #d9ddfe;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 20px;
  color: lightgray;
  font-size: 15px;
  letter-spacing: 1px;
  max-width: 100%;
  font-size: 16px;
  letter-spacing: 1.6px;
  font-weight: 400;
  line-height: 24px;
  padding: 21px 33px 21px 23px;
  @media (max-width: 768px) {
    margin-right: 20px;
    margin-bottom: 30px;
  }
  margin-top: 19px;
  margin-left: 38px;
  padding: 21px 33px 21px 23px;
  @media (min-width: 1440px) {
    width: 520px;
    height: 61.58px;
  }

  width: 92%;
  @media (max-width: 1024px) and (min-width: 426px) {
    width: 100%;
    margin: 20px 0px;
  }
  @media (max-width: 425px) {
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
    margin: 20px 0px;
  }
`;

const FormInput4 = styled.input`
  box-sizing: border-box;
  border: 1px solid #d9ddfe;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 20px;
  color: lightgray;
  font-size: 15px;
  letter-spacing: 1px;
  width: 100%;
  font-size: 16px;
  letter-spacing: 1.6px;
  width: 100%;
  font-weight: 400;
  line-height: 24px;
  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
  margin-top: 19px;
  margin-left: 38px;
  padding: 21px 33px 21px 23px;
  @media (min-width: 1440px) {
    width: 520px;
    height: 61.58px;
    margin-left: 38px;
  }
  @media (max-width: 320px) {
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
    margin: 20px 0px;
  }
  width: 92%;

  @media (max-width: 1024px) and (min-width: 426px) {
    width: 100%;
    margin: 20px 0px;
  }
`;

const FormInput5 = styled.input`
  box-sizing: border-box;
  border: 1px solid #d9ddfe;
  border-radius: 15px;
  padding: 15px;
  margin-bottom: 20px;
  color: lightgray;
  font-size: 15px;
  letter-spacing: 1px;
  font-size: 16px;
  letter-spacing: 1.6px;
  font-weight: 400;
  line-height: 24px;
  @media (max-width: 768px) {
    margin-right: 20px;
    margin-bottom: 30px;
    margin: 20px 0px;
  }
  width: 92%;

  @media (max-width: 1024px) and (min-width: 426px) {
    width: 100%;
    margin: 20px 0px;
    padding-top: 40px;
  }
  margin-top: 9px;
  margin-left: 38px;
  @media (min-width: 1440px) {
    width: 520px;
    height: 239.47px;
  }
  padding: 0px 33px 162px 23px;
  @media (max-width: 320px) {
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
    margin-top: 20px;
  }
`;

const SubmitButton = styled.input`
  border-radius: 50px;
  background-color: rgb(255, 100, 174);
  border: 1px solid white;
  font-size: 15px;
  color: white;
  padding: 16px 56px;
  margin-top: 20px;
  letter-spacing: 1px;
  margin-left: 37px;
  margin-top: 33px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 1.6px;
  text-align: center;
  @media (max-width: 320px) {
    margin-left: 0px;
    margin-right: 0px;

    margin-top: 19px;
  }
`;

export default ContactUsComponent;
