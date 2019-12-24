import React from "react"
import { Row, Col } from "react-grid-system"
import { LANG, LABEL } from "../data"
import Select from "./select"

const Filters = props => {
  const [selected, setSelected] = React.useState({
    name: "JavaScript",
    value: "javascript",
  })

  return (
    <Row>
      <Col xs={12} sm={12} md={5} lg={5} xl={5}>
        <Select
          label={`Language: ${selected.name}`}
          data={LANG}
          selected={selected}
          action={setSelected}
        />
      </Col>
      <Col xs={12} sm={12} md={5} lg={5} xl={5}>
        <Select label="Label: Help Wanted" data={LABEL} />
      </Col>
    </Row>
  )
}

export default Filters
