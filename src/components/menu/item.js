import React, { Component } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome } from "@fortawesome/pro-duotone-svg-icons/faHome"

export default class MenuItem extends Component {

  render() {
    if(this.props.link.charAt(0) == '/')
      return (
        <p className="lead mt-4">
          <AniLink duration={0.5} cover to={this.props.link} title={this.props.title} className={ (this.props.prev===this.props.link)?"text-primary link fa-lg":"link-muted fa-lg" }>
            <FontAwesomeIcon icon={ this.props.icon } fixedWidth />
            &nbsp;
            {this.props.title}
          </AniLink>
        </p>
      )
    else
      return (
        <p className="lead mt-4">
          <a cover href={this.props.link} title={this.props.title} className="link-muted fa-lg" rel="noreferrer noopener" target="_blank">
            <FontAwesomeIcon icon={ this.props.icon } fixedWidth />
            &nbsp;
            {this.props.title}
          </a>
        </p>
      )

  }

}