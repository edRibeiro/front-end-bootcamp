import React, { Component } from "react"
import Headline from "./components/Headline"
import "./styles.less"

import { getItem, search } from "./services/api";
import storageService from "./services/storage";

export default class App extends Component {

  componentDidMount(){
    storageService
  }

  render() {
    return (
      <div className="App">
        <Headline>Hello human!</Headline>
      </div>
    )
  }
}
