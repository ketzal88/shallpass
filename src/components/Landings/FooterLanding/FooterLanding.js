import React from "react";
import { Col, Image, Row } from "react-bootstrap";

import styles from "./FooterLanding.module.scss";
import { logoShallPassBaloon } from "../../../assets";

export const FooterLanding = () => {
  const date = () => {
    return new Date().getFullYear();
  };
  return (
    <Row className={`${styles.FooterLanding}`}>
      <Col xs={12} md={6} className={`${styles.brand}`}>
        <Image src={logoShallPassBaloon} height={36.5} />
        {/* <p>Confiá en shallpass</p> */}
      </Col>
      <Col xs={12} lg={6} className={`text-end ${styles.date}`}>
        30 N Gould St Ste N Sheridan, WY 82801 <br />{" "}
        joel@consultorashallpass.com <br /> +54 9 11 3465 8988 <br /> ©
        Copyright {date()}. All Rights Reserved.
      </Col>
    </Row>
  );
};
