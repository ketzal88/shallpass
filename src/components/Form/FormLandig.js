import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


import { Button, Col, Image, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { vector } from '../../assets'

import styles from './FormLanding.module.scss'

export const FormLanding = ({
  SERVICE_ID = process.env.REACT_APP_SERVICE_ID,
  TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID,
  PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY,
  id = "fromHeader",
  submitText,
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

    handleFormDataLayer(form.current[2].value, form.current[1].value);
  };

  const navigate = useNavigate();

  formResponse && navigate("/thanks");

  console.log(id + ' ' + submitText)

  return (
    <>

      <form id={id} ref={form} onSubmit={sendEmail} className={`${styles.formComponet}`}>
        <Row>
          <Col className={`${styles.itemForm} ${styles.emailBox}`}>
            <label>Email</label>
            <input
              type="email"
              name="user_email"
              placeholder="Ingresa tu email"
              required
              style={{ borderRadius: '24px !important' }}
            />
          </Col>
          <Col
            md={4} xs={12}
            id="sendEmail"
            className={`${styles.itemForm} `}
            style={{ paddingRight: '12px', paddingLeft: '12px' }}
          >
            <Button variant="primary" className="rounded-pill" type="submit">
              {submitText} <Image src={vector} />
            </Button>
          </Col>
        </Row>
        <input type="hidden" name="form_id" value={id} />
      </form>
    </>
  );
};
