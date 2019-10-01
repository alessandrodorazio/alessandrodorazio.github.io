import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCommentSmile } from "@fortawesome/pro-duotone-svg-icons/faCommentSmile"

export default class Review extends Component {

  render(){

    return(
      <div className="bg-white p-4 text-muted" style={{ borderLeft: "3px solid #0068ff"}}>
        <p className="fa-lg font-weight-light text-primary mb-0" style={{ lineHeight: "18px" }}><FontAwesomeIcon icon={faCommentSmile} fixedWidth /> {this.props.name}</p>
        <p>{this.props.work}</p>
        <p className="mt-1 mb-0">{this.props.description}</p>
      </div>
    )

  }

}