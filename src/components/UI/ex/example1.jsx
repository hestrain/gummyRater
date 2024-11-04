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
                    <h2>{gummy.brand}:</h2>
                    <h3>{gummy.title}</h3>
                    <div className="amounts">
                        <strong>THC: </strong>{gummy.thc}mg | 
                    <strong> CBD: </strong>{gummy.cbd}mg
                    </div>
                    <div className="ratings">
                    <div className="rating">Overall: {gummy.rating}/10 </div>
                    <div className="rating">Munchies: {gummy.munchie}/10 </div>
                    <div className="rating">Horndog: {gummy.horn}</div>
                    </div>
                    <h4>General Notes</h4>
                    <ul key={gummy.id}>
                        {notes.map((note) => {
                            return(
                                <li key={note.index} className="smush">{note}</li>
                            )
                        })}
                        <li><strong>Kick-In Time: </strong>{gummy.felt} </li>
                        <li><strong>Morning After: </strong>{gummy.morningAfter} </li>
                        <li><strong>Weeknight Friendly? </strong>{gummy.weeknight} </li>
                    </ul>
                    <h4>Munchie Notes</h4>
                    <ul>
                    
                                <li className="smush">{gummy.munchNotes}</li>

                    </ul>

                    
                </Card>
                </Col>
                </>
            )
        })}
        </Row>
        </Container>
  )
}