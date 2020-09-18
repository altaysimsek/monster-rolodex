import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBox } from "./components/search-box/search-box.component"

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };
  }
  componentDidMount(props) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value })
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder="You can search monsters" handleChange={this.handleChange}></SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
