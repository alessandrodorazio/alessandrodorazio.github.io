import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Col from "reactstrap/es/Col"
import Row from "reactstrap/es/Row"

export default class Skill extends Component {
  render() {
    return (
      <div className="text-muted mt-3">
        <h3>
          <FontAwesomeIcon icon={this.props.icon} className="text-primary" fixedWidth />{" "}
          {this.props.title}
        </h3>
        <Row className="align-items-center mt-3">
          <Col md={9}>
            <p
              className="lead pl-2"
              style={{ borderLeft: "2px solid #0068ff" }}
              dangerouslySetInnerHTML={{ __html: this.props.description }}
            />
          </Col>
          <Col md={2} />
          <Col md={1}>
            <FontAwesomeIcon
              icon={this.props.bigIcon}
              className="float-right d-none d-md-block"
              size="4x"
              fixedWidth
            />
          </Col>
        </Row>
      </div>
    )
  }
}
