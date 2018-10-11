import React, { Component } from "react";
import logo from "./logos.png";
import "./App.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from "reactstrap";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar color="inverse" light expand="md">
          <NavbarBrand href="/">Fanbase</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/layouts/fan/FanHome.js">Fans</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Creators</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Learners</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/FanbaseExchange">
                Github
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <a
              className="App-link"
              href="http://fnbsx.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join our ICO!
            </a>
            <br />
            <a
              className="App-link"
              href="http://fnbsx.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn About Us!
            </a>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
