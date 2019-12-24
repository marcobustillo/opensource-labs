// store.js
import React, { createContext, useReducer } from "react"

const initialState = {
  page: 1,
  loading: false,
  lang: { name: "JavaScript", value: "javascript" },
  label: { name: "Help Wanted", value: "help+wanted" },
}
const store = createContext(initialState)
const { Provider } = store

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "request_success":
        return { ...state, loading: false }
      case "request_failed":
        return { ...state, loading: false }
      case "lang_selector":
        return { ...state, loading: true, lang: action.payload }
      case "label_selector":
        return { ...state, loading: true, label: action.payload }
      case "next":
        return { ...state, page: state.page + 1, loading: true }
      case "previous":
        return {
          ...state,
          page: state.page === 1 ? 0 : state.page - 1,
          loading: true,
        }
      default:
        throw new Error()
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, StateProvider }
