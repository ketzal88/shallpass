import React, { useEffect, useState } from "react";
import { Col, Row, Container, Image, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { logoShallPassBaloon, whatsAppBlack } from "../assets";
import { useDynamicNavigation } from "../hooks/useDynamicNavigation ";
import useScreenSize from "../hooks/useScreenSize";

import "./Thanks.scss";

export const Thanks = () => {
  const isMobile = useScreenSize();

  const { id } = useParams();

  const [newMsg, setNewMsg] = useState("No msg");

  useEffect(() => {
    switch (id) {
      case "monotributo":
        setNewMsg(process.env.REACT_APP_MONOTRIBUTO_MSG);
        break;
      case "llc":
        setNewMsg(process.env.REACT_APP_LLC_MSG);
        break;
      case "espanola":
        setNewMsg(process.env.REACT_APP_ESPANOLA_MSG);
        break;

      default:
        setNewMsg(process.env.REACT_APP_HOME_MSG);
        break;
    }
  }, [id]);

  const navigate = useNavigate();

  const navigateWhatsApp = useDynamicNavigation({ subject: `${newMsg}` });

  return (
    <Container id="thanks" fluid>
      <Row className="mesageContainer">
        <Col
          xs={12}
          className="col align-self-center"
          style={{ maxWidth: "650px" }}
        >
          <Row>
            <Image src={logoShallPassBaloon} />
          </Row>
          <h1>
            Muchas gracias!
            <br />
          </h1>
          <p>
            Hemos enviado su consulta con éxito. {!isMobile && <br />}Si estas
            apurado, podes contactarnos a través de Whatsapp
          </p>
          <Row>
            <Col xs={12} lg={6} className="btnContainer text-end">
              <Button
                className={`rounded-pill left`}
                variant="outline-primary"
                onClick={() => navigate(-1)}
              >
                Volver a la página anterior
              </Button>
            </Col>
            <Col className="btnContainer text-start">
              <Button
                className="rounded-pill d-flex align-items-center justify-content-center"
                onClick={navigateWhatsApp({ newTab: true })}
              >
                Consultar por Whatsapp{" "}
                <Image src={whatsAppBlack} className="whatsapp-icon" />
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
