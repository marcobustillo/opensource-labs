import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import Main from "../components/main"
import Filters from "../components/filters"
import Pagination from "../components/pagination"
import SEO from "../components/seo"
import { StateProvider } from "../context/FilterContext.js"

const IndexPage = () => (
  <StateProvider>
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
        <Pagination />
      </div>
    </Layout>
  </StateProvider>
)

export default IndexPage
