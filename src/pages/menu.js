import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Row from "reactstrap/es/Row"
import Col from "reactstrap/es/Col"
import { faHome } from "@fortawesome/pro-duotone-svg-icons/faHome"
import MenuItem from "../components/menu/item"
import { faSwords } from "@fortawesome/pro-duotone-svg-icons/faSwords"
import { faGraduationCap } from "@fortawesome/pro-duotone-svg-icons/faGraduationCap"
import { faKeyboard } from "@fortawesome/pro-duotone-svg-icons/faKeyboard"
import { faPhonePlus } from "@fortawesome/pro-duotone-svg-icons/faPhonePlus"
import { faEnvelopeOpenText } from "@fortawesome/pro-duotone-svg-icons/faEnvelopeOpenText"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin"
import Container from "reactstrap/es/Container"
import { faFolderOpen } from "@fortawesome/pro-duotone-svg-icons/faFolderOpen"

export default class MenuPage extends Component {
  prevPath

  constructor(props) {
    super(props)
    this.title = "Menu"

    if (props.location && props.location.state && props.location.state.prevPath)
      this.prevPath = props.location.state.prevPath
    else this.prevPath = "/"
  }

  render() {
    let links = [
      {
        title: "Home",
        link: "/",
        icon: faHome,
      },
      {
        title: "Skills",
        link: "/skills",
        icon: faSwords,
      },
      {
        title: "Curriculum",
        link: "/curriculum",
        icon: faGraduationCap,
      },
      {
        title: "Blog",
        link: "https://medium.com/@alessandrodorazio",
        icon: faKeyboard,
      },
    ]

    let social = [
      {
        title: "me@alessandrodorazio.it",
        link: "mailto:me@alessandrodorazio.it",
        icon: faEnvelopeOpenText,
      },
      {
        title: "389 8707248",
        link: "tel:3898707248",
        icon: faPhonePlus,
      },
      {
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/alessandrodorazio/",
        icon: faLinkedin,
      },
    ]

    return (
      <Layout title={this.title} prev={this.prevPath}>
        <SEO title={this.title} />
        <Container className="mt-3 pl-2 pr-2 pl-lg-4 pr-lg-4">
          <Row className="mh-100">
            <Col xs={12} md={6}>
              {links.map((link, i) => (
                <MenuItem
                  key={i}
                  title={link.title}
                  link={link.link}
                  icon={link.icon}
                  prev={this.prevPath}
                />
              ))}
            </Col>
            <Col xs={12} md={6}>
              <h2 className="mt-4 text-primary">Let's keep in touch!</h2>
              {social.map((s, i) => (
                <MenuItem key={i} title={s.title} icon={s.icon} link={s.link} />
              ))}
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}
