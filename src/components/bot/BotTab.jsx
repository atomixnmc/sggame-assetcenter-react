import React from "react";
import { Button, Row, Col, Container, Alert, Tabs, Tab } from "react-bootstrap";
import JSONTree from "react-json-tree";

export default class BotTab extends React.Component {
  constructor(props) {
    super(props);

    const { workOrderJson, userJson } = this.props;
    this.state = {
      errors: [],
      selectedCommand: "workOrder",
      workOrder: "",
      locationCode: "",
      userId: "",
      commandResult: workOrderJson
    };
  }
  changeSelectedCommand = (command) => {
    this.setState({
      selectedCommand: command,
      errors: [],
      commandResult: null
    });
  };
  doCommand = (command, inputs) => {
    const { workOrderJson, userJson } = this.props;
    //console.log(command);
    const newErrors = [];
    if (command == "workOrder") {
      if (
        this.state.workOrder &&
        this.state.workOrder != "" &&
        this.state.locationCode &&
        this.state.locationCode != ""
      ) {
        workOrderJson.workOrder = this.state.workOrder;
        workOrderJson.locationCode = this.state.locationCode;

        this.setState({
          errors: [],
          commandResult: { ...workOrderJson }
        });
      } else {
        if (!this.state.workOrder || this.state.workOrder == "") {
          newErrors.push({
            field: "workOrder",
            desc: "Empty. Please input valid workOrder"
          });
        }
        if (!this.state.locationCode || this.state.locationCode == "") {
          newErrors.push({
            field: "locationCode",
            desc: "Empty. Please input valid locationCode"
          });
        }
        this.setState({
          errors: newErrors,
          commandResult: null
        });
      }
    } else if (command == "userId") {
      if (this.state.userId && this.state.userId != "") {
        userJson.userId = this.state.userId;
        this.setState({
          errors: [],
          commandResult: { ...userJson }
        });
      } else {
        if (!this.state.userId) {
          newErrors.push({
            field: "userId",
            desc: "Empty. Please input valid userId"
          });
        }
        this.setState({
          errors: newErrors,
          commandResult: null
        });
      }
    }
  };
  render() {
    const { errors, selectedCommand, commandResult } = this.state;
    const hasError = (field) =>
      errors.find((error) => error.field == field) != null;
    const errorStyle = { borderColor: "red", color: "red" };
    return (
      <Container>
        <Row>
          <Col md={4} lg={4}>
            <h3>Bot</h3>
          </Col>
        </Row>
        <Row>
          <Col md={2} lg={2}>
            <h5>Command</h5>
          </Col>
          <Col md={4} lg={4}>
            <select
              onChange={(evt) => this.changeSelectedCommand(evt.target.value)}
              value={this.state.selectedCommand}
            >
              <option value="workOrder">WorkOrder</option>
              <option value="userId">UserId</option>
            </select>
          </Col>
        </Row>
        <Row>
          <Col md={2} lg={2}>
            <h5>Params</h5>
          </Col>
          <Col md={6} lg={6}>
            <div>
              {selectedCommand == "workOrder" && (
                <div>
                  <input
                    placeholder="workOrder"
                    style={hasError("workOrder") ? errorStyle : {}}
                    value={this.state.workOrder}
                    onChange={(evt) =>
                      this.setState({ workOrder: evt.target.value })
                    }
                  />
                  <input
                    placeholder="locationCode"
                    style={hasError("locationCode") ? errorStyle : {}}
                    value={this.state.locationCode}
                    onChange={(evt) =>
                      this.setState({ locationCode: evt.target.value })
                    }
                  />
                </div>
              )}
              {selectedCommand == "userId" && (
                <div>
                  <input
                    placeholder="userId"
                    style={hasError("userId") ? errorStyle : {}}
                    value={this.state.userId}
                    onChange={(evt) =>
                      this.setState({ userId: evt.target.value })
                    }
                  />
                </div>
              )}
            </div>
          </Col>
          <Col md={4} lg={4}>
            <Button
              onClick={(evt) => this.doCommand(this.state.selectedCommand)}
            >
              Enter
            </Button>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <h4>Result (Text)</h4>
            <textarea
              rows={10}
              style={{ width: "100%" }}
              value={JSON.stringify(commandResult, null, 4)}
              onChange={(evt) => {
                return false;
              }}
            ></textarea>

            {commandResult && (
              <div>
                <h4>Result (Json)</h4>
                <JSONTree
                  hideRoot={true}
                  invertTheme={false}
                  data={commandResult}
                />
              </div>
            )}
          </Col>
        </Row>
        <Row>
          {errors && <h4>Errors</h4> &&
            errors.map((error) => (
              <div key={error.field}>
                <Alert variant="danger">
                  {error.field + " : " + error.desc}
                </Alert>
              </div>
            ))}
        </Row>
      </Container>
    );
  }
}
