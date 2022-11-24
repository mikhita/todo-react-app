import React, { Component } from "react";
import styled from "styled-components";
import Container from "./components/Container";

class App extends Component {
  render() {
    return (
      <Div>
        <h1>ToDo</h1>
        <Container />
      </Div>
    );
  }
}

export default App;

const Div = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  background-color: #ebeff2;
  h1 {
    font-size: xx-large;
    color: #007fdb;
  }
`;
