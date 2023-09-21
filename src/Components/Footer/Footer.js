import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function Footer() {
  return (
    <Wrapper style={{background:"#750075"}}>
      <div className="container">
        <p className="footer-description">ShopyEasy Retail Store</p>
        <p className="about-us">
          About Us: ShopyEasy is your one-stop destination for retail products. We offer fast and secure delivery services.
        </p>
        <div className="social-links" style={{color:"white",opacity:"0.7"}}>
          <a href="#" target="_blank" rel="noopener noreferrer" style={{color:"white",opacity:"0.7"}}>
            <FacebookIcon/>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" style={{color:"white",opacity:"0.7"}}>
            <GoogleIcon />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" style={{color:"white",opacity:"0.7"}}>
            <EmailIcon />
          </a>
          <a href="https://api.whatsapp.com/send?phone=1234567890" target="_blank" rel="noopener noreferrer" style={{color:"white",opacity:"0.7"}}>
            <WhatsAppIcon />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" style={{color:"white",opacity:"0.7"}}>
            <LinkedInIcon/>
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" style={{color:"white",opacity:"0.7"}}>
            <TwitterIcon />
          </a>
        </div>
      </div>
      <hr />
      <div className="copyRights">
        <p className="rights">{`@ All Rights Reserved 2023.`}</p>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  background: black;
  color: white;
  opacity: 0.7;
  text-align: center;
  padding: 20px 0;

  .footer-description {
    font-size: 24px;
    opacity: 1;
    margin: 0;
  }

  .about-us {
    opacity: 0.8;
    font-size: 14px;
    margin: 10px 0;
  }

  .social-links {
    margin-top: 20px;
    a {
      margin: 0 10px;
      img {
        width: 24px;
        height: 24px;
        alt: 'Social Media Icon';
      }
    }
  }

  hr {
    border-color: white;
    opacity: 0.5;
  }

  .rights {
    opacity: 0.5;
    margin-top: 10px;
  }

  @media (max-width: 995px) {
    width: 1321px;
  }

  @media (max-width: 850px) {
    width: 1321px;
  }

  @media (max-width: 460px) {
    width: 1321px;
  }
`;
