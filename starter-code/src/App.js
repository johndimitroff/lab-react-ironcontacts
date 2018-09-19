import React, { Component } from "react";
import "./App.css";
import ContactsList from "./ContactsList.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Iron Contacts</h1>
        </header>
        <ContactsList />
      </div>
    );
  }
}

export default App;
