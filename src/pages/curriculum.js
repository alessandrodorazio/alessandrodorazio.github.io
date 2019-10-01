import React, { Component } from "react"
import Layout from "../components/layout"
import {
  faWatchFitness,
  faChild,
  faEnvelope,
  faPhone,
  faMobile,
  faFileCertificate,
  faUserGraduate,
  faLocationArrow,
  faBriefcase,
  faVideo,
  faKeynote,
  faIdBadge,
} from "@fortawesome/pro-duotone-svg-icons"
import {
  faLaravel,
  faJava,
  faJs,
  faGithub,
  faPhp,
  faWordpress,
  faReact,
  faAndroid,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"
import ProjectCurriculum from "../components/curriculum/project"
import SEO from "../components/seo"
import KnowHowCurriculum from "../components/curriculum/KnowHow"
import IconTextComponent from "../components/utility/iconText"
import Container from "reactstrap/es/Container"
import Photo from "../images/foto.png"

export default class CurriculumPage extends Component {
  constructor(props) {
    super(props)
    this.title = "Curriculum"
  }

  render() {
    const date = "01/08/19"

    const anagrafica = [
      {
        text: "Alessandro D'Orazio",
        icon: faIdBadge,
      },
      {
        text: "Born in Pescara on 3 February 1999",
        icon: faChild,
      },
      {
        text: "Computer science studente @ UnivAQ and Web developer @ Promobulls",
        icon: faBriefcase,
      },
      {
        text: "Pescara/L'Aquila",
        icon: faLocationArrow,
      },
    ]

    const contatti = [
      {
        text:
          "<a href='mailto:me@alessandrodorazio.it' class='link' title='Send me an email'>me@alessandrodorazio.it</a>",
        icon: faEnvelope,
      },
      {
        text:
          "<a href='tel:38978707248' class='link' title='Call me'>+39 3898707248</a>",
        icon: faPhone,
      },
      {
        text:
          "<a href='https://www.linkedin.com/in/alessandrodorazio' rel='noreferrer noopener' target='_blank' class='link' title='LinkedIn profile'>LinkedIn</a>",
        icon: faLinkedin,
      },
    ]

    const formazione = [
      {
        icon: faUserGraduate,
        text:
          'High school diploma obtained with <span className="badge badge-primary">86/100</span> in computer science at the l\'IIS "A. Volta" in Pescara',
      },
      {
        icon: faUserGraduate,
        text: "Basic safety at work course",
      },
      {
        icon: faVideo,
        text: "React with Redux",
      },
      {
        icon: faVideo,
        text: "Laravel from scratch",
      },
      {
        icon: faFileCertificate,
        text: "Corso for Web developers 2.0",
      },
      {
        icon: faFileCertificate,
        text: "ECDL",
      },
      {
        text: "Codemotion MI 17/18 & Codemotion Rome 18",
        icon: faKeynote,
      },
    ]

    const experiences = [
      {
        name: "Promobulls",
        description: "Full stack developer",
        icon: faBriefcase,
        year: "2019",
        color: "success",
      },
      {
        name:"Dario Belfiore",
        description: "Website",
        icon: faWordpress,
        year: "2019",
      },
      {
        name: "MediaWellness",
        description: "Website",
        icon: faLaravel,
        year: "2019",
      },
      {
        name: "Kidland Viking",
        description: "Website",
        icon: faWordpress,
        year: "2019",
      },
      {
        name: "PooPooLess",
        description: "Single Page Application",
        icon: faReact,
        year: "2019",
      },
      {
        name: "Andrea Di Berto",
        description: "Single Page Application",
        icon: faReact,
        year: "2019",
      },
      {
        name: "ASD Judo Kuroki",
        description: "Management software",
        icon: faLaravel,
        year: "2018",
      },
      {
        name: "Telemetrica",
        description: "Computer technician",
        icon: faBriefcase,
        year: "2016",
      },
    ]

    const projects = [
      {
        name: "Motorway Management System",
        link: "https://github.com/alessandrodorazio/MMS",
        icon: faJava,
        year: "2019",
      },
      {
        name: "SocialBook",
        link: "https://github.com/alessandrodorazio/SocialBook",
        icon: faPhp,
        year: "2019",
      },
      {
        name: "EcoToll",
        link: "https://github.com/alessandrodorazio/ECOtoll",
        icon: faJava,
        year: "2019",
      },
      {
        name: "CodiceFiscale.JS",
        link: "https://github.com/alessandrodorazio/CodiceFiscale.js",
        icon: faJs,
        year: "2018",
      },
      {
        name: "Web resource",
        link: "https://github.com/alessandrodorazio/Risorse-per-il-Web",
        icon: faGithub,
        year: "2018",
      },
      {
        name: "Inventory",
        icon: faLaravel,
        year: "2017",
      },
      {
        name: "BeDev",
        icon: faMobile,
        description: "Ionic framework + backend in PHP",
        year: "2016",
      },
      {
        name: "WeightGraph",
        description: "Ionic framework",
        icon: faAndroid,
        year: "2016",
      },
      {
        name: "HeartLet",
        description: "Arduino + Ionic",
        icon: faWatchFitness,
        year: "2016",
      },
    ]

    const competenze = [
      "Communication-relational skills",
      "Accounting management",
      "Problem solving",
      "Teamworking",
      "Time Keeping",
    ]

    const interessi = [
      "Big Data",
      "Internet of Things",
      "Operative research",
      "Machine Learning",
    ]

    const knowhow = [
      {
        type: 0, //generico
        name: "Algorithms and data structure",
        wr: true,
      },
      {
        type: 0,
        name: "UI&UX Design",
        wr: true,
      },
      {
        type: 1, //informatica
        name: "Linux",
      },
      {
        type: 1,
        name: "Git",
        wr: true,
      },
      {
        type: 2, //altro
        name: "English B1",
      },
      {
        type: 2,
        name: "Driving license B",
        wr: true,
      },
      {
        type: 3, //linguaggi
        name: "C",
      },
      {
        type: 3,
        name: "Java",
      },
      {
        type: 3,
        name: "Javascript",
      },
      {
        type: 3,
        name: "PHP",
      },
      {
        type: 3,
        name: "SQL",
        wr: true,
      },
      {
        type: 4,
        name: "Bootstrap",
      },
      {
        type: 4,
        name: "Ionic",
      },
      {
        type: 4, //framework
        name: "Laravel",
      },
      {
        type: 4,
        name: "React",
      },
    ]
    return (
      <Layout title={this.title}>
        <SEO title={this.title} description="Curriculum Alessandro D'Orazio" />
        <Container className="mt-3 pl-2 pr-2 pl-lg-4 pr-lg-4">
          <h1 className="text-primary">{this.title}</h1>
          <div className="font-weight-light">
            <div className="row">
              <div className="col-md-9">
                <div className="row">
                  <div className="col-md-6 mt-2">
                    <h4>Personal data</h4>
                    {anagrafica.map((a, index) => (
                      <IconTextComponent
                        key={index}
                        icon={a.icon}
                        text={a.text}
                      />
                    ))}
                  </div>
                  <div className="col-md-6 mt-2">
                    <h4>Contacts</h4>
                    {contatti.map((a, index) => (
                      <IconTextComponent
                        key={index}
                        icon={a.icon}
                        text={a.text}
                      />
                    ))}
                  </div>
                </div>
                <hr />
                <h4>Training</h4>
                {formazione.map((f, index) => (
                  <IconTextComponent key={index} icon={f.icon} text={f.text} />
                ))}
              </div>
              <div className="col-md-3 mt-2">
                <img
                  src={Photo}
                  className="img-fluid img-thumbnail"
                  alt="Profile photo"
                />
                <p className="text-muted small text-right">
                  Last update: {date}
                </p>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-6">
                <h4>Professional experiences</h4>
                {experiences.map((experience, index) => (
                  <ProjectCurriculum
                    key={index}
                    name={experience.name}
                    description={experience.description}
                    icon={experience.icon}
                    year={experience.year}
                    color={experience.color}
                  />
                ))}
              </div>
              <div className="col-md-6 mt-2">
                <h4>Projects</h4>
                {projects.map(project => (
                  <ProjectCurriculum
                    key={project.name}
                    name={project.name}
                    description={project.description}
                    link={project.link}
                    icon={project.icon}
                    year={project.year}
                  />
                ))}
              </div>
            </div>
            <hr />
            <div className="row mt-4">
              <div className="col-md-4">
                <h5>Know how</h5>
                <p>
                  {knowhow.map((kh, index) => (
                    <KnowHowCurriculum
                      key={index}
                      type={kh.type}
                      name={kh.name}
                      wr={kh.wr}
                    />
                  ))}
                </p>
              </div>
              <div className="col-md-4">
                <h5>Expertise</h5>
                <p>
                  {competenze.map((competenza, index) => (
                    <span key={index}>
                      {competenza} <br />
                    </span>
                  ))}
                </p>
              </div>
              <div className="col-md-4">
                <h5>Interests</h5>
                <p>
                  {interessi.map((interesse, index) => (
                    <span key={index}>
                      {interesse} <br />
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <p className="text-muted mt-2">
              I authorize the processing of personal data contained in my curriculum vitae based on art. 13 of Legislative Decree 196/2003 and art. 13 GDPR 679/16.
            </p>
          </div>
        </Container>
      </Layout>
    )
  }
}
