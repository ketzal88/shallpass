import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FormLandingWhatsApp } from "../Form/FormLandigWhatApp";
import styles from "./FormSection.module.scss";

export const FormSectionCiudadania = ({ submitText, id }) => {
  return (
    <Container className={`${styles.formSection}`}>
      <Row className={`justify-content-md-center h-100`}>
        <Col lg={8} xl={6}>
          <Col>
            <h6>Confiá en shallpass</h6>
            <h4>Dejá tu WhatsApp y nos comunicaremos</h4>
          </Col>
          <Col>
            <FormLandingWhatsApp
              submitText={submitText}
              TEMPLATE_ID={process.env.REACT_APP_LANDING_TEMPLATE_ID}
              id={id}
            />
          </Col>
        </Col>
      </Row>
    </Container>
  );
};
