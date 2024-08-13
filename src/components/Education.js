import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.section`
  padding: 2rem;
  background-color: #ffffff;
  color: #333;
  font-family: 'Arial', sans-serif;
`;

const EducationList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex; /* Use flexbox to display items horizontally */
  flex-wrap: wrap; /* Allows items to wrap to the next line if needed */
  gap: 1rem; /* Add space between items */
`;

const EducationItem = styled.li`
  flex: 1 1 45%; /* Adjusts the width of the items */
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 300px; /* Minimum width to maintain a good layout on smaller screens */
`;

const Education = () => {
  return (
    <EducationContainer id="education">
      <h2>Education</h2>
      <EducationList>
        <EducationItem>
          <h3>Bachelor of Science in Information Technology</h3>
          <p>University of Malawi The Polytechnic, Blantyre</p>
          <span>2018 - 2022</span>
          <p>Grade: Credit</p>
        </EducationItem>
        <EducationItem>
          <h3>Malawi School Certificate of Education</h3>
          <p>Luwinga Secondary School</p>
          <span>Completed in 2017</span>
          <p>Grade: 11 Points</p>
        </EducationItem>
      </EducationList>
    </EducationContainer>
  );
};

export default Education;
