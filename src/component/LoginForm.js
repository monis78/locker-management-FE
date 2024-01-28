import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";

function LoginForm() {
  const responseMessage = (response) => {
    const cred = response.credential;
    console.log(response, cred);
    axios
      .get("https://www.googleapis.com/oauth2/v2/userinfo", {
        headers: {
          Authorization: `Bearer ${cred}`,
        },
      })
      .then((resp) => {
        console.log(resp);
      });
  };
  const errorMessage = (error) => {
    console.log(error);
  };
  return (
    <Form className="m-3 w-50">
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Sign in</Button>
        </Col>
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
      </Form.Group>
    </Form>
  );
}

export default LoginForm;
