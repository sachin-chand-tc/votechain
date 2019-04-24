import React, { Component } from "react";
import { Form, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap/Form'


class Login extends Component {
  render() {
    return (
      <div className="Login">
        <Form>
          <Form.Label> Email address </Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form>;
      </div>
    );
  }
}

export default Login;
