import React, { useContext } from "react"
import { Row, Col } from "react-grid-system"
import { LANG, LABEL } from "../data"
import { store } from "../context/FilterContext"
import Select from "./select"

const Filters = props => {
  const {
    state: { loading, lang, label },
    dispatch,
  } = useContext(store)
  const [open, setOpen] = React.useState({
    lang_selector: false,
    label_selector: false,
  })

  return (
    <Row>
      <Col xs={12} sm={12} md={12} lg={6} xl={6}>
        <Select
          id="lang_selector"
          disabled={loading}
          label={`Language: ${lang.name}`}
          data={LANG}
          open={open.lang_selector}
          setOpen={() =>
            setOpen({
              lang_selector: !open.lang_selector,
              label_selector: false,
            })
          }
          selected={lang.value}
          action={dispatch}
        />
      </Col>
      <Col xs={12} sm={12} md={12} lg={6} xl={6}>
        <Select
          id="label_selector"
          disabled={loading}
          open={open.label_selector}
          setOpen={() =>
            setOpen({
              label_selector: !open.label_selector,
              lang_selector: false,
            })
          }
          label={`Label: ${label.name}`}
          data={LABEL}
          action={dispatch}
        />
      </Col>
    </Row>
  )
}

export default Filters
