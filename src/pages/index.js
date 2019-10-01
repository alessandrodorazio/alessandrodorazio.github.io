import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Col from "reactstrap/es/Col"
import Row from "reactstrap/es/Row"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTasks } from "@fortawesome/pro-duotone-svg-icons/faTasks"
import FotoPlancer from "../images/plancer.png"
import FotoAdb from "../images/adb.png"
import { faBrowser } from "@fortawesome/pro-duotone-svg-icons/faBrowser"
import Container from "reactstrap/es/Container"
import { faCheck } from "@fortawesome/pro-duotone-svg-icons/faCheck"
import { faHandshake } from "@fortawesome/pro-duotone-svg-icons/faHandshake"
import { faUserTie } from "@fortawesome/pro-duotone-svg-icons/faUserTie"
import { faCommentsAlt } from "@fortawesome/pro-duotone-svg-icons/faCommentsAlt"
import PortfolioComponent from "../components/portfolio"
import { faReact } from "@fortawesome/free-brands-svg-icons/faReact"
import { faWordpress } from "@fortawesome/free-brands-svg-icons/faWordpress"
import Sito1 from "../images/portfolio/sito1.png"
import Sito2 from "../images/portfolio/sito2.png"
import { faTools } from "@fortawesome/pro-duotone-svg-icons/faTools"

export default class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.title = "Home"
  }

  render() {

    let reasons = [
      "Detailed estimate of time and costs",
      "Weekly overview",
      "Quick replies during development",
      "Studies and market research",
      "Use of new and reliable technologies",
    ]

    let portfolio = [
      {
        title: "Andrea Di Berto",
        image: Sito1,
        icon: faReact,
        mot: ["UX Design", "Background video", "Animations", "Modern style"],
      },
      {
        title: "Kidland Viking",
        image: Sito2,
        icon: faWordpress,
        mot: [
          "UX Design",
          "360 ° customization of the template",
          "Increased conversions",
        ],
      },
    ]

    return (
      <Layout title={this.title}>
        <SEO title={this.title} />
        <Container className="mt-3 mb-3 pl-2 pr-2 pl-lg-4 pr-lg-4">
          <h1 className="text-primary">Alessandro D'Orazio</h1>
          <Row>
            <Col md={10}>
              <p className="fa-2x font-weight-light pt-2">
                <span className="text-primary">Hi</span>, I'm a web developer based in Pescara (Italy) and I can help you make your next product.
              </p>

              <p className="lead font-weight-light pt-3 text-muted">
                Analysis, design and development of Web and Mobile applications.
                <br />
                Do you have a project to discuss?
                <br />
                Send an email at&nbsp;
                <a
                  href="mailto:me@alessandrodorazio.it"
                  title="Send me an email"
                >
                  me@alessandrodorazio.it
                </a>
              </p>
            </Col>
          </Row>
          <div>
            <div className="lead text-muted">
              <div className="mt-4">
                <Row className="align-self-center">
                  <Col md={7}>
                    <h2 className="text-primary">
                      <FontAwesomeIcon icon={faTasks} fixedWidth />
                      &nbsp;&nbsp;Management software
                    </h2>
                    <p className="mt-1">
                      Tailor-made business solutions, designed to manage your business data using the latest security techniques.
                      Developed with Laravel, the most widely used PHP framework at the moment.
                      <strong>
                        A management software speeds up the process of digitizing and using data.
                      </strong>
                    </p>
                  </Col>
                  <Col md={1} />
                  <Col md={4}>
                    <Container>
                      <p className="text-left text-md-center mt-4">
                        <img
                          src={FotoPlancer}
                          className="img-fluid desaturate"
                          alt="Logo Plancer"
                        />{" "}
                        <span className="ibm fa-lg">Plancer</span>
                      </p>
                      <p className="text-left text-md-center mt-4">
                        <img
                          src="http://www.judokuroki.it/wp-content/uploads/2017/09/logokuroki_scritta_sito_piccolo.png"
                          style={{ maxWidth: "250px" }}
                          className="img-fluid desaturate"
                          alt="Logo Judo Kuroki"
                        />
                      </p>
                    </Container>
                  </Col>
                </Row>
              </div>

              <hr />

              <div className="mt-4">
                <Row className="align-self-center">
                  <Col md={7}>
                    <h2 className="text-primary">
                      <FontAwesomeIcon icon={faBrowser} fixedWidth />
                      &nbsp;&nbsp;Websites
                    </h2>
                    <p className="mt-1">
                      Web sites, developed with the latest technologies like React, are fundamental for a company. In fact, they are the central point of a company on the Internet. Having a functional and elegant website offers a better vision of the brand.
                      <strong>User Experience & User Interface included.</strong>
                    </p>
                  </Col>
                  <Col md={1}></Col>
                  <Col md={4}>
                    <Container>
                      <p className="text-left text-md-center mt-4">
                        <img
                          src={FotoAdb}
                          className="img-fluid desaturate"
                          style={{ maxWidth: "60px" }}
                          alt="Logo ADB"
                        />
                        &nbsp;<span className="ibm fa-lg">Andrea Di Berto</span>
                      </p>
                      <p className="text-left text-md-center mt-4">
                        <img
                          src="https://www.mediawellness.it/wp-content/uploads/2018/03/cropped-MediaWellness-VAW-trasparente.png"
                          style={{ maxWidth: "260px" }}
                          className="img-fluid desaturate"
                          alt="Logo MediaWellness"
                        />
                      </p>
                    </Container>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Container>
        <div className="bg-dark text-white">
          <Container className="pt-5 pb-5 pl-2 pr-2 pl-lg-4 pr-lg-4">
            <Row className="align-items-center">
              <Col md={6}>
                <h2 className="mb-4">
                  <FontAwesomeIcon icon={faHandshake} fixedWidth /> Why choose me?
                </h2>
                {reasons.map((r, i) => (
                  <p>
                    <FontAwesomeIcon icon={faCheck} fixedWidth />
                    &nbsp;{r}
                  </p>
                ))}
                <a
                  href="mailto:me@alessandrodorazio.it"
                  className="btn btn-outline-light btn-lg mt-1"
                >
                  <FontAwesomeIcon icon={faCommentsAlt} fixedWidth /> Contact me
                </a>
              </Col>
              <Col md={6} className="text-right d-none d-md-block">
                <FontAwesomeIcon icon={faUserTie} size="10x" />
              </Col>
            </Row>
          </Container>
        </div>

        <Container className="pt-5 pb-5 pl-2 pr-2 pl-lg-4 pr-lg-4">
          <h2 className="text-primary mb-3">
            <FontAwesomeIcon icon={faTools} fixedWidth /> Some examples...
          </h2>

          <Row>
            {portfolio.map((p, i) => (
              <Col md={6} className="mt-1">
                <PortfolioComponent
                  key={i}
                  title={p.title}
                  icon={p.icon}
                  image={p.image}
                  mot={p.mot.sort()}
                />
              </Col>
            ))}
          </Row>
          <p className="mt-2 text-muted">
            To view other products developed by me, contact me via <a href="mailto:me@alessandrodorazio.it">mail</a>
          </p>
        </Container>
      </Layout>
    )
  }
}
