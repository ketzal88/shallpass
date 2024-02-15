import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./Form.scss";

import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { vector } from "../../assets";

export const FormLanding = ({
  SERVICE_ID = process.env.REACT_APP_SERVICE_ID,
  TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID,
  PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY,
  id = "fromHeader",
  submitText = "ENVIAR CONSULTA",
}) => {
  const form = useRef();
  const [formResponse, setFormResponse] = useState(false);

  const handleFormDataLayer = (email, phone) => {
    window.dataLayer.push({
      event: "FormData",
      email: email,
      phone: phone,
      sent: true,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        `${SERVICE_ID}`,
        `${TEMPLATE_ID}`,
        form.current,
        `${PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormResponse(true);
        },
        (error) => {
          console.log(error.text);
        }
      );

    handleFormDataLayer(form.current[1].value, form.current[2].value);
  };

  const navigate = useNavigate();

  formResponse && navigate("/thanks");

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
                placeholder="Escribinos tu mensaje o consulta"
                required
              />
            </Col>
            <Col md={6}></Col>
            <Col
              md={6}
              xs={12}
              id="sendEmail"
              className={`align-self-end text-end`}
              style={{ paddingRight: "12px", paddingLeft: "12px" }}
            >
              <Button variant="primary" className="rounded-pill" type="submit">
                {submitText} <Image src={vector} />
              </Button>
            </Col>
          </Row>
        </Container>
      </form>
    </>
  );
};
