import React from "react"
import { Row, Col } from "react-grid-system"

const Skeleton = props => {
  const PLACE_HOLDER = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

  return (
    <div style={{ minHeight: "70vh" }}>
      <Row>
        {PLACE_HOLDER.map(placeholder => {
          return (
            <Col key={placeholder} xs={12} sm={12} md={4} lg={4} xl={4}>
              <div className="skeleton-card">
                <div
                  style={{
                    width: "50%",
                    backgroundColor: "#d4d4d4",
                    height: "1rem",
                  }}
                />
                <div
                  style={{
                    width: "30%",
                    backgroundColor: "#d4d4d4",
                    height: "1rem",
                    marginTop: 20,
                  }}
                />
                <div
                  style={{
                    width: "60%",
                    backgroundColor: "#d4d4d4",
                    height: "1rem",
                    marginTop: 20,
                  }}
                />
                <div
                  style={{
                    width: "40%",
                    backgroundColor: "#d4d4d4",
                    height: "1rem",
                    marginTop: 20,
                  }}
                />
              </div>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default Skeleton
