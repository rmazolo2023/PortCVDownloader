import React from 'react';
import styled from 'styled-components';
import Typical from 'react-typical';
import portifolioImage from '../assets/Portifolio.jfif';




const AboutContainer = styled.section`
  padding: 2rem;
  background-color: #f0f0f0;
  color: #333;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  display: flex; /* To align image and text properly */
  align-items: center; /* Center align vertically */
`;

const ImageContainer = styled.div`
  flex: 0 0 150px;
  margin-left: auto; /* Pushes the image to the far right */
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TypingText = styled.div`
  font-size: 1.1rem;
  margin-top: 1rem;
  flex: 1; /* Allows text to take up available space */
`;

const About = () => {
  return (
    <AboutContainer id="about">
      <TypingText>
        <Typical
          steps={[
            'Hello, I am Right Mazolo, a Full-Stack Software Developer with over 6 years of experience, during which I have made significant contributions to the growth and success of various renowned companies, including NBS Bank, Telekom Networks Malawi (TNM), and Blantyre International University.',
            2000, // Pause after finishing the text
            'I hold a Bachelor’s Degree in Information Technology with credit from the University of Malawi The Polytechnic and possess extensive experience in software development',
            2000, // Pause after finishing the second text
          ]}
          loop={Infinity} // Infinite loop
          wrapper="p"
          speed={30} // Typing speed in milliseconds
        />
      </TypingText>
      <ImageContainer>
      <Image src={portifolioImage} alt="Right Mazolo" />
      </ImageContainer>
    </AboutContainer>
  );
};

export default About;
