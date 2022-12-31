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
        <a className='about-link' href={'https://www.linkedin.com/in/christian-a-drouin/'} target="_blank" rel="noopener noreferrer"> LinkedIn Link Click Me</a> &bull;
        <a className='about-link' href={'https://github.com/ChristianD96'} target="_blank" rel="noopener noreferrer"> GitHub Link Click Me</a>
      </p>
      <h2>Professional Profile</h2>
      <p>Proud Air Force Veteran (recently held TS/SCI clearance) who is passionate about technology & software.
        Highly adaptable to organizational change while maintaining a positive attitude & team-oriented approach to problem-solving.  </p>
      <h2>Technical Skills</h2>
      <div className='lists'>
        <ul className='skills'>
          <li>C/C++</li>
          <li>Python</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML/CSS</li>
        </ul>
        <ul className='skills'>
          <li>SDLC</li>
          <li>Power Automate</li>
          <li>Power Apps</li>
          <li>Backend Development</li>
          <li>UI/UX Design</li>
        </ul>
      </div>
      <h2>Projects</h2>
      <h3>"Sorry!" App | Winter 2022</h3>
      <div className='projects'>
        <ul>
          <li>Created an interface for users to randomly generate a "Sorry!" card since I lost the cards to my game.</li>
          <li>Used Git to control project files/changes</li>
          <li>
            Used Amazon Amplify to publish project to the web here:
            <a className='about-link' href={'https://main.d3dqgdwl4qxea.amplifyapp.com/'} target="_blank" rel="noopener noreferrer"> Sorry App Click Me</a>
          </li>
        </ul>
      </div>
      <h3>Full Stack Web Application | Spring 2022</h3>
      <div className='projects'>
        <ul>
          <li>Acted as the lead developer for the frontend/backend solution of a fully functional MongoDB dashboard web application.</li>
          <li>Using python libraries I developed client-side code that interfaces with the databases.</li>
          <li>Converted a full-stack application running on Docker to a cloud based application using AWS for a fully functional web-app.</li>
          <li>Created a full-stack web application using Mongo, JS, TS, HTML, CSS, and GitHub using branches and pulls for organization.</li>
        </ul>
      </div>
      <h3>Embedded Software | Winter 2021</h3>
      <div className='projects'>
        <ul>
          <li>Developed a deep understanding & in-depth evaluation of microcontroller service, architectures, & programing.</li>
          <li>Manipulating GPIO pins, UART, & PWM I performed designated tasks involving sensors, LEDs, & motors using C/C++.</li>
          <li>Using the TI SimpleLink CC3220S I coded the microcontroller to change the state of an LED through keyboard inputs.</li>
        </ul>
      </div>
      <h2>Professional Experience</h2>
      <h3>Microsoft Support Engineer</h3>
      <h4>Thrive NextGen | Remote</h4>
      <h4>May 2022 - Present</h4>
      <div className='projects'>
        <ul>
          <li>Created multiple applications using PowerApps and Power Automate to eliminate monotonous tasks previously done by employees saving thousands of company hours and dollars.</li>
          <li>Expertly managed multiple tenants Office 365 accounts handling both issues and requests for Microsoft Teams, SharePoint, Migrations, Power Bi reports, Power Automate flows, and more.</li>
          <li>Created various scripts using PowerShell to generate reports on large quantities of data based on client requirements.</li>
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