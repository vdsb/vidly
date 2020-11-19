import "./App.css";
import React, { Component } from "react";
import Movies from "./Components/Movies";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Movies />
      </main>
    );
  }
}

export default App;
