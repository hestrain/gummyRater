import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Row } from "react-bootstrap";

export default function Footer() {
  return (
    <div>
      <Navbar expand="lg" className="bg-dark body-tertiary" fixed="sticky">
        <Row>

        <Navbar.Brand
          style={{ fontSize: "small", color: "antiquewhite", margin: "10px" }}
        >
          © HeatherEllen Strain 2024
        </Navbar.Brand>
        </Row>
      </Navbar>
    </div>
  );
}
