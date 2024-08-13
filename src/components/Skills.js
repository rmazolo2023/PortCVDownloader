import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.section`
  padding: 2rem;
  background-color: #f8f9fa; /* Light background color for contrast */
  color: #333;
  font-family: 'Arial', sans-serif;
`;

const SkillsBox = styled.div`
  padding: 2rem;
  background-color: #ffffff; /* White background for the box */
  border-radius: 10px; /* Rounded corners for the box */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Shadow for depth */
  border: 1px solid #dee2e6; /* Border for the box */
`;

const SkillsTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
 /*color: #007bff;  Blue color for the title */
  text-align: center;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem; /* Adds spacing between items */
  justify-items: center; /* Centers items horizontally within their grid cells */
`;

const SkillItem = styled.li`
  margin: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #dee2e6; /* Slightly darker border for contrast */
  border-radius: 10px; /* Rounded corners */
  background-color: #ffffff; /* White background for items */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
  font-size: 1rem; /* Consistent font size */
  font-weight: 500; /* Slightly bolder text */
  transition: background-color 0.3s, box-shadow 0.3s; /* Smooth transition for hover effect */
  text-align: center; /* Center text within skill items */
  
  &:hover {
    background-color: #e9ecef; /* Light gray background on hover */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* More pronounced shadow on hover */
  }
`;

const Skills = () => {
  const skills = [
    "Temenos T24",
    "Oracle Flexcube",
    "3rd Party Integrations",
    "Agile Project Management",
    "Scrum",
    "Software Development Life Cycle (SDLC)",
    "ASP.NET Web API",
    "REST APIs",
    "API Testing",
    "MySQL",
    "Linux",
    "Python (Programming Language)",
    "Kubernetes",
    "Jenkins",
    "Docker Products",
    "Payment Systems",
    "Android Studio",
    "Cascading Style Sheets (CSS)",
    "Payment Gateways",
    "GitHub",
    "HTML",
    "Git",
    "Visual Studio",
    "C++",
    "Software Development",
    "Android Development",
    "Java",
    "CodeIgniter",
    ".NET Framework",
    "PHP",
    "JavaScript",
    "React.js",
    "C#",
    "Data Analysis",
    "Engineering",
    "Research",
    "Project Management",
    "Training",
    "Analytical Skills",
    "Information Technology"
  ];

  return (
    <SkillsContainer id="skills">
      <SkillsBox>
        <SkillsTitle>Skills</SkillsTitle>
        <SkillsList>
          {skills.map((skill, index) => (
            <SkillItem key={index}>{skill}</SkillItem>
          ))}
        </SkillsList>
      </SkillsBox>
    </SkillsContainer>
  );
};

export default Skills;
