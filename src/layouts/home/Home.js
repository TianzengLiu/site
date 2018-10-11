import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let self = this;
    return (
      <main className="container">
        <div className="homeContainer">
          <h1>Welcome to Fanbase</h1>
        </div>
        <div className="homeContainer">
          <Link to="/fan">
            <Button size="lg" value="fan" color="success" block>
              Fans
            </Button>
          </Link>
        </div>
        <div classname="homeContainer">
          <Link to="/educator">
            <Button size="lg" value="creator" color="info" block>
              Creators
            </Button>
          </Link>
        </div>
        <div classname="homeContainer">
          <Link to="/learner">
            <Button size="lg" value="learner" color="info" block>
              Learners
            </Button>
          </Link>
        </div>
        <div className="homeContainer">
          <h3>
            Using Address: <b>{self.props.account}</b>
          </h3>
        </div>
      </main>
    );
  }
}

export default Home;
