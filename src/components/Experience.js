import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.section`
  padding: 2rem;
  background-color: #ffffff;
  color: #333;
  font-family: 'Arial', sans-serif;
`;

const ExperienceList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex; /* Use flexbox for horizontal layout */
  flex-wrap: wrap; /* Allow items to wrap if necessary */
  gap: 1rem; /* Add space between items */
`;

const ExperienceItem = styled.li`
  flex: 1 1 300px; /* Grow to fill space, shrink if needed, minimum width 300px */
  margin: 0.5rem 0;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  max-width: calc(50% - 1rem); /* Ensure two items per row */
  box-sizing: border-box; /* Include padding and border in width calculation */
`;

const Experience = () => {
  return (
    <ExperienceContainer id="experience">
      <h2>Experience</h2>
      <ExperienceList>
        <ExperienceItem>
          <h3>Systems Software Developer at NBS Bank Plc</h3>
          <p>Designing and developing software applications, collaborating with cross-functional teams...</p>
        </ExperienceItem>
        <ExperienceItem>
          <h3>Junior Lecturer at Blantyre International University (BIU)</h3>
          <p>Preparing and delivering lectures, collaborating with other academics...</p>          
        </ExperienceItem>
        <ExperienceItem>
          <h3>Mobile Money Operations Oficer</h3>
          <p>System Management: Ensuring that the mobile money platform operates smoothly and efficiently, including monitoring system performance and addressing any technical issues.</p>          
        </ExperienceItem>
      </ExperienceList>
    </ExperienceContainer>
  );
};

export default Experience;
