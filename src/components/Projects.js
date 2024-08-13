import React from 'react';
import styled from 'styled-components';

const ProjectsContainer = styled.section`
  padding: 2rem;
  background-color: #ffffff;
  color: #333;
  font-family: 'Arial', sans-serif;
`;

const ProjectsBox = styled.div`
  padding: 1rem;
  border: 2px solid #ddd;
  border-radius: 10px;
  background-color: #f2f2f2;
`;

const ProjectList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex; /* Use flexbox for horizontal layout */
  flex-wrap: wrap; /* Allow items to wrap if necessary */
  gap: 1rem; /* Add some space between items */
`;

const ProjectItem = styled.li`
  flex: 1 1 300px; /* Grow to fill space, shrink if needed, minimum width 300px */
  margin: 0.5rem 0;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
  max-width: calc(50% - 1rem); /* Ensure two items per row */
  box-sizing: border-box; /* Include padding and border in width calculation */
`;

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <h2>Projects</h2>
      <ProjectsBox>
        <ProjectList>
          <ProjectItem>
            <h3>ATM Card Application</h3>
            <p>

Developed an ATM Card Application for NBS Bank to automate the manual application process for ATM cards. The application utilizes the following technologies:

Front-end: React.js
Back-end: C#
Database: Microsoft SQL</p>
          </ProjectItem>
          <ProjectItem>
            <h3>NBS-OFSAACustomerScreening portal</h3>
            <p>
A web app that handles screening of customer and reporting.
Technologies used:
Front-end: React.js
Back-end: C#
Database: Microsoft SQL</p>
          </ProjectItem>
          <ProjectItem>
            <h3>SmartReport dashboard</h3>
            <p>This application is utilized by the bank to analyze reports from over 72 billers. I developed additional features for the dashboard, such as the ability to assign thousands of recipients at once. This enhancement significantly reduced the time required for the help desk team to complete their tasks, shortening the process from a week to just a minute. Furthermore, several processes were automated, including the daily report, which is now sent automatically via email.</p>
          </ProjectItem>
          <ProjectItem>
            <h3>Payment Screens/Dashboards</h3>
            <p>

I developed several payment screens and dashboards to replace manual processes previously performed by bank tellers in the T24 core banking system. These screens include:

Lilongwe City Assembly Payments
Blantyre City Assembly Payments
CUMO Payments
Vision Fund Payments
These developments streamlined payment processing and improved operational efficiency.
Technoloy used: PHP, HTM 5, CSS 3, CodeIgniter Framework and JavaScript</p>
          </ProjectItem>
          <ProjectItem>
            <h3>Vasportal</h3>
            <p>VAS Portal Integration:

The VAS Portal, which accommodates over 50 billers, was upgraded to align with the new core banking system, transitioning from Temenos/T24 to Oracle. I collaborated with a colleague on this project, focusing on modifying all billers to ensure compatibility with the updated system.

Technologies used: PHP, CSS, JavaScript, CodeIgniter.</p>
          </ProjectItem>
          <ProjectItem>
            <h3>API Testing for Oracle Flexcube Integration</h3>
            <p>

Developed and executed thousands of test cases to thoroughly cover functional scenarios, edge cases, and error conditions for Oracle Flexcube endpoints within the NBS Core Banking System Project.
Conducted rigorous testing on both SOAP and REST APIs to ensure reliability, performance, and compliance with project requirements.
Consumed multiple endpoints from the bank’s end to validate integration.
Applied meticulous attention to detail to identify and resolve potential issues, significantly enhancing the overall quality and robustness of the API integration..</p>
          </ProjectItem>
          <ProjectItem>
            <h3>Mobile Money case Reporting System for TNM</h3>
            <p>Developed a comprehensive Mobile Money Case Reporting System, enabling agents to report cases, which are then handled based on the agency and anticipated impact.
            Utilized technologies including Java, PHP, CSS, JavaScript, Android Studio, and jQuery to build and deploy the system.</p>
          </ProjectItem>
          <ProjectItem>
            <h3>Final touch IT&Electronics Website</h3>
            <p>
            Designed and developed a responsive and dynamic website for Finaltouch IT & Electronics, enhancing their online presence and digital engagement. Technologies used include HTML, CSS, JavaScript, and PHP..</p>
          </ProjectItem>
        </ProjectList>
      </ProjectsBox>
    </ProjectsContainer>
  );
};

export default Projects;
