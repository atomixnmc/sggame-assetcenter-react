import React from "react";
import { Button, Row, Col, Container, Alert, Card } from "react-bootstrap";
//import Card from "react-bootstrap/Card";
//import Accordion from "react-bootstrap/Accordion";

export default function Hero() {
  return (
    <div style={{ borderBottom: "1px solid #333", paddingBottom: "8px" }}>
      <Card>
        <Card.Header>Useful Links</Card.Header>
        <Card.Body>
          <Container>
            <Row>
              <Col>
                <a href="#">Useful link 01</a>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}
