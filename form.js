import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class Form extends Component {
  render() {
    return (
      <div className="Login">
        <form>
          <Row>
            <Col>
              <p>
                <input type="text" placeholder="Username " name="userName" />
              </p>
            </Col>
            <Col>
              <p>
                <input type="text" placeholder="Password " name="password" />
              </p>
              <div className="forgotPassword">
                <p>Forgot Password?</p>
              </div>
            </Col>
            <Col>
              <p>
                <button>Log in</button>
              </p>
            </Col>
          </Row>
        </form>
      </div>
    );
  }
}

export default Form;
