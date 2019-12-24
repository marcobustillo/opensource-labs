import React, { useEffect, useState, useContext } from "react"
import { Row, Col } from "react-grid-system"
import Card from "./card"
import Skeleton from "./skeleton"
import { store } from "../context/FilterContext"

const URL = "https://api.github.com/search/issues"

const Main = props => {
  const {
    state: { page, loading, lang, label },
    dispatch,
  } = useContext(store)
  const [issueList, setIssueList] = useState([])

  const fetchIssues = (page, lang, label) => {
    const urlBuilder = `${URL}?q=language:${lang.value}+label:%22${label.value}%22+type:issue+state:open&page=${page}&per_page=9`
    fetch(urlBuilder)
      .then(response => response.json())
      .then(data => {
        setIssueList(data.items)
        dispatch({ type: "request_success" })
      })
      .catch(err => {
        alert(err)
        dispatch({ type: "request_failed" })
      })
  }

  const createEllipsis = data => {
    if (data.length > 32) {
      return `${data.substring(0, 32)}...`
    }
    return data
  }

  useEffect(() => {
    fetchIssues(page, lang, label)
  }, [page, lang, label])

  if (loading) return <Skeleton />

  return (
    <div style={{ minHeight: "70vh" }}>
      <Row>
        {issueList.map(issue => {
          const title = issue.repository_url.split("/")
          return (
            <Col key={issue.id} xs={12} sm={12} md={4} lg={4} xl={4}>
              <Card
                title={createEllipsis(title[title.length - 1])}
                description={issue.title}
                issue={`Issue #${issue.number}`}
                gitHubLink={issue.html_url}
              />
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default Main
