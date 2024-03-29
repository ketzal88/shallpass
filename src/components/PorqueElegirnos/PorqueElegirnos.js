import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { porqueCompleto } from "../../assets";
import "./PorqueElegirnos.scss";

export const PorqueElegirnos = () => {
  return (
    <Row id="porqueElegirnos">
      <Container>
        <Row>
          <Col md={6}>
            <Image src={porqueCompleto} fluid />
          </Col>
          <Col md={6}>
            <h2>
              Por qué
              <br /> elegirnos?
            </h2>
            <p>
              Buscamos asistirte en tus ideas, proyectos y negocios. Nos
              ocupamos de las cuestiones que te estresan y te generan
              incertidumbre para que
              <span> vos te enfoques en potenciar tu negocio.</span>
            </p>
          </Col>
        </Row>
      </Container>
    </Row>
  );
};
