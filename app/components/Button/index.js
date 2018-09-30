import React, { Component } from "react";
import "./styles.less"

export default class Button extends Component{
  render(){
    const { children } = this.props;

    return (
      <button className="Button">
        { children }
      </button>
    )
  }
}
