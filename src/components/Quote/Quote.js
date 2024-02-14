import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import { circleGrad, quoteIcon } from "../../assets";
import "./Quote.scss";

export const Quote = ({ data }) => {
  const quote = data;

  return (
    <Row id={"Quote"}>
      <Col className="cont">
        <Row xs={1} xxl={2} className="g-4">
          {quote.map(({ text, logo }, id) => (
            <Col key={id}>
              <Card>
                <Col id="quoteIcon">
                  <Image src={quoteIcon} fluid />
                </Col>
                <Card.Body>{text}</Card.Body>
                <Card.Img className="logoSponsor" src={logo} />
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
      <Row className="circleGrad">
        <Image src={circleGrad} />
      </Row>
    </Row>
  );
};
