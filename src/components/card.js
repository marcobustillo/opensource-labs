import React from "react"

const Card = ({ title, issue, description, gitHubLink }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <h3 className="card-subtitle">{issue}</h3>
      <p className="card-description">{description}</p>
      <p className="card-description">
        <a className="card-link" href={gitHubLink} target="_blank">
          View on Github
        </a>
      </p>
    </div>
  )
}

export default Card
