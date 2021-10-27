import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import TagScore from "./components/TagScore";
import Games from "./components/Games";
import Footer from "./components/Footer";
import TESTCHECK from "./components/TESTCHECK";

class App extends Component {
  state = {
    details: [],
    div_tags: [],
    game_url: "",
  };

  handleCreate = (data) => {
    //console.log(data);
    this.setState({ game_url: data.pop() });
    console.log(this.state.game_url);
    this.setState({ details: data });
    console.log(this.state.details);
  };

  render() {
    return (
      <div className="App">
        {/* <h1>hello</h1> */}
        {/* <TESTCHECK details={this.state.details} /> */}
        <Header />
        <Search tags={this.state.div_tags} onCreate={this.handleCreate} />
        <TagScore details={this.state.details} />
        <Games details={this.state.details} url={this.state.game_url} />
        <Footer />
      </div>
    );
  }
}

export default App;
