import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default class IconTextComponent extends Component {

 render(icon, text) {
   return (
     <div>
       <FontAwesomeIcon icon={this.props.icon} fixedWidth /> <span dangerouslySetInnerHTML={{ __html: this.props.text }} />
     </div>
   )
 }

}