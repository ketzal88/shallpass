import React from "react";
import { Col, Row, Container, Image, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import "./Thanks.scss";
import { logoPassFullColor } from "../assets";

export const Thanks = () => {

  const navigate = useNavigate();

  return (
    <Container id="thanks" fluid>
      <Row className="logoContainer">
        <Col className="logoBox">
          <Image src={logoPassFullColor} fluid />
        </Col>
      </Row>
      <Row className="mesageContainer">
        <Col xs={12} className="col align-self-center">
          <h1>
            Muchas gracias!
            <br />
          </h1>
          <p>Hemos enviado su consulta con éxito</p>
          <Button
            className="rounded-pill"
            onClick={() => navigate(-1)}
          >
            Volver a la página anterior
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
