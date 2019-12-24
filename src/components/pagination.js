import React, { useContext } from "react"
import { Row, Col, useScreenClass } from "react-grid-system"
import { store } from "../context/FilterContext"
import { TiMediaPlay, TiMediaRewind, TiMediaPlayReverse } from "react-icons/ti"

import Button from "./button"

const Pagination = props => {
  const screenClass = useScreenClass()
  const globalState = useContext(store)

  const {
    dispatch,
    state: { page, loading },
  } = globalState

  const next = () => {
    dispatch({ type: "next" })
  }

  const previous = () => {
    dispatch({ type: "previous" })
  }

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
              disabled={page < 2 || loading}
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
            <Button disabled={loading} className="icon-button" onClick={next}>
              <TiMediaPlay size={50} />
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Pagination
