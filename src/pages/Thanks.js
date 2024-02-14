import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Thanks.scss";

export const Thanks = () => {
  return (
    <Row id="thanks">
      <Col xs={12} className="d-flex justify-content-center">
        <h1>
          Gracias por contactanos.
          <br /> <span>Nos comunicaremos a la brevedad</span>
        </h1>
      </Col>
      <Col xs={12} className="mt-5">
        <Link to={"/"}>
          <p>Volver al home</p>
        </Link>
      </Col>
    </Row>
  );
};
