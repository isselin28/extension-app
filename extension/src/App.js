import React from "react";
import styled from "styled-components/macro";
import logo from "./logo.svg";
import "./App.css";

const Container = styled.div`
  width: 300px;
  height: 600px;
`;

function App() {
  return (
    <Container>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </Container>
  );
}

export default App;
