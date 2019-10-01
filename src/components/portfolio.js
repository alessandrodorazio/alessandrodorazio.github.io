import React, { Component } from "react"
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default class PortfolioComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Card>
          <CardImg
            top
            width="100%"
            src={this.props.image}
            className="img-fluid"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>
              <h4>
                {this.props.title}{" "}
                <span className="float-right">
                  <FontAwesomeIcon icon={this.props.icon} />
                </span>
              </h4>
            </CardTitle>
            <CardText className="text-muted">
              <ul type="square">
                {this.props.mot.map(m => (
                  <li>{m}</li>
                ))}
              </ul>
            </CardText>
          </CardBody>
        </Card>
      </div>
    )
  }
}
