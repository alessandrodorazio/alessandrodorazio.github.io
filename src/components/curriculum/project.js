import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkSquare } from "@fortawesome/pro-duotone-svg-icons/faExternalLinkSquare"
import { Badge } from "reactstrap"

export default class ProjectCurriculum extends Component {

  render(name, link, description, icon, year){

    function externalSquare(link){
      if(link)
        return (
            <span>&nbsp;<FontAwesomeIcon icon={faExternalLinkSquare} fixedWidth /></span>
        )
      else
        return ("")
    }

    function desc(description){
      if(description)
        return (
          <span>
            &nbsp;
            <span className="small text-muted">{String(description)}</span>
          </span>
        )
      else
        return ("")
    }

    return (
      <div className="m-1">
        <a className={this.props.link?"link":""} href={this.props.link} rel="noopener noreferrer" target="_blank">
          <FontAwesomeIcon icon={this.props.icon} size="lg" fixedWidth />
          &nbsp;&nbsp;
          { String(this.props.name) }
        </a>
        {desc(this.props.description)}
        { externalSquare(this.props.link) }
        &nbsp;&nbsp;
        <Badge color={this.props.color?this.props.color:"primary"}>{String(this.props.year)}</Badge>
      </div>
    )
  }

}