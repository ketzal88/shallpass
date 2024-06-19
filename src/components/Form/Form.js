import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Form.scss";

export const Form = ({
  SERVICE_ID = process.env.REACT_APP_SERVICE_ID,
  TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID,
  PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY,
  id = "fromHeader",
  submitText = 'ENVIAR CONSULTA',
}) => {

  const form = useRef();
  const [formResponse, setFormResponse] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `${SERVICE_ID}`,
        `${TEMPLATE_ID}`,
        form.current,
        `${PUBLIC_KEY}`,
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormResponse(true);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  const navigate = useNavigate();

  // formResponse ? navigate("/thanks") : console.log("form sin completar");
  useEffect(() => {
    if (formResponse) {
      navigate(`/thanks/${id}`);
    }
  }, [formResponse, navigate, id]);

  return (
    <>
      <form id={id} ref={form} onSubmit={sendEmail}>
        <Container className="h-100">
          <Row className="h-100 justify-content-between gy-0">
            <Col md={6} className="fomItem ">
              <label>Nombre</label>
              <br />
              <input
                type="text"
                name="user_name"
                placeholder="Ingresa tu nombre"
              />
            </Col>
            <Col md={6} className="fomItem">
              <label>Teléfono</label>
              <br />
              <input
                type="tel"
                name="user_phone"
                placeholder="Ingresa tu teléfono"
                required
              />
            </Col>
            <Col md={12} className="fomItem ">
              <label>Email</label>
              <br />
              <input
                type="email"
                name="user_email"
                placeholder="Ingresa tu email"
                required
              />
            </Col>
            <Col md={12} className="formItem">
              <label>Consulta</label>
              <br />
              <textarea
                name="message"
                placeholder="Dejanos un mensaje"
                required
              />
            </Col>
            <Col md={6}></Col>
            <Col md={6} id="sendEmail" className="col align-self-end ">
              <Button variant="primary">
                <input type="submit" value={submitText} />
              </Button>
            </Col>
          </Row>
        </Container>
      </form>
    </>
  );
};
