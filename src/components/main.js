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

  useEffect(() => {
    fetchIssues()
  }, [])

  if (loading) return <div>Loading..</div>

  return (
    <>
      <Row>
        {issueList.map(issue => {
          const title = issue.repository_url.split("/")
          return (
            <Col key={issue.id} xs={12} sm={12} lg={4}>
              <Card
                title={title[title.length - 1]}
                description={issue.title}
                issue={`Issue #${issue.number}`}
                gitHubLink={issue.html_url}
              />
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default Main
