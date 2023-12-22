import React from 'react';
import { Link, useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();
  return (
    <div class="contact-bgImg-container">
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
      <main class="contact">
        <h2>Contact Me ...</h2>
        <div class="contact__list">
          <div class="contact__item">
            <i class="fas fa-envelope"></i> Email
            <div class="text-secondary">wednesday@nevermoreacademy.edu</div>
          </div>
          <div class="contact__item">
            <i class="fas fa-mobile-alt"></i> Phone
            <div class="text-secondary">+40 (571) 360-1234</div>
          </div>
          <div class="contact__item">
            <i class="fas fa-map-marker-alt"></i> Address
            <div class="text-secondary">
              Strada Zamorei 1, Bușteni 105500, Romania
            </div>
          </div>
        </div>
      </main>
      <footer class="middle">
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

export default Contact
