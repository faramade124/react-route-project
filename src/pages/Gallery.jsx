"use client"

import { useState } from "react"
import "./Gallery.css"

const Gallery = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 5

  const galleryImages = [
    { id: 1, src: "/images/Rectangle 22.png", alt: "Architecture 1" },
    { id: 2, src: "/images/Rectangle 23.png", alt: "Lighthouse at sunset" },
    { id: 3, src: "/images/Rectangle 24.png", alt: "Modern structure" },
    { id: 4, src: "/images/Rectangle 25.png", alt: "Red and white lighthouse" },
    { id: 5, src: "/images/Rectangle 26.png", alt: "Historic building" },
    { id: 6, src: "/images/Rectangle 27 (1).png", alt: "Classical architecture" },
    { id: 7, src: "/images/Rectangle 28.png", alt: "City street" },
    { id: 8, src: "/images/Rectangle 29.png", alt: "Modern building" },
    { id: 9, src: "/images/Rectangle 30.png", alt: "Waterfront architecture" },
    { id: 10, src: "/images/Rectangle 31.png", alt: "Contemporary design" },
  ]

  return (
    <div className="gallery-page">
      <div className="container">
        <div className="gallery-header">
          <h1>
            <span className="gallery-label">Photo</span>
            <span className="gallery-title">Gallery</span>
          </h1>
        </div>

        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <img src={image.src || "/placeholder.svg"} alt={image.alt} />
            </div>
          ))}
        </div>

        <div className="gallery-pagination">
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

export default Gallery
