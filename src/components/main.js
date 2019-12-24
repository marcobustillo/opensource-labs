import React, { useEffect, useState } from "react"
import { Row, Col } from "react-grid-system"
import Card from "./card"

const URL = "https://api.github.com/search/issues"

const Main = props => {
  const [loading, setLoading] = useState(false)
  const [issueList, setIssueList] = useState([])

  const fetchIssues = () => {
    setLoading(true)
    const urlBuilder = `${URL}?q=language:javascript+label:%22help+wanted%22+type:issue+state:open&page=1`
    fetch(urlBuilder)
      .then(response => response.json())
      .then(data => {
        setIssueList(data.items)
        setLoading(false)
      })
  }

  const createEllipsis = data => {
    if (data.length > 32) {
      return `${data.substring(0, 32)}...`
    }
    return data
  }

  useEffect(() => {
    fetchIssues()
  }, [])

  if (loading) return <div style={{ minHeight: "70vh" }}>Loading..</div>

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
