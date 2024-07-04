import React, { useState } from "react";
import { Button, Col, Image, Row } from "react-bootstrap";
import { vector } from "../../assets";
import styles from "./FormLanding.module.scss";

export const FormLandingWhatsApp = ({ id = "fromHeader", submitText }) => {
  const [loading, setLoading] = useState(false);

  const openWhatApp = () => {
    setLoading(true);
    window.dataLayer.push({
      event: "WhatAppCiudania",
      sent: true,
    });

    window.open(
      `https://api.whatsapp.com/send?phone=+5491161030547&text=${encodeURIComponent(
        process.env.REACT_APP_ESPANOLA_MSG
      )}`,
      "_blank",
      "noreferrer"
    );
    setLoading(false);
  };

  return (
    <>
      <form id={id} className={`${styles.formComponet}`}>
        <Row className="">
          <Col className={`${styles.itemForm} ${styles.emailBox}`}>
            <label>Teléfono</label>
            <input
              type="number"
              name="user_phone"
              placeholder="Dejá tu teléfono"
              required
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
              onClick={() => openWhatApp()}
              disabled={loading}
              style={{ display: "flex", alignItems: "center" }}
            >
              {submitText} <Image src={vector} />
            </Button>
          </Col>
        </Row>
        <input type="hidden" name="form_id" value={id} />
      </form>
    </>
  );
};
