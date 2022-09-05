import React from "react";

import {
  Button,
  Row,
  Col,
  Container,
  Alert,
  Tabs,
  Tab,
  NavDropdown,
  Breadcrumb
} from "react-bootstrap";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
  FaYoutubeSquare
} from "react-icons/fa";
import { appTitle, copyRightText, disclamerText } from "../../config/appConfig";
export function MyFooter() {
  return (
    <Container
      style={{
        marginTop: "3rem",
        padding: "1rem",
        backgroundImage:
          "url(/images/background/gaming-glow-neon-technology.jpg)"
      }}
    >
      <Row>
        <Col>
          <h4>{appTitle}</h4>
          <h5>{copyRightText}</h5>
        </Col>
        <Col style={{ textAlign: "center" }}>
          <Button>
            <FaFacebookSquare />
          </Button>
          <Button>
            <FaYoutubeSquare />
          </Button>
          <Button>
            <FaTwitterSquare />
          </Button>
          <Button>
            <FaGithubSquare />
          </Button>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <h5>{disclamerText}</h5>
        </Col>
      </Row>
    </Container>
  );
}
