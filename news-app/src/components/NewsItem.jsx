import React from 'react'
import newsImage from '../assets/news.jpg';

const NewsItem = ({ title, description, url, src }) => {
  return (
    <div className="card bg-dark text-light mb-4 h-100 shadow-sm rounded-4">
        <img
            src={src ? src : newsImage}
            className="card-img-top rounded-4"
            style={{ height: "200px", objectFit: "cover" }}
            alt={title}
        />

        <div className="card-body d-flex flex-column">
            <h5 className="card-title">
            {title ? title.slice(0, 50) : "No title"}...
            </h5>

            <p className="card-text flex-grow-1">
            {description
                ? description.slice(0, 100) + "..."
                : "No description available. Visit source for details."}
            </p>

            <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-auto"
            >
            Read More
            </a>
        </div>
    </div>
  )
}

export default NewsItem
