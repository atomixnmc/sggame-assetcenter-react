import React from "react";
import {
  Button,
  Row,
  Col,
  Container,
  Alert,
  Image,
  Badge,
  Breadcrumb,
  Carousel,
  Card
} from "react-bootstrap";
//import Card from "react-bootstrap/Card";
//import Accordion from "react-bootstrap/Accordion";

export default function AssetDetail(props) {
  const { asset } = props;

  return (
    <div style={{ borderBottom: "1px solid #333", paddingBottom: "8px" }}>
      <Card>
        <Card.Header>
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Data</Breadcrumb.Item>
          </Breadcrumb>
          <b style={{ color: "#003468" }}>
            {asset.title} - {asset.author}
          </b>
        </Card.Header>
        <Card.Body>
          <Container>
            <Row>
              <Col md={12} lg={12}>
                {asset.images && (
                  <Carousel>
                    {asset.images.map((img, imgIndex) => (
                      <Carousel.Item key={imgIndex}>
                        <img
                          className="d-block w-100"
                          src={img.url}
                          alt={img.title}
                        />
                        <Carousel.Caption>
                          <h3>{img.title}</h3>
                        </Carousel.Caption>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                )}
              </Col>
            </Row>
            <Row>
              <Col>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col md={9} lg={9}>
                <div>
                  <b>{asset.title}</b>
                </div>
                <div>{asset.code}</div>
                <div>
                  <b>$ 1,111</b>
                  <i> Free</i>
                </div>
                <h6>
                  <Badge variant="secondary">Tag1</Badge>
                  <Badge variant="secondary">Tag2</Badge>
                </h6>
                <div> Author</div>
                <div>
                  <b>{asset.author}</b>
                </div>
                <div> Date</div>
                <div>
                  <b>{asset.created}</b>
                </div>
              </Col>
              <Col md={3} lg={3}>
                <img
                  style={{ width: "100%" }}
                  src="https://via.placeholder.com/600"
                />
                <div>
                  <Image
                    src="https://via.placeholder.com/30/CCCCCC/FFFFFF?text=O"
                    style={{ border: "3px" }}
                    roundedCircle
                  />
                  <Image
                    src="https://via.placeholder.com/30/CCCCCC/FFFFFF?text=O"
                    style={{ border: "3px" }}
                    roundedCircle
                  />
                  <Image
                    src="https://via.placeholder.com/30/CCCCCC/FFFFFF?text=O"
                    style={{ border: "3px" }}
                    roundedCircle
                  />
                </div>
              </Col>
            </Row>

            <Row>
              <Col md={6} lg={6}>
                <div>Format/Specs</div>
                <div>
                  <b></b>
                </div>
              </Col>
              <Col md={6} lg={6}>
                <div>Color</div>
                <div>
                  <b></b>
                </div>
              </Col>
            </Row>
            <Row>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
              <Col></Col>
            </Row>
            <Row>
              <Col>
                <h5>Description</h5>
                <p>{asset.description}</p>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <h5>Download</h5>
                </div>
                <div>
                  <a href="#">Download 1</a>
                </div>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}
