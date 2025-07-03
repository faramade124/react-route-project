"use client"

import { useState } from "react"
import "./Projects.css"

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 5
  

  const projects = [
    {
      id: 1,
      title: "Sample Project",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "/images/image 30.png",
    },
    {
      id: 2,
      title: "Sample Project 2",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "/images/image 33.png",
    },
    {
      id: 3,
      title: "Sample Project 3",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      image: "/images/image 32.png",
    },
  ]

  return (
    <div className="projects-page">
      <div className="container">
        <div className="projects-header">
          <h1>
            <span className="projects-label">Our</span>
            <span className="projects-title">Projects</span>
          </h1>
        </div>

        <div className="projects-list">
          {projects.map((project,) => (
            <div key={project.id} className="project-item">
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
              </div>
              <div className="project-content">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <button className="view-more-btn">VIEW MORE →</button>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-pagination">
          <div className="page-info">
            <span className="current-page">0{currentPage}</span>
            <span className="separator">/</span>
            <span className="total-pages">0{totalPages}</span>
          </div>
          <div className="pagination-controls">
            <button
              className="pagination-btn"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              ←
            </button>
            <button
              className="pagination-btn"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
