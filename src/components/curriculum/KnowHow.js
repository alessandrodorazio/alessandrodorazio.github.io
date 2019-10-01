import React, { Component } from "react"
import Badge from "reactstrap/es/Badge"

export default class KnowHowCurriculum extends Component {

  render(type, name, wr){

    let color

    switch (this.props.type) {
      case 1:
        color = "success"
        break
      case 2:
        color = "info"
        break
      case 3:
        color = "primary"
        break
      case 4:
        color = "danger"
        break
      default:
        color = "none"
    }

    function wrap(wr){
      if(wr === true) return (<br/>)
      else return (<span>&nbsp;&nbsp;</span>)
    }

    if(this.props.type === 0) return ( <span>{this.props.name}{wrap(this.props.wr)}</span> )
    else return ( <span><Badge color={color}>{this.props.name}</Badge>{wrap(this.props.wr)}</span> )
  }

}