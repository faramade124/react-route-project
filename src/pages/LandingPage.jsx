"use client"
import React from "react"

import { useState } from "react"
import "./LandingPage.css"

const LandingPage = () => {
  const [currentProject , setCurrentProject] = useState(0)

  const projects = [
    {
      title: "PROJECT Lorum",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1>
                <span className="project-label">PROJECT</span>
                <span className="project-name">Lorum</span>
              </h1>
              <div className="hero-navigation">
                <button className="nav-arrow">←</button>
                <button className="nav-arrow">→</button>
              </div>
              <div className="project-counter">
                <span className="current">01</span>
                <span className="total">/ 02</span>
              </div>
              <button className="view-project-btn">VIEW PROJECT →</button>
            </div>
            <div className="hero-image">
              <img src="/src/assets/image/Rectangle 6.png" alt="Modern building architecture" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-images">
              <img src="/src/assets/image/Rectangle 8 (1).png" alt="Architecture detail" className="about-img-1" />
              <img src="/src/assets/image/Rectangle 9.png" alt="Building facade" className="about-img-2" />
              <img src="/src/assets/image/Rectangle 10.png" alt="Geometric pattern" className="about-img-3" />
            </div>
            <div className="about-text">
              <h2>About</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                into electronic typesetting, remaining essentially unchanged.
              </p>
              <button className="read-more-btn">READ MORE →</button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission">
        <div className="container">
          <h2>Main Focus/Mission Statement</h2>
          <div className="mission-content">
            <div className="mission-item">
              <div className="mission-number">1</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilisis placerat,
                magna mauris porttitor tortor, a auctor est felis ut nisl.
              </p>
            </div>
            <div className="mission-item">
              <div className="mission-number">2</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur, lectus et facilibus placerat,
                magna mauris porttitor tortor, a auctor est felis ut nisl.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Projects */}
      <section className="our-projects">
        <div className="container">
          <h2>Our Projects</h2>
          <div className="projects-grid">
            <div className="project-card large">
              <img src="/src/assets/image/Rectangle 17.png" alt="Sample Project" />
              <div className="project-overlay">
                <h3>Sample Project</h3>
                <p>VIEW MORE →</p>
              </div>
              
            </div>
            <div className="project-card img1">
              <img src="/src/assets/image/image 15.jpg " alt="Project 2" />
            </div>
            <div className="project-card">
              <img src="/src/assets/image/image 16.png" alt="Project 3" />
            </div>
            <div className="project-card">
              <img src="/src/assets/image/image 17.png" alt="Project 4" />
            </div>
            <div className="project-card">
              <img src="/src/assets/image/image 18.png" alt="Project 5" />
            </div>
          </div>
          <button className="all-projects-btn">ALL PROJECTS →</button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-form">
              <h2>Contact Us</h2>
              <form>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Phone Number*" />
                <input type="email" placeholder="E-mail*" />
                <input type="text" placeholder="Interested In" />
                <textarea placeholder="Message*"></textarea>
                <button type="submit" className="send-email-btn">
                  SEND EMAIL →
                </button>
              </form>
            </div>
            <div className="contact-image">
              <img src="/src/assets/image/image 12.png" alt="Person on phone" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingPage
