import React from "react";
import BookAService from "./components/BookAService";
import Navbar from "./components/Navbar";
import { Container } from "react-bootstrap";

import "./App.css";
const containerStyle = {
  maxWidth: "1100px",
  paddingLeft: "50px",
  paddingTop: "20px"
};
const App = props => {
  return (
    <Container style={containerStyle}>
      <Navbar />
      <BookAService />
    </Container>
  );
};

export default App;
