import React from "react"
import { TiArrowSortedDown } from "react-icons/ti"

const Select = props => {
  const { id, open, setOpen, data, label, selected, action } = props

  return (
    <div style={{ position: "relative" }}>
      <div className="selection-label" onClick={() => setOpen(!open)}>
        <div>{label}</div>
        <div className="selection-icon">
          <TiArrowSortedDown size="1.5em" />
        </div>
      </div>
      {open && (
        <div className="selection-container">
          {data.map((item, i) => (
            <div
              key={i.toString()}
              className={`selection-item ${
                selected === item.value ? "selected" : ""
              }`}
              value={item.value}
              onClick={event => {
                action({
                  type: id,
                  payload: item,
                })
                setOpen(false)
              }}
            >
              {item.name}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Select
