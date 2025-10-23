import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import { useDynamicNavigation } from "../../hooks/useDynamicNavigation ";
import { vector } from "../../assets";
import styles from "./Header.module.scss";

export const Header = ({ logo }) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 526px)" });

  const navigate = useDynamicNavigation({
    subject: `${process.env.REACT_APP_LLC_SUBJECT}`,
  });

  return (
    <Container className={`${styles.header}`}>
      <Row className={`align-items-center h-100`}>
        <Col className={`${styles.logo}`}>
          <Image src={logo} fluid width="147px" />
        </Col>
        <Col className={`${styles.cta}`}>
          <Button className="rounded-pill" onClick={navigate({ newTab: true })}>
            {isTabletOrMobile ? (
              <>
                <span>Ver precios </span>
                <Image src={vector} width="16px" height="16px" />{" "}
              </>
            ) : (
              <>
                <span>Ver precios </span>
                <Image src={vector} width="16px" height="16px" />{" "}
              </>
            )}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};
