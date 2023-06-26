import React from 'react';
import "./About.css";

export default function About() {
  return (
    <div className='about'>
      <h1>Christian Drouin</h1>
      <p>
        Salem, NH &bull;
        christian.a.drouin@gmail.com &bull;
        (805) 623-2208 &bull;
        <a className='about-link' href={'https://www.linkedin.com/in/christian-a-drouin/'} target="_blank" rel="noopener noreferrer"> LinkedIn</a> &bull;
        <a className='about-link' href={'https://github.com/ChristianD96'} target="_blank" rel="noopener noreferrer"> GitHub Link</a>
      </p>
      <h2>Professional Profile</h2>
      <p>Proud Air Force Veteran (recently held TS/SCI clearance) with an advanced knowledge in Microsoft Power Apps. 
          I have a passion for automation and web/software development. I strive to bring all clients requirements to fruition. </p>
      <h2>Technical Skills</h2>
      <div className='lists'>
        <ul className='skills'>
          <li>Project Management</li>
          <li>Automation</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>JSON</li>
        </ul>
        <ul className='skills'>
          <li>SDLC</li>
          <li>Power Automate</li>
          <li>Power Apps</li>
          <li>Power Bi</li>
          <li>RESTful APIs</li>
        </ul>
      </div>
      <h2>Projects</h2>
      <h3>"Sorry!" Application</h3>
      <div className='projects'>
        <ul>
          <li>Created a web-based application that randomly generates cards for users playing the game Sorry.</li>
          <li>Used Strong problem-solving skills to troubleshoot and resolve issues related to React, JavaScript, HTML, and CSS.</li>
          <li>Used React state and math functions to generate different cards which auto-adjust their view and response behavior to browser screen size and mobile vs. desktop UI.</li>
          <li>
            Used Amazon Amplify to publish project to the web here:
            <a className='about-link' href={'https://main.d3dqgdwl4qxea.amplifyapp.com/'} target="_blank" rel="noopener noreferrer"> Sorry App</a>
          </li>
        </ul>
      </div>
      <h3>Portfolio Site</h3>
      <div className='projects'>
        <ul>
          <li>Used HTML and CSS to structure and style web pages, creating a visually appealing and user-friendly design.</li>
          <li>Familiarity with client-side routing using React Router to create seamless navigation within a portfolio site.</li>
          <li>Used AWS Amplify to streamline the deployment process by automating build, test, and deployment steps.</li>
          <li>Created and managed branches, merged code changes, and resolved conflicts using Git commands and GitHub's UI.</li>
        </ul>
      </div>
      <h3>Access Application</h3>
      <div className='projects'>
        <ul>
          <li>Created Power Platform solution that allows a user to select/search a user from the tenant. The app then generates an Excel file which lists all levels of access across all SharePoint site collections. Uses Canvas, Flow, APIs, and SharePoint.</li>
          <li>Used a series of nested loops and http requests to SharePoint and Microsoft 365 to collect raw JSON data on sites.</li>
          <li>Filtered content using complex string functions to cut results not applicable to user entered in application.</li>
        </ul>
      </div>
      <h2>Professional Experience</h2>
      <h3>Microsoft Support Engineer</h3>
      <h4>Thrive NextGen | Remote</h4>
      <h4>May 2022 - Present</h4>
      <div className='projects'>
        <ul>
          <li>Oversaw multiple client development projects, handling meetings, requirement gathering, testing, and implementation.</li>
          <li>Created multiple applications using Power Platform to eliminate monotonous tasks previously done by employees saving thousands of company hours and dollars.</li>
          <li>Expertly managed multiple tenants Office 365 accounts handling both issues and requests for Microsoft Teams, SharePoint, Migrations, Power Bi reports, Power Automate flows, and more.</li>
          <li>Created various scripts using PowerShell to generate reports on large quantities of data based on client requirements.</li>
          <li>Overtook entire client migration from Egnyte to SharePoint. Migrated 1.3 Terabytes of data before reaching client deadline. Organized meetings with content owners and handled all unique requests.</li>
        </ul>
      </div>
      <h3>Orbital Analyst (USAF)</h3>
      <h4>Joint Space Operations Center (Held TS/SCI clearance)</h4>
      <h4>July 2014 - July 2018</h4>
      <div className='projects'>
        <ul>
          <li>Worked within a Linux based system called CAVEnet to help control nearly a hundred thousand satellite objects in space.</li>
          <li>Generated query functions within CAVEnet increasing orbital update frequency by nearly 1,000 percent.</li>
          <li>Regularly worked with MIT & NASA to identify new capabilities & requirements within the satellite tracking/collision avoidance industry in effort to improve space situational awareness.</li>
          <li>Performed regular CRUD operations to manage database collection of satellite data predicting nearly 25,000 satellite orbits.</li>
          <li>Monitored and performed routine system/server processes on our main computer system to validate overall system health and evaluate workload on the system.</li>
        </ul>
      </div>
      <h2>Education</h2>
      <h3>Bachelor of Science in Computer Science (w/ conc. in Software Engineering)</h3>
      <h4>Southern New Hampshire University (GPA 3.7)</h4>
      <h4>August 2019 - December 2022</h4>
      <div className='projects'>
        <ul>
          <li>Employ proven software engineering design methodologies, patterns, & processes for successful software development.</li>
          <li>Evaluate various system architectures, security, & software functionalities for use in effective software development.</li>
          <li>Analyze complex computing problems & apply principles of computing to identify solutions.</li>
          <li>Design, implement, & evaluate a computing-based solution to meet a given set of computing requirements.</li>
          <li>Make informed judgments in computing practice based on legal & ethical principles.</li>
          <li>Apply computer science theory & software development fundamentals to produce computing-based solutions.</li>
        </ul>
      </div>
    </div>
  );
}
