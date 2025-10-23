import React from "react";
import { Button, Col, Image, Row } from "react-bootstrap";

import styles from "./HeaderCTA.module.scss";
import { logoShallPassBaloon, vector } from "../../../assets";
import { useMediaQuery } from "react-responsive";
import useScrollTo from "../../../hooks/useScrollTo";

export const HeaderCTA = ({
  whatsAppSubject = process.env.REACT_APP_CIUDADANIA_SUBJECT,
  idTo = "llc",
}) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 526px)" });

  const scrollTo = useScrollTo();

  return (
    <Row className={`${styles.main}`}>
      <Col xs={4} md={2} className={`${styles.logoContainer}`}>
        <Image src={logoShallPassBaloon} alt="Logo de Shall Pass" />
      </Col>
      <Col className={`${styles.ctaButtonContainer} h-100`}>
        <Button className="rounded-pill" onClick={() => scrollTo(idTo)}>
          {isTabletOrMobile ? (
            <>
              <span>Contratar </span>
              <Image
                src={vector}
                width="16px"
                height="16px"
                alt="flecha hacia la derecha"
              />
            </>
          ) : (
            <>
              <span>Contratar </span>
              <Image
                src={vector}
                width="16px"
                height="16px"
                alt="flecha hacia la derecha"
              />
            </>
          )}
        </Button>
      </Col>
    </Row>
  );
};
