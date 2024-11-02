import { Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Card from "react-bootstrap/Card";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import ReactCardFlipCard from 'react-card-flip';
import FlipCard from "./Flip";


export default function Home() {
  return (
    <>
<Container>
  <Col md="3">
  <Card>
    <Card.Title>

    Login
    </Card.Title>
    <label for="userName">Username</label>
  <input type="text" id="userName" name="userName"></input>
    <label for="password">Password</label>
  <input type="password" id="password" name="password"></input>
  <button type="submit">Login</button>
    </Card>
  </Col>
    <FlipCard />
    <div style={{height:"100px"}}></div>
</Container>
    </>
  );
}
