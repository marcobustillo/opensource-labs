import React from "react"

const Card = ({ title, issue, description, gitHubLink }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <h3 className="card-subtitle">{issue}</h3>
      <div style={{ paddingLeft: 50, paddingRight: 50 }}>
        <p className="card-description">{description}</p>
      </div>
      <p className="card-description">
        <a
          className="card-link"
          href={gitHubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Github
        </a>
      </p>
    </div>
  )
}

export default Card
