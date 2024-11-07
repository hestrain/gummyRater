import { React } from "react";
import { Col, Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Card } from "react-bootstrap";

function leaves(rating) {
  const leafRating = [...Array(rating)].map(() => "🍁").join("");
  return leafRating;
}
function cookies(munchie) {
  const cookieRating = [...Array(munchie)].map(() => "🍪").join("");
  return cookieRating;
}

export default function Example(props) {
  return (
    <Container>
      <Row style={{ justifyContent: "center" }}>
        {props.exampleData.map((gummy) => {
          let notes = gummy.notes;
          let leaf = leaves(gummy.rating);
          let cookie = cookies(gummy.munchie);
          let photos = gummy.pics;
          console.log(photos);
          
          return (
            <>
              <Col md="6" key={gummy.id}>
                <Card className="weedcard" id={gummy.title}>
                  <h2>{gummy.brand}:</h2>
                  <h3>{gummy.title}</h3>
                  <div className="amounts">
                    <div className="amount">
                      <strong>THC: </strong>
                      {gummy.thc}mg
                    </div>
                    <div className="amount">|</div>
                    <div className="amount">
                      <strong> CBD: </strong>
                      {gummy.cbd}mg
                    </div>
                  </div>
                  <div className="photos">
                    
                  </div>
                  <div className="ratings">
                    <div className="leaf rating" aria-valuetext={gummy.rating}>
                      <strong>Overall: </strong> {leaf}{" "}
                    </div>
                    <div className="munchie rating" aria-valuetext={gummy.munchie}>
                      <strong>Munchies: </strong>
                      {cookie}
                    </div>
                    <div className="horn rating">
                      <strong>Horndog: </strong>
                      {gummy.horn}
                    </div>
                  </div>
                  <h4>General Notes</h4>
                  <ul key={gummy.id}>
                    {notes.map((note) => {
                      return (
                        <li key={note.index} className="smush">
                          {note}
                        </li>
                      );
                    })}
                    <li>
                      <strong>Kick-In Time: </strong>
                      {gummy.felt}{" "}
                    </li>
                    <li>
                      <strong>Morning After: </strong>
                      {gummy.morningAfter}{" "}
                    </li>
                    <li>
                      <strong>Weeknight Friendly? </strong>
                      {gummy.weeknight}{" "}
                    </li>
                  </ul>
                  <h4>Munchie Notes</h4>
                  <ul>
                    <li className="smush">{gummy.munchNotes}</li>
                  </ul>
                </Card>
              </Col>
            </>
          );
        })}
      </Row>
    </Container>
  );
}
