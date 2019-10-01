import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/pro-light-svg-icons"
import Row from "reactstrap/es/Row"
import Col from "reactstrap/es/Col"
import Container from "reactstrap/es/Container"
import { faIdBadge } from "@fortawesome/pro-duotone-svg-icons/faIdBadge"
import { faPhonePlus } from "@fortawesome/pro-duotone-svg-icons/faPhonePlus"
import { faEnvelopeOpenText } from "@fortawesome/pro-duotone-svg-icons/faEnvelopeOpenText"

export default class FooterComponent extends Component {

  render() {
    return(
      <Container className="mt-2">
        <Row className="align-items-center">
          <Col md={6}>
            <p className="text-muted">
              {new Date().getFullYear()} Alessandro D'Orazio
              <br/>
              <FontAwesomeIcon icon={faIdBadge} fixedWidth /> DRZLSN99B03G482S
              <br/>
              <FontAwesomeIcon icon={faPhonePlus} fixedWidth /> <a href="tel:3898707248" className="link-muted">389/8707248</a>
              <br/>
              <FontAwesomeIcon icon={faEnvelopeOpenText} fixedWidth /> <a href="mailto:me@alessandrodorazio.it" className="link-muted">me@alessandrodorazio.it</a>
            </p>
          </Col>
          <Col md={6}>
            <footer className="sticky-top text-right mr-3 mb-2 text-muted font-weight-light">
              Made with <FontAwesomeIcon icon={faHeart} className="text-primary" fixedWidth /> by Alessandro D'Orazio
            </footer>
          </Col>
        </Row>

      </Container>
    )
  }

}
