import { React } from "react";
import { Col, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Card } from "react-bootstrap";

export default function Example(props) {
  return (
    <Container>
      <Row style={{justifyContent:"center"}}>
        {props.exampleData.map((gummy) => {
            let notes = gummy.notes;
            return(
                <>
                <Col md="6" key={gummy.id}>
                <Card className="weedcard" id={gummy.title}>
                    <h2>{gummy.title}</h2>
                    <p className="amounts">
                        <strong>THC: </strong>{gummy.thc}mg | 
                    <strong> CBD: </strong>{gummy.cbd}mg
                    </p>
                    <ul key={gummy.id}>
                        {notes.map((note) => {
                            return(
                                <li key={note.index} className="smush">{note}</li>
                            )
                        })}
                    </ul>
                    <h3>Rating: {gummy.rating}/5 </h3>
                    
                </Card>
                </Col>
                </>
            )
        })}
        </Row>
        </Container>
  )
}