import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { appTitle, appLogo } from "../../config/appConfig";

export function MyNavBar() {
  return (
    <Navbar variant="dark" bg="dark" expand="lg" fixed="top">
      <Navbar.Brand>
        <Link to="/">
          <img src={appLogo} width="30" height="30" alt="" />
          {appTitle}
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link href="#link" as="div">
            Links
          </Nav.Link>
          <NavDropdown title="Assets" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/assets/models">
              3D Models
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/assets/animations">
              Animations
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/assets/textures">
              Textures
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/assets/sprites">
              Sprites
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/assets/unity">
              Unity
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/assets/unreal">
              Unreal
            </NavDropdown.Item>
          </NavDropdown>{" "}
          *
          <Nav.Link as={Link} to="/designer">
            Designer
          </Nav.Link>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
