/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from "react"

import Header from "./header"
import '../style/bootstrap.css'
import '../style/custom.css'
import '../style/fontawesome.css'
import Container from "reactstrap/es/Container"
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import FooterComponent from "./footer"
import { config } from '@fortawesome/fontawesome-svg-core'

export default class Layout extends Component {

  render(){
    config.autoAddCss = false
    return (
      <div className="bg-light Site">
        <OutboundLink
          href="https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/"
        />
        <Header page={this.props.title} prev={this.props.prev}/>
        <div className="Site-content">
          <main>{this.props.children}</main>
        </div>
        <FooterComponent />
      </div>
    )
  }
}
