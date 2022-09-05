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
import { MyFooter } from "./MyFooter";
import { MyNavBar } from "./MyNavBar";
export function BasicLayout({ children }) {
  return (
    <>
      <MyNavBar />
      <Container style={{ marginTop: "65px" }}>{children}</Container>
      <MyFooter />
    </>
  );
}
