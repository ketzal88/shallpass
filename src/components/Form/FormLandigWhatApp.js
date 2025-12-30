import React, { useState } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { vector } from "../../assets";
import styles from "./FormLanding.module.scss";

export const FormLandingWhatsApp = ({ id = "fromHeader", submitText }) => {
  const [loading, setLoading] = useState(false);

  const validatePhone = (phone) => {
    // Allow digits, spaces, +, -, and parentheses
    const phoneRegex = /^[\d\s+\-()]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, "").length >= 8;
  };

  const openWhatApp = (e) => {
    e.preventDefault();

    const phoneInput = e.target
      .closest("form")
      .querySelector('input[name="user_phone"]');
    const phone = phoneInput?.value?.trim() || "";

    if (!phone || !validatePhone(phone)) {
      alert("Por favor, ingrese un teléfono válido.");
      return;
    }

    setLoading(true);
    window.dataLayer.push({
      event: "WhatAppCiudania",
      sent: true,
    });

    const message = process.env.REACT_APP_ESPANOLA_MSG || "";
    const safeMessage = encodeURIComponent(message);
    const safePhone = encodeURIComponent("+5491161030547");

    window.open(
      `https://api.whatsapp.com/send?phone=${safePhone}&text=${safeMessage}`,
      "_blank",
      "noopener,noreferrer"
    );
    setLoading(false);
  };

  return (
    <>
      <form
        id={id}
        className={`${styles.formComponet}`}
        onSubmit={openWhatApp}
        noValidate
      >
        <Row className="">
          <Col className={`${styles.itemForm} ${styles.emailBox}`}>
            <label htmlFor={`${id}-phone`}>Teléfono</label>
            <input
              id={`${id}-phone`}
              type="tel"
              name="user_phone"
              placeholder="Dejá tu teléfono"
              maxLength={20}
              required
              autoComplete="tel"
              style={{ borderRadius: "24px !important" }}
            />
          </Col>
          <Col
            lg={4}
            xs={12}
            id="sendEmail"
            className={`${styles.itemForm}`}
            style={{ paddingRight: "12px", paddingLeft: "12px" }}
          >
            <Button
              variant="primary"
              className="rounded-pill"
              type="submit"
              disabled={loading}
              style={{ display: "flex", alignItems: "center" }}
            >
              {loading ? "Abriendo..." : submitText} <Image src={vector} />
            </Button>
          </Col>
        </Row>
        <input type="hidden" name="form_id" value={id} />
      </form>
    </>
  );
};
