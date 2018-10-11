import React, { Component } from "react";
import {
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Button,
  FormGroup
} from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios/dist/axios";

class FanHome extends Component {

  constructor(props) {
    super(props);

  }
}

render() {
  return (
    <main className="App">
      <Link to="/"><Button size="lg" color="info" block>Home</Button></Link>
    <h2>This is the Fan Page</h2>
    </main>
  );
}

export default FanHome;
