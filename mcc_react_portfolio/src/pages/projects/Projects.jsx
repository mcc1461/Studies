import React from 'react'
import project1 from "../../img/project-1.jpg"
import project2 from "../../img/project-2.jpg"
import project3 from "../../img/project-3.jpg"
import project4 from "../../img/project-4.jpg"
import project5 from "../../img/project-5.jpg"
import project6 from "../../img/project-6.jpg"
import { Link, useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div class="project-bgImg-container">
      <nav class="nav">
        <ul class="nav__list">
          <Link to="/" class="nav__item">
            <a href="index.html" class="nav__link">
              Home
            </a>
          </Link>
          <li class="nav__item">
            <a
              onClick={() => navigate("/about")}
              class="nav__link nav__link--active"
            >
              About Me
            </a>
          </li>
          <li class="nav__item">
            <a onClick={() => navigate("/projects")} class="nav__link">
              My Projects
            </a>
          </li>
          <li to="contact" class="nav__item">
            <a onClick={() => navigate("/contact")} class="nav__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div class="projects__bio-image">
        <h1>My Projects</h1>
      </div>
      <main class="projects">
        <div class="projects__items">
          <div class="projects__item">
            <img src={project1} alt="My Project" />
          </div>

          <div class="projects__item">
            <img src={project2} alt="My Project" />
          </div>
          <div class="projects__item">
            <img src={project3} alt="My Project" />
          </div>
          <div class="projects__item">
            <img src={project4} alt="My Project" />
          </div>

          <div class="projects__item">
            <img src={project5} alt="My Project" />
          </div>
          <div class="projects__item">
            <img src={project6} alt="My Project" />
          </div>
        </div>
      </main>
      <footer class="vertical">
        <div class="social-icons">
          <a href="#">
            <i class="fab fa-twitter fa-2x"></i>
          </a>
          <a href="#">
            <i class="fab fa-facebook fa-2x"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram fa-2x"></i>
          </a>
          <a href="#">
            <i class="fab fa-github fa-2x"></i>
          </a>
        </div>

        <div class="copyright">&copy; Copyright 2023</div>
      </footer>
    </div>
  );
}

export default Projects