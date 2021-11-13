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
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      div_tags: "",
      gameImage_url: [],
      game_steamURL: [],
      count_details: 0,
    };
  }

  handleCreate = (data, searchedTag) => {
    console.log(data);
    this.setState({ game_steamURL: [] });
    this.setState({ gameImage_url: [] });
    for (let i = 0; i < 5; i++) {
      const addsteamURL = this.state.game_steamURL.concat(data.pop());
      this.setState({ game_steamURL: addsteamURL });
    }

    for (let i = 0; i < 5; i++) {
      const addimageURL = this.state.gameImage_url.concat(data.pop());
      this.setState({ gameImage_url: addimageURL });
    }

    console.log(this.state.game_steamURL);
    console.log(this.state.gameImage_url);
    this.setState({ details: data });
    //console.log(this.state.details);
    this.setState({ div_tags: searchedTag });
    this.setState({ count_details: this.state.details.length });
  };

  handleAdd = (data) => {
    //console.log(data);

    this.setState({ div_tags: this.state.div_tags + "," + data }, () => {
      //console.log(this.state.div_tags);
    });
  };

  render() {
    return (
      <div className="App">
        {/* <h1>hello</h1> */}
        {/* <TESTCHECK details={this.state.details} /> */}
        <Header />
        <Search tags={this.state.div_tags} onCreate={this.handleCreate} />
        <TagScore
          details={this.state.details}
          count={this.state.count_details}
          onAdd={this.handleAdd}
        />
        <Games
          details={this.state.details}
          url={this.state.gameImage_url}
          steamURL={this.state.game_steamURL}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
