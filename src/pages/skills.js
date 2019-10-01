import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Skill from "../components/skill"
import { faSearchPlus } from "@fortawesome/pro-duotone-svg-icons/faSearchPlus"
import { faPhoneLaptop } from "@fortawesome/pro-duotone-svg-icons/faPhoneLaptop"
import { faPresentation } from "@fortawesome/pro-duotone-svg-icons/faPresentation"
import { faTasks } from "@fortawesome/pro-duotone-svg-icons/faTasks"
import { faBusinessTime } from "@fortawesome/pro-duotone-svg-icons/faBusinessTime"
import { faDraftingCompass } from "@fortawesome/pro-duotone-svg-icons/faDraftingCompass"
import { faCss3 } from "@fortawesome/free-brands-svg-icons/faCss3"
import { faFileSearch } from "@fortawesome/pro-duotone-svg-icons/faFileSearch"
import { faUserTag } from "@fortawesome/pro-duotone-svg-icons/faUserTag"
import { faHeadset } from "@fortawesome/pro-duotone-svg-icons/faHeadset"
import { faClipboardListCheck } from "@fortawesome/pro-duotone-svg-icons/faClipboardListCheck"
import { faShippingFast } from "@fortawesome/pro-duotone-svg-icons/faShippingFast"
import Container from "reactstrap/es/Container"

export default class SkillsPage extends Component {
  constructor(props) {
    super(props)
    this.title = "Skills"
  }

  render() {
    const skills = [
      {
        title: "Responsive",
        description: "Most of the traffic on a website comes from smartphones. Therefore, achieving an optimized layout for both smartphone and computer (and not only) is one of the key factors that improves the usability of a website. <Br /> For this reason, <strong> every product is designed in three different versions </strong>: smartphones, tablets and computers. ",
        icon: faPhoneLaptop,
        bigIcon: faCss3,
      },
      {
        title: "Search Engine Optimization",
        description: "Search engine optimization is a key factor for a brand. Every company must be able to be found on the Internet from its niche through search engines. <br /> Each product is designed to be SEO-friendly, that is to be found by the most used search engines. ",
        icon: faSearchPlus,
        bigIcon: faFileSearch,
      },
      {
        title: "UX Design",
        description:
          "During the analysis phase, I optimize interactions with the user, in order to increase his satisfaction, improving the usability, ease of use and elegance of a product. <br /> Before developing a project , are proposed to the client of the layouts with the relative interactions. ",        icon: faDraftingCompass,
        bigIcon: faUserTag,
      },
    ]

    const remote = [
      {
        title: "Communication",
        description: "I am always available to make a call or a video conference to discuss your next product. I provide various communication channels in order to make the working relationship quick and functional.",
        icon: faPresentation,
        bigIcon: faHeadset,
      },
      {
        title: "Organization",
        description: "Each project is subdivided into tasks which are assigned a priority, in order to be able to develop the key functionalities first, and then the secondary ones. <br/> Having a good organization is fundamental especially in the analysis phase, where you carry out the design choices that will characterize the product. ",
        icon: faTasks,
        bigIcon: faClipboardListCheck,
      },
      {
        title: "Time Keeping",
        description: "The development of functional and efficient code allows faster times for the development of the final product. Each client receives a detailed overview of the hours spent on a given project.",
        icon: faBusinessTime,
        bigIcon: faShippingFast,
      },
    ]

    return (
      <Layout title={this.title}>
        <SEO title={this.title} />

        <Container className="mt-3 pl-2 pr-2 pl-lg-4 pr-lg-4">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-primary">{this.title}</h1>
              {skills.map((skill, index) => (
                <Skill
                  key={index}
                  title={skill.title}
                  description={skill.description}
                  icon={skill.icon}
                  bigIcon={skill.bigIcon}
                />
              ))}
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <h2 className="mt-3 mb-4 text-primary">Remote work</h2>
              {remote.map((rem, index) => (
                <Skill
                  key={index}
                  title={rem.title}
                  description={rem.description}
                  icon={rem.icon}
                  bigIcon={rem.bigIcon}
                />
              ))}
            </div>
          </div>

        </Container>
      </Layout>
    )
  }
}
