import React from "react";
import { Button } from "react-bootstrap";
import { Container, Row, Col, Card } from "react-bootstrap";
//import Card from "react-bootstrap/Card";

class AssetContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemSelected: null
    };
  }

  selectItem = (item) => {
    if (item != this.state.itemSelected) {
      this.setState({
        itemSelected: item
      });
    } else {
      this.setState({
        itemSelected: null
      });
    }
  };
  render() {
    const { asset = {} } = this.props;
    return (
      <Card>
        <Card.Header>Assets</Card.Header>
        <Card.Body>
          <div>
            {asset.contentAssets &&
              asset.contentAssets.map((assetItem) => (
                <div
                  key={assetItem.id}
                  style={{ border: "1px solid #333", textAlign: "left" }}
                >
                  <Container>
                    <Row
                      style={{
                        border: "1px solid #333",
                        height: "40px",
                        textAlign: "left"
                      }}
                    >
                      <Col>
                        {(assetItem.isInit && "Initial Inspection") ||
                          (assetItem.isCurrent && "Current")}
                      </Col>
                      <Col>{assetItem.date}</Col>
                      <Col>{assetItem.modifiedBy}</Col>
                      <Col>{assetItem.isShow}</Col>
                      {/* <Col>{assetItem.reportType}</Col> */}
                      <Col>{assetItem.source}</Col>
                    </Row>
                  </Container>
                </div>
              ))}

            <Container>
              <Row>
                <Col>
                  <h5>Requirements</h5>
                </Col>
              </Row>
              <Row>
                <Col>Item</Col>
                <Col>Size</Col>
                <Col>Cost</Col>
                <Col>Action</Col>
              </Row>
              {asset.requirements &&
                asset.requirements.map((requiredPackage) => (
                  <Row
                    key={requiredPackage.id}
                    style={{
                      padding: "8px 8px 8px 8px",
                      backgroundColor:
                        requiredPackage.item != this.state.itemSelected
                          ? ""
                          : "#c1dff2"
                    }}
                  >
                    <Col
                      onClick={(evt) => this.selectItem(requiredPackage.item)}
                    >
                      {requiredPackage.item != this.state.itemSelected ? (
                        requiredPackage.item
                      ) : (
                        <b>{requiredPackage.item}</b>
                      )}
                    </Col>
                    <Col>{requiredPackage.size}</Col>
                    <Col>{requiredPackage.cost}</Col>
                    <Col>{requiredPackage.action}</Col>
                  </Row>
                ))}
            </Container>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
export default AssetContent;
