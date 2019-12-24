import React from "react"
import { Row, Col } from "react-grid-system"

import Layout from "../components/layout"
import Header from "../components/header"
import Main from "../components/main"
import Filters from "../components/filters"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header siteTitle="Open Source Labs" />
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 1280,
      }}
    >
      <div className="line" />
      <Filters />
      <Main />
    </div>
  </Layout>
)

export default IndexPage
