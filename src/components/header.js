import React, { Component } from "react"
import MePhoto from "../images/me.png"
import { Row, Col, Container } from "reactstrap"
import { faBars } from "@fortawesome/pro-duotone-svg-icons/faBars"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { faTimes } from "@fortawesome/pro-duotone-svg-icons/faTimes"

export default class Header extends Component {
  prev

  constructor(props) {
    super(props)
    this.prev = props.prev

    if (typeof window !== 'undefined') {
      this.prevPath = window.location.pathname
    }else{
      this.prevPath = "/"
    }

  }

  render(page, prev) {
      return (
        <div>
          <header className="pt-3 bg-primary pb-4">
            <Container>
              <Row className="align-items-center">
                <Col xs={3} md={2}>
                  <AniLink fade to="/">
                    <img src={MePhoto} className="img-fluid rounded-circle float-right" style={{ maxWidth: "64px" }} alt="Profile photo"/>
                  </AniLink>
                </Col>
                <Col xs={7} md={8}>
                  <AniLink className="text-white" fade to="/"><strong >Alessandro D'Orazio</strong></AniLink>
                  <br/>
                  <span className="font-weight-light text-white-50">Web developer</span>
                </Col>
                <Col xs={2}>
                  <AniLink id="menuButton" state={{ prevPath: this.prevPath }} swipe direction={ this.props.page==="Menu"?"up":"down"} duration={0.35} entryOffset={80} top={ this.props.page==="Menu" ? "entry" : "exit" } to={ this.props.page==="Menu" ? this.prev : "/menu" } className="link">
                    <FontAwesomeIcon className="text-white" icon={ this.props.page==="Menu"?faTimes:faBars} size="2x" />
                  </AniLink>
                </Col>
              </Row>
            </Container>
          </header>
        </div>

      )

  }

}
