import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default class NotFoundPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="404: Non trovato" />
        <h1>Page not found</h1>
        <a href="https://alessandrodorazio.it" title="Home page">
          Home page
        </a>
      </Layout>
    )
  }
}
