import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Col } from "react-bootstrap";
import FlipCard from "./Flip";
import DataCards from "../UI/ex/exampleData";
import AddNew from "./add";
// import Star from "./Star";


export default function Home() {
  return (
    <>
<Container>
  <Col md="3">
  </Col>
    <FlipCard />
    {/* <Star /> */}
    <div style={{height:"100px"}}></div>
<DataCards />
<AddNew />
</Container>
    </>
  );
}
