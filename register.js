import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "reactstrap";
import {
  Button,
  Row,
  Form,
  Col,
  FormGroup,
  FormControl
} from "react-bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faArrowLeft,
  faEllipsisV
} from "@fortawesome/free-solid-svg-icons";
import { doPost } from "../../util/network/services";

library.add(faSearch);
library.add(faArrowLeft);
library.add(faEllipsisV);

class Register extends Component {
  constructor() {
    super();
    this.state = {
      data: {}
    };
  }

  register() {
    doPost("users", this.state.data).then(
      response => {
        alert(response);
      },
      error => {}
    );
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Row className="header">
            <Col xs="6" sm="2" />
            <Col xs="6" sm="8">
              <p className="index5">
                <NavLink to="/">
                  <FontAwesomeIcon icon="arrow-left" />
                </NavLink>
                <button className="button register_search">
                  <div class="pull-right">
                    <FontAwesomeIcon icon="search" />
                  </div>
                </button>

                <NavLink to="/login">
                  <button className="button button_register_login">
                    Log In
                  </button>
                </NavLink>

                <FontAwesomeIcon icon="ellipsis-v" />
              </p>
              {/* <div className="twitter_header_logo">
                <Image
                  src={require("../../images/twitter.png")}
                  height={30}
                  width={50}
                />
              </div> */}
            </Col>
            <Col sm="2" />
          </Row>
          <Row className="create_account_twitter_logo">
            <Col xs="6" sm="3" />
            <Col
              xs="6"
              sm="6"
              className="create_account_twitter_logo_background"
            >
              <img src={require("../../images/twitter.png")} />
            </Col>
            <Col sm="3" />
          </Row>
          <Row className="create_account_line">
            <Col xs="6" sm="3" />
            <Col xs="6" sm="6">
              <p>Create Account</p>
            </Col>
            <Col sm="3" />
          </Row>
          <Row className="reg_form">
            <Col xs="6" sm="3" />
            <Col xs="6" sm="6" className="main_form">
              <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                  <Col sm={2} />
                  <Col sm={10}>
                    <FormControl
                      type="name"
                      placeholder="FirstName"
                      name="name"
                    />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalEmail">
                  <Col sm={2} />
                  <Col sm={10}>
                    <FormControl
                      type="email"
                      placeholder="Email"
                      name="email"
                    />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col sm={2} />
                  <Col sm={10}>
                    <FormControl
                      name="password"
                      type="password"
                      placeholder="Password"
                    />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button type="submit" onClick={this.register()}>
                      Sign Up
                    </Button>
                  </Col>
                </FormGroup>
              </Form>
            </Col>
            <Col sm="3" />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Register;
