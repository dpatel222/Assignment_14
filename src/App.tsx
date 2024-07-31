// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import DeveloperSetup from "./DeveloperSetup";

import { DiReact, DiRuby, DiPython } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { SiCsswizardry, SiTypescript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { BiLogoTailwindCss } from "react-icons/bi";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Deep Patel</h1>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about-me">About Me</Link>
            <Link to="/developer-setup">Developer Setup</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/developer-setup" element={<DeveloperSetup />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <section className="basic-information">
        <h2>Basic Information</h2>
        <p>
          I'm excited to share my work and skills with you. Feel free to explore
          the different sections to learn more about me and my projects.
        </p>
      </section>
      <section className="work">
        <h2>Work</h2>
        <div className="work-item">
          <h3>Project Alpha</h3>
          <p>
            Project Alpha is a web application built using React and Node.js
            that helps users track their daily tasks and manage their time
            efficiently. It features a sleek, user-friendly interface and
            various tools to improve productivity.
          </p>
          <img src="https://via.placeholder.com/300" alt="Project Alpha" />
          <a href="https://example.com/project-alpha">View Project</a>
          <div className="tech-used">
            <h4>Technologies Used:</h4>
            <ul>
              <li>
                <DiReact size={20} /> React
              </li>
              <li>
                <IoLogoJavascript size={20} /> JavaScript
              </li>
              <li>
                <FaHtml5 size={20} /> HTML
              </li>
              <li>
                <SiCsswizardry size={20} /> CSS
              </li>
              <li>
                <VscVscode size={20} /> VS Code
              </li>
            </ul>
          </div>
        </div>
        <div className="work-item">
          <h3>Beta E-commerce</h3>
          <p>
            Beta E-commerce is an online shopping platform developed with Ruby
            on Rails. It offers a seamless shopping experience with features
            like product search, user reviews, and secure payment gateways. The
            site is optimized for both desktop and mobile use.
          </p>
          <img src="https://via.placeholder.com/300" alt="Beta E-commerce" />
          <a href="https://example.com/beta-ecommerce">View Project</a>
          <div className="tech-used">
            <h4>Technologies Used:</h4>
            <ul>
              <li>
                <DiRuby size={20} /> Ruby on Rails
              </li>
              <li>
                <FaHtml5 size={20} /> HTML
              </li>
              <li>
                <SiCsswizardry size={20} /> CSS
              </li>
              <li>
                <BiLogoTailwindCss size={20} /> Tailwind CSS
              </li>
            </ul>
          </div>
        </div>
        <div className="work-item">
          <h3>Gamma Analytics</h3>
          <p>
            Gamma Analytics is a data visualization tool created with JavaScript
            and D3.js. It enables users to input data sets and generate
            interactive charts and graphs. The tool is highly customizable and
            supports various data formats.
          </p>
          <img src="https://via.placeholder.com/300" alt="Gamma Analytics" />
          <a href="https://example.com/gamma-analytics">View Project</a>
          <div className="tech-used">
            <h4>Technologies Used:</h4>
            <ul>
              <li>
                <IoLogoJavascript size={20} /> JavaScript
              </li>
              <li>
                <DiPython size={20} /> Python
              </li>
              <li>
                <FaHtml5 size={20} /> HTML
              </li>
              <li>
                <SiCsswizardry size={20} /> CSS
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="tech-list">
        <h2>Skills</h2>
        <div className="tech-grid">
          <div className="tech-item">
            <DiReact size={50} />
            <p>React</p>
          </div>
          <div className="tech-item">
            <IoLogoJavascript size={50} />
            <p>JavaScript</p>
          </div>
          <div className="tech-item">
            <DiRuby size={50} />
            <p>Rails</p>
          </div>
          <div className="tech-item">
            <DiPython size={50} />
            <p>Python</p>
          </div>
          <div className="tech-item">
            <FaHtml5 size={50} />
            <p>HTML</p>
          </div>
          <div className="tech-item">
            <SiCsswizardry size={50} />
            <p>CSS</p>
          </div>
          <div className="tech-item">
            <VscVscode size={50} />
            <p>VS Code</p>
          </div>
          <div className="tech-item">
            <SiTypescript size={50} />
            <p>TypeScript</p>
          </div>
          <div className="tech-item">
            <BiLogoTailwindCss size={50} />
            <p>TailWind Css</p>
          </div>
        </div>
      </section>
      <section className="resources">
        <h2>Resources</h2>
        <div>
          <h3>W3School</h3>
          <p>
            This is the website where you can learn any languages and their
            basics.
          </p>
          <a href="https://www.w3schools.com/html/">Link</a>
          <h3>Tailwind CSS</h3>
          <p>
            This is the website I used for adding CSS to the projects I have
            worked on.
          </p>
          <a href="https://tailwindcss.com/">Link</a>
        </div>
      </section>
    </div>
  );
}

function AboutMe() {
  return (
    <div>
      <section className="about-me">
        <h2>About Me</h2>
        <p>
          Hi, I'm Deep Patel, a passionate developer with experience in React,
          Ruby on Rails, Python, and more. I enjoy creating impactful web
          applications and continuously learning new technologies.
        </p>
      </section>
    </div>
  );
}

export default App;
