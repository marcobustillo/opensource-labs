import React from "react"
import { Row, Col, useScreenClass } from "react-grid-system"
import { TiMediaPlay, TiMediaRewind, TiMediaPlayReverse } from "react-icons/ti"

import Button from "./button"

const Pagination = props => {
  const { page, next, previous } = props
  const screenClass = useScreenClass()

  return (
    <div style={{ marginTop: 10, marginBottom: 10 }}>
      <Row>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div
            style={{
              textAlign: ["xs", "sm"].includes(screenClass) ? "center" : "end",
            }}
          >
            <Button
              className="icon-button"
              disabled={page < 2}
              onClick={previous}
            >
              <TiMediaPlayReverse size={50} />
            </Button>
          </div>
        </Col>
        <Col xs={12} sm={12} md={6} lg={6}>
          <div
            style={{
              textAlign: ["xs", "sm"].includes(screenClass)
                ? "center"
                : "start",
            }}
          >
            <Button className="icon-button" onClick={next}>
              <TiMediaPlay size={50} />
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Pagination
