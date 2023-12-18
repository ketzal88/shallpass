import React from "react";
import { Col, Container, Image } from "react-bootstrap";
import { logoPassFullColor } from "../../assets";

import "./Footer.scss";

export const Footer = () => {
  return (
    <footer>
      <Container>
        <Col>
          <Image src={logoPassFullColor} />
        </Col>
        <Col>
          <p>
            Ponete en contacto con nosotros,
            <br />
            te esperamos
          </p>
        </Col>
      </Container>
    </footer>
  );
};
