import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <>
      <Navbar bg="light" style={{ justifyContent: "space-between" }}>
        <Navbar.Brand as={Link} to="/">
          <Image
            src="https://i.ibb.co/RCMvBDh/Lurb-Disk-logo.png"
            style={{ width: "150px" }}
          />
        </Navbar.Brand>
        <Nav>
          <Nav.Link
            as={Link}
            to="/user"
            style={{ fontWeight: "bold", fontSize: "25px" }}
          >
            Profile
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
