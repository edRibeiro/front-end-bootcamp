import React, { Component } from "react"
import Headline from "./components/Headline"
import Button from "./components/Button"
import "./styles.less"

import { getItem, search } from "./services/api";
import storageService from "./services/storage";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Headline>Hello human!</Headline>
        <Button>Add to favorites</Button>
      </div>
    )
  }
}
